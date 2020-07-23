const indexDB = window.indexedDB
const formulario = document.getElementById('formulario')
const tareas = document.getElementById('tareas')

if (indexDB && formulario) {
    let dataBase
    const request = indexDB.open('listaTareas',1)
    request.onsuccess=()=>{
        dataBase = request.result
        console.log("OPEN", dataBase)
        readData()
    }
    request.onupgradeneeded = () =>{
        dataBase = request.result
        console.log("Create", dataBase)
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
        readData()
    }
    const readData = () =>{
        const transaction = dataBase.transaction(['tareas'],"readonly")
        const objectStore = transaction.objectStore('tareas')
        const request = objectStore.openCursor()
        const fragmetn = document.createDocumentFragment()

        request.onsuccess = (e)=>{
            const cursor = e.target.result
            if (cursor) {
                const tituloTarea = document.createElement('P')
                tituloTarea.textContent = cursor.value.tituloTarea
                fragmetn.appendChild(tituloTarea)
                const prioridadTarea = document.createElement('P')
                prioridadTarea.textContent = cursor.value.prioridadTarea
                fragmetn.appendChild(prioridadTarea)
                cursor.continue()
            }else{
                tareas.textContent = ''
                tareas.appendChild(fragmetn)
            }
        }
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