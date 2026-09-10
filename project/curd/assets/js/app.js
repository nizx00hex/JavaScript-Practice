
//EXERCISE 1
// const btn = document.getElementById('btn');
// const title = document.getElementById('title');

// btn.addEventListener('click', function () {
//     console.log('Button Clicked!');
//     title.textContent = "Hello, Nisath!"; //marked
// });



// //EXERCISE 2
// const nameInput = document.getElementById('name');
// //const name = document.getElementById('name').value; //<- why use this ?
// const btn = document.getElementById('btn');
// const result = document.getElementById('result');

// btn.addEventListener('click', function () {
//     result.innerHTML = `<h5>Hello, ${nameInput.value}</h5>`;
    
// });


//EXERCISE 3
// const nameInput = document.getElementById('name');
// const result = document.getElementById('result');

// nameInput.addEventListener('input', function () {
//     result.textContent = `Hello, ${nameInput.value}`;
    
// });


// // EXERCISE 3
// const nameTask = document.getElementById('task');
// const btn = document.getElementById('addBtn');
// const list = document.getElementById('list');


// btn.addEventListener('click', function () {
//     const li = document.createElement('li');
//     const deleteBtn = document.createElement('button');
    
//     li.textContent = nameTask.value;
//     deleteBtn.textContent = 'Delete';
    
//     deleteBtn.addEventListener('click', function () {
//         li.remove();
//     });

//     li.appendChild(deleteBtn); 
//     list.appendChild(li);

//     nameTask.value = '';
//     // document.body.appendChild(li);
//     // list.textContent = `Hello, ${nameInput.value}`;
// });











// const loadBtn = document.getElementById('loadBtn');
// const users = document.getElementById('users');


// loadBtn.addEventListener('click', async function () {
//     const response = await fetch('api/hello.php');
//     const data = await response.json();

//     users.innerHTML = '';

//     data.users.forEach(user => {
//         users.innerHTML += `
//             <h2>${user.name} - ${user.age} - ${user.country}</h2>     
//         `;  
//     })

//     console.log(data.message);
//     // users.textContent = `My name is ${data.name} and I am ${data.age} years old`;
// });


// const sendBtn = document.getElementById('sendBtn');
// const nameInput = document.getElementById('name');
// const result = document.getElementById('result');


// sendBtn.addEventListener('click', async function () {
//     const name = nameInput.value;
//     // console.log(name);

//     const response = await fetch('api/hello.php', {
//         method: 'POST',

//         headers: {
//             'Content-Type': 'application/json'
//         },

//         body: JSON.stringify({
//             name: name
//         })
//     });
//     const data = await response.json();

//     result.textContent = data.message;
// });
