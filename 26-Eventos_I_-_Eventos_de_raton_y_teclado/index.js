/*
Eventos del raton:
    click -> Cuando pulsamos el boton click izquierdo del raton
        button.addEventListener('click',()=>{
            console.log('CLICK');
        })

    dblclick -> cuando pulsamos dos veces seguidas el boton click izquierdo del raton
        button.addEventListener('dblclick', ()=>{
            console.log('Doble Click');
        })

    mouseenter -> cuando entramos en la zona que tiene el evento
        box.addEventListener('mouseenter', ()=>{
        box.classList.replace('blue','green');
        })

    mouseleave -> cuando salimos de la zona que tiene el evento
        box.addEventListener('mouseleave', ()=>{
            box.classList.replace('green','blue');
        })

    mousedouwn -> cuando pulsamos y no soltamos el boton izquierdo del raton
        box.addEventListener('mousedown',()=>{
            console.log('has pulsado en la caja');
        })

    mouseup -> cuando soltamos el boton izquierdo del raton
        box.addEventListener('mouseup',()=>{
            console.log('has soltado la caja');
        })

    mousemove -> cuando movemos el raton
        box.addEventListener('mousemove', ()=>{
            console.log('Estas moviendo el raton en la caja')
        })


Eventos de teclado:
    keydown -> cuando pulsamos una tecla
        input.addEventListener('keydown', ()=>{
            console.log('Has pulsado una tecla');
        })

    keyup -> cuando soltamos una tecla
        input.addEventListener('keyup', ()=>{
            console.log('Has soltado una tecla');
        })

    keypress -> cuando pulsamos una tecla y no la soltamos
        input.addEventListener('keypress', ()=>{
            console.log('estas pulsando una tecla');
        }) 

*/


const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');
