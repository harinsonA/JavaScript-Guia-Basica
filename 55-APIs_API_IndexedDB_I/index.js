const indexDB = window.indexedDB

if (indexDB) {
    let dataBase
    const request = indexDB.open('listaTareas',1)
    request.onsuccess=()=>{
        dataBase = request.result
        console.log("OPEN", dataBase)
    }
    request.onupgradeneeded = () =>{
        dataBase = request.result
        console.log("Create", dataBase)
        const objectStore = dataBase.createObjectStore('tareas')
        const objectStore2 = dataBase.createObjectStore('tareas2')
    }
    request.onerror = () =>{
        console.log('Error', error)
    }
}