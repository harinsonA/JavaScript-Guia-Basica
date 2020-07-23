// const getName = async () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve('Harinson')
//         }, 1500);
//     })
// }

// const sayHello = async () =>{
//     const name = await getName()
//     return `Hola ${name}`
// }

// sayHello().then(resp => console.log(resp))

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

const getUser = async (id) => {
  const user = users.find((user) => user.id == id);
  if (!user) throw new Error(`EL usarios con el id:${id} no existe`);
  else return user;
};

const getEmail = async (user) => {
  const email = emails.find((email) => email.id == user.id);
  if (!email) throw new Error(`El Usuario: ${user.nombre} no tiene correo`);
  else
    return {
      id: user.id,
      nombre: user.nombre,
      email: email.email,
    };
};

const getInfo = async (id) => {
  try {
    const user = await getUser(id);
    const res = await getEmail(user);
    return `${user.nombre} email is ${res.email}`;
  }catch(error){
      console.log(error);
  }
};

getInfo(3).then((resp) => console.log(resp));
