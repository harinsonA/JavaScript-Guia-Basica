const indexDB = window.indexedDB;
const formulario = document.getElementById("formulario");
const tareas = document.getElementById("tareas");

if (indexDB && formulario) {
  let dataBase;
  const request = indexDB.open("listaTareas", 1);
  request.onsuccess = () => {
    dataBase = request.result;
    console.log("OPEN", dataBase);
    readData();
  };
  request.onupgradeneeded = () => {
    dataBase = request.result;
    console.log("Create", dataBase);
    const objectStore = dataBase.createObjectStore("tareas", {
      keyPath: "tituloTarea",
    });
  };
  request.onerror = () => {
    console.log("Error", error);
  };
  const addData = (data) => {
    const transaction = dataBase.transaction(["tareas"], "readwrite");
    const objectStore = transaction.objectStore("tareas");
    const request = objectStore.add(data);
    readData();
  };

  const getData = (key) => {
    const transaction = dataBase.transaction(["tareas"], "readwrite");
    const objectStore = transaction.objectStore("tareas");
    const request = objectStore.get(key);

    request.onsuccess = () => {
      formulario.tarea.value = request.result.tituloTarea;
      formulario.prioridad.value = request.result.prioridadTarea;
      formulario.button.dataset.action = "update";
      formulario.button.textContent = 'Update Task'
    };
  };
  const updateData = (data) => {
    const transaction = dataBase.transaction(["tareas"], "readwrite");
    const objectStore = transaction.objectStore("tareas");
    const request = objectStore.put(data);
    request.onsuccess = () => {
      formulario.button.dataset.action = "add";
      formulario.button.textContent = 'Add Task'
      readData();
    };
  };

  const readData = () => {
    const transaction = dataBase.transaction(["tareas"], "readonly");
    const objectStore = transaction.objectStore("tareas");
    const request = objectStore.openCursor();
    const fragmetn = document.createDocumentFragment();

    request.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        const tituloTarea = document.createElement("P");
        tituloTarea.textContent = cursor.value.tituloTarea;
        fragmetn.appendChild(tituloTarea);
        const prioridadTarea = document.createElement("P");
        prioridadTarea.textContent = cursor.value.prioridadTarea;
        fragmetn.appendChild(prioridadTarea);

        const actualizarTarea = document.createElement("BUTTON");
        actualizarTarea.dataset.type = "update";
        actualizarTarea.dataset.key = cursor.key;
        actualizarTarea.textContent = "Update";
        fragmetn.appendChild(actualizarTarea);

        const borrarTarea = document.createElement("BUTTON");
        borrarTarea.textContent = "Delete";
        fragmetn.appendChild(borrarTarea);

        cursor.continue();
      } else {
        tareas.textContent = "";
        tareas.appendChild(fragmetn);
      }
    };
  };

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      tituloTarea: e.target.tarea.value,
      prioridadTarea: e.target.prioridad.value,
    };
    if (e.target.button.dataset.action == "add") {
      addData(data);
    } else if (e.target.button.dataset.action == "update") {
      updateData(data);
    }
    formulario.reset();
  });

  tareas.addEventListener("click", (e) => {
    if (e.target.dataset.type == "update") {
      getData(e.target.dataset.key);
    }
  });
}
