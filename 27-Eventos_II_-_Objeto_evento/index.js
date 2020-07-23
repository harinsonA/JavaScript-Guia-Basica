const form =document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const link = document.getElementById('link');

// input.addEventListener('keyup', (e)=>{
//    console.log(e)
// })

// button.addEventListener('click', (e) =>{
//     console.log(e);
// })

// const gallery = document.getElementById('gallery')

// gallery.addEventListener('click', (e)=>{
//     console.log(e.target.classList.add('red'));
// })

link.addEventListener('click', (e)=>{
    e.preventDefault();
    button.click();
})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('El formulario se ha enviado');
})

button.addEventListener('click', (e)=>{
    input.value='has hecho click';
})
