//Documentacion de draggable: https://developer.mozilla.org/es/docs/Web/HTML/Atributos_Globales/draggable

const tareas_pendientes = document.getElementById('tareas_pendientes')
const tareas_finalizadas = document.getElementById('tareas_finalizadas')

//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener

tareas_pendientes.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

tareas_pendientes.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})
tareas_pendientes.addEventListener('dragend', (e) =>{
    e.target.classList.remove('active')
})

tareas_finalizadas.addEventListener('dragover', (e) => {
    e.preventDefault()
})
tareas_finalizadas.addEventListener('drop', (e) => {
    e.preventDefault()
    const elemento = document.getElementById(e.dataTransfer.getData('text'))
    elemento.classList.remove('active')
    tareas_finalizadas.appendChild(tareas_pendientes.removeChild(elemento))
})

tareas_finalizadas.addEventListener('dragstart',(e) =>{
    e.dataTransfer.setData('text/plain', e.target.id)
})
tareas_finalizadas.addEventListener('drag',(e) =>{
    e.target.classList.add('active')
})
tareas_finalizadas.addEventListener('dragend', (e) =>{
    e.target.classList.remove('active')
})
tareas_pendientes.addEventListener('dragover', (e) =>{
    e.preventDefault()
})
tareas_pendientes.addEventListener('drop', (e) =>{
    e.preventDefault()
    const elemento = document.getElementById(e.dataTransfer.getData('text'))
    elemento.classList.remove('active')
    tareas_pendientes.appendChild(tareas_finalizadas.removeChild(elemento))
})