/*
    Fetch API
    Proporciona una interfaz para acceder y manipular partes del canal HTTP,
    como peticiones y respuestas.

    Tambien provee un metodo global fetch() que proporciona una forma facil
    y logica de obtener recursos de forma asincrona por la red.

    Esta basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios metodos

        * arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). se utiliza
        cuando se necesita manipular el contenid del archivo

        * blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando
        no se necesita manipular el contenido y se va a trabajar con el archivo directamente

        * clone(): crea un clon de un objeto de respuesta, identico en todos los sentidos, 
        pero almacenado en una variable diferente

        * formData(): Se utiliza para leer los objetos formData

        * json(): Convierte los archivos json en un objeto de javascript

        * text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8
    
    Comprobacion de soporte Fetch
    if (window.fetch != undefined) console.log("Fetch OK")
    else console.log("Fetch no")
*/

const button = document.getElementById("button");

// res = reponse = respuesta
button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => (resp.ok ? Promise.resolve(resp) : Promise.reject(resp)))
    .then((resp) => resp.json())
    .then((resp) => {

      const list = document.getElementById("list");
      const fragment = document.createDocumentFragment();

      for (const userInfo of resp) {
        const listItem = document.createElement("li");
        listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
        fragment.appendChild(listItem);
      }
      list.appendChild(fragment);
    });
});

/*

const button = document.getElementById("button");

button.addEventListener("click", () => {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", (data) => {
    const dataJSON = JSON.parse(data.target.response);

    const list = document.getElementById("list");
    const fragment = document.createDocumentFragment();

    for (const userInfo of dataJSON) {
      const listItem = document.createElement("li");
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
      fragment.appendChild(listItem);
    }
    list.appendChild(fragment);
  });

  xhr.send();
});

*/
