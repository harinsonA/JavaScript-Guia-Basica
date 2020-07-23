const form = document.getElementById("form");
const characters = document.getElementById("characters");
const table = document.getElementById("table");
const form_direcciones = document.getElementById("form2");
const optio_direcciones = document.getElementById("options");
const table_personas = document.getElementById("table_personas");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(characters.children[characters.selectedIndex].value);
});

const getData = (id) => {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (id == undefined) {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) => {
      const dataJSON = JSON.parse(data.target.response);

      const fragment = document.createDocumentFragment();

      dataJSON.forEach((element) => {
        const option = document.createElement("option");
        option.setAttribute("value", element.id);
        option.textContent = element.name;

        fragment.appendChild(option);
      });

      characters.appendChild(fragment);
    });
  } else {
    xhr.open("GET", `https://jsonplaceholder.typicode.com/users?id=${id}`);

    xhr.addEventListener("load", (data) => {
      const dataJSON = JSON.parse(data.target.response);

      const fragment = document.createDocumentFragment();

      dataJSON.forEach((element) => {
        const row = document.createElement("tr");
        const dataName = document.createElement("td");
        const dataAddress = document.createElement("td");

        const address = `${element.address.city}, ${element.address.street}, ${element.address.suite} (zipcode: ${element.address.zipcode} )`;

        dataName.textContent = element.name;
        dataAddress.textContent = address;

        row.appendChild(dataName);
        row.appendChild(dataAddress);

        fragment.appendChild(row);
      });

      table.appendChild(fragment);
    });
  }

  xhr.send();
};
getData();

const getDirecciones = (value) => {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (value === undefined) {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) => {

      const dataJSON = JSON.parse(data.target.response);
      const fragment = document.createDocumentFragment();
      let condicion;

      dataJSON.forEach((element) => {

        let suite = element.address.suite;
        suite = suite.split(" ");
        
        console.log(suite.some(word => word == "Suite" || word == "Apt."))
      });
    });
  } else {
  }

  xhr.send();
};

getDirecciones();
