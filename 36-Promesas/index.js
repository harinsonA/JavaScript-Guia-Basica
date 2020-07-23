//Un callback es una funcion que se ejecuta a traves de una funcion
//Los callback no son asincronos
//Una promesa es un objeto con dos callbacks internos

// const getUser = (id, callback) =>{
//     const user = {
//         name: 'Harinson',
//         id:id
//     }
//     if(id != 1) callback("No existe")
//     else callback(null, user)
// }

// getUser(3, (err, user) => {
//     if(err)return console.log(err)
//     console.log(`User name is ${user.name}`)
//})

const users = [
  {
    id: 1,
    nombre: "Harinson",
  },
  {
    id: 2,
    nombre: "Lucia",
  },
  {
    id: 3,
    nombre: "Luciano",
  },
];

const emails = [
  {
    id: 1,
    email: "harinson@email.com",
  },
  {
    id: 2,
    email: "lucia@email.com",
  },
];

const getUser = (id) => {
  const user = users.find((user) => user.id == id);
  return (promesa = new Promise((resolve, reject) => {
    if (!user) reject(`EL usarios con el id:${id} no existe`);
    else resolve(user);
  }));
};

const getEmail = (user) => {
  const email = emails.find((email) => email.id == user.id);
  return (promesa = new Promise((resolve, reject) => {
    if (!email) reject(`El Usuario: ${user.nombre} no tiene correo`);
    else
      resolve({
        id: user.id,
        nombre: user.nombre,
        email: email.email,
      });
  }));
};

// getUser(5)
//   .then((user) => getEmail(user))
//   .then(resp => console.log(resp))
//   .catch((err) => console.log(err));

getUser(2).then(getEmail).then(console.log).catch(console.log);
