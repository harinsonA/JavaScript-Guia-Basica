/*

    Fetch Api
        para hacer peticiones POST, fetch admite un segundo parametro

        fetch(url,{
            method: 'POST',
            body: Los datos que enviamos. si es un objeto hay que 
            convertirlo en JSON.stringify(datos),
            headers:{
                cabeceras de informacion sobre lo que estamos enviando
                https://developer.mozilla.org/es/docs/Web/HTTP/Headers
            }
        })

        // console.log(newPost)
        // console.log(JSON.stringify(newPost))

*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const newPost = {
    title: "A new post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    userId: 2,
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
});
