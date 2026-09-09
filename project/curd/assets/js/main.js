// async function loadUsers() {
//     const response = await fetch('api/users.php');
//     const result = await response.json();

//     console.log(result);
// }

// loadUsers();



async function loadUsers() {
    const response = await fetch('api/users.php');
    const result = await response.json();
    const table = document.getElementById('userTable');

    table.innerHTML = "";

    result.data.forEach(user => {
        table.innerHTML += `
        
        <tr>
            <td>${user.id}</td>
            <td class="fw-semibold">${user.username}</td>
            <td><span class="badge badge-age">${user.age}</span></td>
            <td>${user.city}</td>
            <td class="text-end">

                <button
                    class="btn btn-sm btn-outline-primary btn-icon me-1" 
                    data-bs-toggle="modal" 
                    onclick="editUser(${user.id})"
                    data-bs-target="#userModal">
                    <i class="fa-solid fa-pen"></i>
                </button>

                <button 
                    class="btn btn-sm btn-outline-danger btn-icon"
                    data-bs-toggle="modal"
                    onclick="deleteUser(${user.id})"
                    data-bs-target="#deleteModal">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </td>
        </tr>
        `
    });
}


loadUsers();


// document.getElementById('save').addEventListener('click', async () => {

//     const username = document.getElementById('username').value;
//     const age = document.getElementById('age').value;
//     const city = document.getElementById('city').value;

//     const response = await fetch('api/users.php', {

//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },

//         body: JSON.stringify({
//             username: username,
//             age: age,
//             city: city
//         })
//     });

//     const result = await response.json();

//     console.log(result);
    
//     if (result.success) {
//         clearForm();
//         loadUsers();
//     }
// });


document.getElementById('confirmDelete').addEventListener('click', async function () {

    const id = this.dataset.id;

    const response = await fetch(
        `api/users.php?id=${id}`,
        {
            method: 'DELETE'
        }
    );

    const result = await response.json();

    if (result.success) {
        const modelElement = document.getElementById('deleteModal');

        const modal = bootstrap.Modal.getInstance(modelElement);

        modal.hide();

        loadUsers();
    }
})

// async function deleteUser(id) {
//     if(!confirm('Delete this user?')) {
//         return;
//     }

//     const response = await fetch(
//         `api/users.php?id=${id}`,
//         {
//             method: 'DELETE'
//         }    
//     );

//     const result = await response.json();

//     console.log(result);

//     loadUsers();
// }
function deleteUser(id) {

    const button = document.getElementById('confirmDelete');

    button.dataset.id = id;

}

document.getElementById('save').addEventListener('click', async () => {
    const button = document.getElementById('save');
    const id = button.dataset.id;

    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;

    let response;

    if (id) {

        response = await fetch(
            `api/users.php?id=${id}`,
            {
                method : "PUT",
                headers: {
                    'Content-Type' : 'application/json'
                },

                body: JSON.stringify({
                    username,
                    age,
                    city
                })
            }
        );
    } else {
        response = await fetch(
            'api/users.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                
                body: JSON.stringify({
                    username,
                    age,
                    city
                })
            }
        );
    }

    const result = await response.json();
    console.log(result);

    if (result.success) {
        clearForm();
        button.dataset.id = '';
        loadUsers();
    }
});


function clearForm() {
    document.getElementById('username').value = "";
    document.getElementById('age').value = "";
    document.getElementById('city').value = "";
}

async function editUser(id) {

    const response = await fetch(`api/users.php?id=${id}`);

    const result = await response.json();

    const user = result.data.find(user => user.id == id);

    if (!user) {
        return;
    }

    document.getElementById('username').value = user.username;
    document.getElementById('age').value = user.age;
    document.getElementById('city').value = user.city;

    document.getElementById('save').dataset.id = id;
}