const indexDB = window.indexedDB
const formulario = document.getElementById('formulario')

if (indexDB && formulario) {
    let dataBase
    const request = indexDB.open('listaTareas',1)
    request.onsuccess=()=>{
        dataBase = request.result
    }
    request.onupgradeneeded = () =>{
        dataBase = request.result
        const objectStore = dataBase.createObjectStore('tareas',{
            keyPath: "tituloTarea"
        })
    }
    request.onerror = () =>{
        console.log('Error', error)
    }
    const addData = (data) =>{
        const transaction = dataBase.transaction(['tareas'],"readwrite")
        const objectStore = transaction.objectStore('tareas')
        const request = objectStore.add(data)
    }

    formulario.addEventListener('submit', (e) =>{
        e.preventDefault()
        const data = {
            tituloTarea: e.target.tarea.value,
            prioridadTarea: e.target.prioridad.value
        }
        addData(data)
        console.log(data)
    })
}