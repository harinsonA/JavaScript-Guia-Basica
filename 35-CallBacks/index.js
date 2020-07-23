//Un callback es una funcion que se ejecuta a traves de una funcion
//Los callback no son asincronos

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

const getUser = (id, callback) => {
  const user = users.find((user) => user.id == id);

  if (!user) callback(`EL usarios con el id:${id} no existe`);
  else callback(null, user);
};
const getEmail = (user, callback) => {
  const email = emails.find((email) => email.id == user.id);
  if (!email) callback(`El Usuario: ${user.nombre} no tiene correo`);
  else callback(null, {
      id: user.id,
      nombre: user.nombre,
      email: email.email
  });
};

getUser(3, (err, user) => {
  if (err) console.log(err);
  getEmail(user, (err,resp)=>{
    if (err) console.log(err);
    console.log(resp)
  })
});
