/*

    API WebStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:

            sessionStorage mantiene un area de almacenamiento sepadarada para
            cada origen que esta disponible mientras dure la sesion de la 
            pagina (mientras el navegador este abierto, incluyendo recargas
            de pagina y restablecimientos).

            localStorage hace lo mismo, pero persiste incluso cuando el
            navegador se cierre y se reabra.
        
        Ambas funcionan con clave:valor y tienen dos metodos fundamentales
        setItem() para asiganr una clave:valor y getItem() que recibe como 
        parametro la clave de la que queremos obtener el valor

*/

const form = document.getElementById("form");
const keys = document.getElementById("keys");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // const person ={
  //     name: 'Harinson',
  //     email: 'harrinson@gmail.com'
  // }

  // sessionStorage .setItem('person', JSON.stringify(person));
  // sessionStorage .setItem('name', 'Harinson);

  sessionStorage.setItem(form.key.value, form.value.value);

  keys.innerHTML += `<option>${form.key.value}</option>`;

  form.reset();
});

keys.addEventListener("change", () => {
  document.getElementById("infovalue").textContent = sessionStorage.getItem(
    keys[keys.selectedIndex].textContent
  );
});

//sessionStorage.clear();
//sessionStorage.removeItem("name");

/* LocalStorage es lo mismo que sessionStorage,
    la diferencia esta en que localStorage te permite 
    mantener la informacion cuando la persona cierra el 
    navegador y lo vuelve abrir, para eliminar la informacion
    utiliza clear que borra el valor y removeItem que borra
    la key
    
*/
