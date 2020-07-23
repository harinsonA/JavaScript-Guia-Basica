// DOM - Crear e insertar elementos

/*

Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = codigo HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de codigo: document.createDocumentFragment()

*/

const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
  "Otro valor"
];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const daysSelect = document.getElementById("daysSelect");

// const itemList = document.createElement('LI');
// itemList.textContent = 'lunes';

// daysList.appendChild(itemList);

title.innerHTML = "DOM - <span> Crear e Insertar Elementos I</span>";

const fragment = document.createDocumentFragment();

for (const day of days) {
  const itemList = document.createElement("LI");
  itemList.textContent = day;
  fragment.appendChild(itemList);
}

daysList.appendChild(fragment);

for (const day of days) {
  const item = document.createElement("option");
  item.textContent = day;
  item.setAttribute('value', day)
//   item.value = day;
  fragment.appendChild(item);
}
daysSelect.appendChild(fragment);
