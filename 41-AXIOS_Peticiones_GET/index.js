const button = document.getElementById("button");

// res = reponse = respuesta
// button.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resp) => (resp.ok ? Promise.resolve(resp) : Promise.reject(resp)))
//     .then((resp) => resp.json())
//     .then((resp) => {

//       const list = document.getElementById("list");
//       const fragment = document.createDocumentFragment();

//       for (const userInfo of resp) {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
//         fragment.appendChild(listItem);
//       }
//       list.appendChild(fragment);
//     });
// });

button.addEventListener("click", () => {
  axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  })
    .then((res) => {
      const list = document.getElementById("list");
      const fragment = document.createDocumentFragment();

      for (const userInfo of res.data) {
        const listItem = document.createElement("li");
        listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
        fragment.appendChild(listItem);
      }
      list.appendChild(fragment);
    })
    .catch((err) => console.log(err));
});
