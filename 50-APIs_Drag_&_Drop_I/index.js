/*

    API drag & drop

    Existen dos partes principales en esta API, el objeto a arrastrar y
    la zona donde vamos a dejarlo

    Para controlar estas acciones tenemos varios eventos de cada una de
    las partes

        Objeto a arrastrar:

            -dragstart: Se dispara al comenzar a arrastrar
            -drag: Se dispara mientras arrastramos
            -dragend: Se dispara cuando soltamos el objeto

        Zona de destino:

            -dragenter: Se dispara cuando el objto entra en la zona de 
            destino
            -dragover: Se dispara cuando el objeto se mueve sobre la 
            zona de destino
            -drop: Se dispara cuando soltamos el objto en la zona de
            destino
            -dragleave: Se dispara cuando el objto sale de la zona de
            destino

*/

const aloy = document.getElementById('aloy')
const zona = document.getElementById('zona')

// Evento dragstart sobre el elemento a arrastrar, se activa cuando 
//inicias el arrastre del elemento
// aloy.addEventListener('dragstart',()=>{ 
//     console.log("Drag Start")
// })

//  Evento drag sobre el elemento a arrastrar, se activa cuando lo 
//estas arrastrando
// aloy.addEventListener('drag',()=>{
//     console.log("Drag")
// })

// Evendo dragend sobre el elemento a arrastrar, se activa cuando sueltas
// el elemento
// aloy.addEventListener('dragend',()=>{
//     console.log("Drag End")
// })

// Evento dragenter sobre la zona donde va dejarse el elemento,
// se activa cuando el elemento cruza la zona o ingresa a la zona
// zona.addEventListener('dragenter', () => {
//     console.log('Drag Enter')
// })

// Evento dragover sobre la zona donde va dejar el elemento,
// se activa cuando el elemento se encuetra arrastrandose 
// dentro de la zona sin soltarlo
// zona.addEventListener('dragover', (e) => {
//     e.preventDefault()
//     console.log('Drag Over')
// })

// Evento drop sobre la zona donde va dejar el elemento,
// se activa cuando soltamos el elemento dentro de la zona
// nota, funciona cuando el evento dragover esta activo
// zona.addEventListener('drop', (e) => {
//     e.preventDefault()
//     console.log('Drop')
// })

// Evento dragleave sobre la zona donde va dejar el elemento,
// se activa cuando salimos de la zona sin haber soltado el elemento
// dentro de la zona
// zona.addEventListener('dragleave', (e) => {
//     e.preventDefault()
//     console.log('Drag Leave')
// })