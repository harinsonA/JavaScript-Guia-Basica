const button = document.getElementById("button");

/*

Objeto window -> Es el objeto globarl, de el descienden todos
los objetos
    alert()
        window.alert('Hola')
        alert('Hola')

    prompt()

    confirm()
        if (confirm('Acepta?')) {
            console.log('Acepto el hombre')
        } else {
            console.log('No acepto que chimbo')
        }

*/

/*
Objeto console -> Es el objeto que contiene la consola del navegador

    https://developer.mozilla.org/es/docs/web/API/console
    console.log(button)
    console.dir(button)
    console.error()
        console.error('Error');
    console.table()
*/

const persona = {
  nombre: "Harinson",
  apellido: "Arellan",
  edad: 28,
  email: "harrinson.arellan@gmail.com",
};

//console.table(persona)

/*
Objeto location -> es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

// console.log(location.href)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.hash)
//location.reload()
//location.href='https://Facebook.com'

/*
Objeto history
    https://developer.mozilla.org/es/docs/
    DOM/Manipilando_el_historial_del_navegador
    back()
    forward()
    go(n|-n)

    lenth
*/

/*
Objeto date
    https://developer.mozilla.org/es/docs/web/
    JavaScript/Referencial/Objetos_globales/Date

    https://www.3schools.com/jsref/jsref_obj_date.asp
*/

// const date = new Date()
// console.dir(date)

/*
Timers
    timeout:
    https://developer.mozilla.org/en-US/docs/web/API/windowOrWorkerGlobalScope/setTimeout
    setTimeout(()=>{code}, delay-in-miliseconds)-> Hace que se ejecute la funcion despues de delay,
    si lo rerenciamos mediante una variable /constante podemos pararlo
    con clearTimeout(referencia)

    Interval:
    https://developer.mozilla.org/en-US/docs/Web/API/windowOrW
    orkerGlobalScope/setInterval

    setInterval(()=>{code}), delay-in-miliseconds)-> Hace que se ejecute la funcion despues de delay,
    si lo rerenciamos mediante una variable /constante podemos pararlo
    con clearInterval(referencia)

*/

/*
button.addEventListener('click', () =>{

   const timeout =  setTimeout(()=>{
        console.log("Adios")
    },3000)

    clearTimeout(timeout)
})
 */

// const timeout =  setTimeout(()=>{
//     console.log("Adios")
// },2000)

// button.addEventListener('click',()=>{
//     clearTimeout(timeout);
// })

// const saludar = () =>{
//     console.log("Hola")
// }

// const saludar = () => {
//   console.log("HolaHola");
// };

// //const interval = setInterval(saludar, 1000)

// let cont = 0;
// const interval = setInterval(() => {
//   console.log(cont);
//   cont++;
// }, 1000);

// button.addEventListener("click", () => {
//   clearInterval(interval);
// });
