// isHeThere = true;

// function waitInQueue() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if(isHeThere) {
//                 resolve('Buy Him');
//             } else {
//                 reject('Sold Him');
//             }
//         }, 1000);
//     });
// }

// // function buyHim() {
// //     waitInQueue().then((message) => {
// //         console.log(message);
// //     })
// //     .catch((error)=> {
// //         console.log(error);
// //     })
// //     .finally(() => {
// //         console.log('Fuck you');
// //     })
// // }

// async function buyHim() {
//     try {
//         let result = await waitInQueue();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// // console.log('Hello Nisath');
// buyHim();

// console.log(document.title);
// js - selectar
// console.log(document.title);

// let element = document.getElementById('some');
// let element = document.getElementsByTagName('h1');
// let element = document.getElementsByClassName('divclass');
// let element = document.querySelector('h1');



// // element.textContent += "Where are you?";
// // element.className = 'divClass'
// // element.innerHTML = '<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>';
// // element.style.backgroundColor = 'red';



// let paragraph = document.createElement('p');
// paragraph.id = 'p-id';
// paragraph.textContent  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
// element.append(paragraph);
// // element.prepend(paragraph);

// console.log(paragraph);



// Event Listener

// let btn = document.getElementById('button');

// btn.addEventListener('click', (event)=>{
//     btn.textContent = 'Submited';
//     console.log('Clicked')
// });

// btn.addEventListener('mouseover', (event) => {
//     btn.textContent = 'Submitting...';
//     console.log('Hover');
// });

// btn.addEventListener('mouseout', (event)=>{
//     btn.textContent = "Submit";
//     console.log('Submit');
// });

// document.addEventListener('keydown', (event)=>{
//    console.log(event.key); 
//    switch(event.key){
//     case 'ArrowUp':
//         btn.textContent = Number(btn.textContent) + 1;
//         break;
//     case 'ArrowDown':
//         btn.textContent = Number(btn.textContent) - 1;
//         break;
//     default:
//         btn.textContent = 'Invalid Key';
//         break;
//    }
// });