
// ======================================================
// USER CRUD - main.js
// ======================================================


// ------------------------------------------------------
// GLOBAL VARIABLES
// ------------------------------------------------------

let users = [];


// ------------------------------------------------------
// DOM ELEMENTS
// ------------------------------------------------------

const userTable = document.getElementById("userTable");

const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");

const saveButton = document.getElementById("save");
const confirmDeleteButton = document.getElementById("confirmDelete");

const searchInput = document.getElementById("searchInput");

const userModalElement = document.getElementById("userModal");
const deleteModalElement = document.getElementById("deleteModal");

const userModalTitle =
    document.querySelector("#userModal .modal-title");


// ------------------------------------------------------
// BOOTSTRAP MODALS
// ------------------------------------------------------

const userModal = bootstrap.Modal.getOrCreateInstance(
    userModalElement
);

const deleteModal = bootstrap.Modal.getOrCreateInstance(
    deleteModalElement
);


// ------------------------------------------------------
// LOAD USERS
// ------------------------------------------------------

async function loadUsers() {

    try {

        const response = await fetch("api/users.php");

        if (!response.ok) {
            throw new Error("Failed to load users");
        }

        const result = await response.json();

        if (!result.success) {
            console.error(result.message);
            return;
        }

        users = result.data;

        renderUsers(users);

    } catch (error) {

        console.error("Load error:", error);

    }
}


// ------------------------------------------------------
// RENDER USERS
// ------------------------------------------------------

function renderUsers(data) {

    userTable.innerHTML = "";

    if (data.length === 0) {

        userTable.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    No users found
                </td>
            </tr>
        `;

        updateRecordCount(0);

        return;
    }


    data.forEach((user, index) => {

        userTable.innerHTML += `

            <tr>

                <td>
                    ${index + 1}
                </td>

                <td class="fw-semibold">
                    ${escapeHTML(user.username)}
                </td>

                <td>
                    <span class="badge badge-age">
                        ${user.age}
                    </span>
                </td>

                <td>
                    ${escapeHTML(user.city)}
                </td>

                <td class="text-end">

                    <!-- EDIT BUTTON -->

                    <button
                        type="button"
                        class="btn btn-sm btn-outline-primary btn-icon me-1"
                        onclick="editUser(${user.id})">

                        <i class="fa-solid fa-pen"></i>

                    </button>


                    <!-- DELETE BUTTON -->

                    <button
                        type="button"
                        class="btn btn-sm btn-outline-danger btn-icon"
                        onclick="deleteUser(${user.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </td>

            </tr>

        `;
    });


    updateRecordCount(data.length);
}


// ------------------------------------------------------
// RECORD COUNT
// ------------------------------------------------------

function updateRecordCount(count) {

    const recordCount =
        document.querySelector(".text-muted.small");

    if (recordCount) {

        recordCount.textContent =
            `${count} record(s)`;

    }
}


// ------------------------------------------------------
// OPEN ADD USER MODAL
// ------------------------------------------------------

document
    .querySelector('[data-bs-target="#userModal"]')
    .addEventListener("click", function () {

        clearForm();

        saveButton.dataset.id = "";

        userModalTitle.textContent = "Add User";

    });


// ------------------------------------------------------
// EDIT USER
// ------------------------------------------------------

function editUser(id) {

    const user = users.find(
        user => Number(user.id) === Number(id)
    );


    if (!user) {

        console.error("User not found");

        return;
    }


    // Put user data into form

    usernameInput.value = user.username;

    ageInput.value = user.age;

    cityInput.value = user.city;


    // Store ID in save button

    saveButton.dataset.id = user.id;


    // Change modal title

    userModalTitle.textContent = "Edit User";


    // Open modal

    userModal.show();
}


// ------------------------------------------------------
// SAVE USER
// CREATE + UPDATE
// ------------------------------------------------------

saveButton.addEventListener("click", async function () {

    const id = this.dataset.id;


    const username =
        usernameInput.value.trim();

    const age =
        ageInput.value.trim();

    const city =
        cityInput.value.trim();


    // --------------------------------------------------
    // VALIDATION
    // --------------------------------------------------

    if (!username || !age || !city) {

        alert("Please fill all fields.");

        return;
    }


    if (age < 1 || age > 120) {

        alert("Age must be between 1 and 120.");

        return;
    }


    let response;


    try {

        // ------------------------------------------------
        // UPDATE
        // ------------------------------------------------

        if (id) {

            response = await fetch(
                `api/users.php?id=${id}`,
                {

                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        username: username,

                        age: age,

                        city: city

                    })

                }
            );

        }


        // ------------------------------------------------
        // CREATE
        // ------------------------------------------------

        else {

            response = await fetch(
                "api/users.php",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        username: username,

                        age: age,

                        city: city

                    })

                }
            );

        }


        // ------------------------------------------------
        // RESPONSE
        // ------------------------------------------------

        const result =
            await response.json();


        console.log(result);


        if (!result.success) {

            alert(
                result.message ||
                "Something went wrong."
            );

            return;
        }


        // ------------------------------------------------
        // SUCCESS
        // ------------------------------------------------

        clearForm();

        this.dataset.id = "";


        // Reset title

        userModalTitle.textContent =
            "Add User";


        // Close modal

        userModal.hide();


        // Reload users

        await loadUsers();


    } catch (error) {

        console.error(
            "Save error:",
            error
        );

        alert(
            "Something went wrong while saving the user."
        );

    }

});


// ------------------------------------------------------
// CLEAR FORM
// ------------------------------------------------------

function clearForm() {

    usernameInput.value = "";

    ageInput.value = "";

    cityInput.value = "";

}


// ------------------------------------------------------
// DELETE USER - OPEN CONFIRMATION MODAL
// ------------------------------------------------------

function deleteUser(id) {

    // Store user ID

    confirmDeleteButton.dataset.id = id;


    // Find user

    const user = users.find(
        user => Number(user.id) === Number(id)
    );


    // Optional: show username in modal

    if (user) {

        const message =
            deleteModalElement.querySelector(".modal-body p");

        message.textContent =
            `Delete "${user.username}"?`;

    }


    // Open Bootstrap modal

    deleteModal.show();
}


// ------------------------------------------------------
// CONFIRM DELETE
// ------------------------------------------------------

confirmDeleteButton.addEventListener(
    "click",
    async function () {

        const id = this.dataset.id;


        if (!id) {

            console.error(
                "No user ID selected."
            );

            return;
        }


        try {

            const response = await fetch(
                `api/users.php?id=${id}`,
                {
                    method: "DELETE"
                }
            );


            const result =
                await response.json();


            console.log(result);


            if (!result.success) {

                alert(
                    result.message ||
                    "Failed to delete user."
                );

                return;
            }


            // Remove stored ID

            this.dataset.id = "";


            // Close modal

            deleteModal.hide();


            // Reload users

            await loadUsers();


        } catch (error) {

            console.error(
                "Delete error:",
                error
            );

            alert(
                "Something went wrong while deleting the user."
            );

        }

    }
);


// ------------------------------------------------------
// SEARCH
// ------------------------------------------------------

searchInput.addEventListener(
    "input",
    function () {

        const search =
            this.value
                .trim()
                .toLowerCase();


        if (!search) {

            renderUsers(users);

            return;
        }


        const filteredUsers =
            users.filter(user => {

                const username =
                    String(user.username)
                        .toLowerCase();

                const city =
                    String(user.city)
                        .toLowerCase();


                return (
                    username.includes(search) ||
                    city.includes(search)
                );

            });


        renderUsers(filteredUsers);

    }
);


// ------------------------------------------------------
// ESCAPE HTML
// ------------------------------------------------------
// Prevent user data from being directly inserted
// into HTML without escaping special characters.
// ------------------------------------------------------

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ------------------------------------------------------
// INITIAL LOAD
// ------------------------------------------------------

loadUsers();
