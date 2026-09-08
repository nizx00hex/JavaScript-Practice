async function loadUsers() {
    const response = await fetch('api/users.php');
    const result = await response.json();

    console.log(result);
}

loadUsers();