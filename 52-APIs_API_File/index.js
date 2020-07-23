/*
    API File
        Esta API nos sirve para leer archivos que el usuario cargue
        en la web, se pueden cargar archivos desde un input de tipo 
        file o desde el objeto dataTransfer de la API Drag&Drop

        La interfaz mas utlizada para interactuar con ella es 
        FileReader

        https://developer.mozilla.org/es/docs/Web/API/FileReader

*/

const archivo = document.getElementById("archivo");
const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");
const imagenes = document.getElementById('imagenes')

// archivo.addEventListener("change", (e) => {
//   const file = e.target.files[0];

//   const fileReader = new FileReader();
//   fileReader.readAsText(file);

//   fileReader.addEventListener("load", (e) => {
//     texto.textContent = e.target.result;
//   });
// });

// Carga de Imagen Simple
// archivo.addEventListener("change", (e) => {
//   const file = e.target.files[0];

//   const fileReader = new FileReader();
//   fileReader.readAsDataURL(file);

//   fileReader.addEventListener("load", (e) => {
//     imagen.setAttribute("src", e.target.result);
//   });
// });

// Carga de imagenes Multiples
archivo.addEventListener("change", (e) => {
  const files = e.target.files;
  const fragment = document.createDocumentFragment();

  for (const file of files) {
    const fileReader = new FileReader();
    const img = document.createElement("img");
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      img.setAttribute("src", e.target.result);
    });
    fragment.appendChild(img)
  }
  imagenes.appendChild(fragment)
});
