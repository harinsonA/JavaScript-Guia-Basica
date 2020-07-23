const button = document.getElementById("button");

// button.addEventListener("click", () => {
//   const newPost = {
//     title: "A new post",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     userId: 2,
//   };

//   fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     body: JSON.stringify(newPost),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
// });

button.addEventListener("click", () => {
  axios({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/users",
    data: {
      title: "A new post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userId: 2,
    },
  }).then(res => console.log(res)).catch(err => console.log(err))
});
