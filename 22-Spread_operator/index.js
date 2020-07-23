/*

    Spread Operator (Operador de expansion)

    su sintaxis es ...

*/

const numeros = [12, 2, 3, 23, 43, 2, 3];

// console.log(numeros);
// console.log(...numeros);
// Enviar elementos de un array a una funcion

// const addNumber = (a,b,c) =>{
//     console.log(a+b+c);
// }
// let numerostoadd = [1,2,3];
// addNumber(numerostoadd); // Error porque esta tomando el array como valor de a en la funcion
//                         // b y c no estan definidos
// addNumber(...numerostoadd);// solucion con spread operation expandes el array
//                          // y defines los tres valores


// Añadir un array a otro array

// let usuario = ['Harinson','Kakashi','Naruto','Sasuke','Madara'];
// console.log(usuario);

// let nuevoUsuario = ['Viviana', 'Angela', 'Mariam'];

// usuario.push(nuevoUsuario[0], nuevoUsuario[1], nuevoUsuario[2]);
// console.log(usuario);

// usuario.push(...nuevoUsuario);
// console.log(usuario)


// Copiar arrays

// let arr1 = [1,2,3,4];
// let arr2 = [...arr1]

// console.log(arr2);


// Concatenar arrays

// let nuevoUsuario = ['Viviana', 'Angela', 'Mariam'];
// let usuario = ['Harinson','Kakashi','Naruto','Sasuke','Madara'];

// //let concatenar = usuario.concat(nuevoUsuario);
// let concatenar = [...usuario, ...nuevoUsuario];

// console.log(concatenar);


// Enviar un numero indefinino de argunmentos a una funcion 
//(parametros REST)

// const restParams = (...numeros) =>{
//     console.log(numeros)

// }

// restParams(1,2,3,4,5,6,7,8);



// Libreria Math

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// Eliminar elementos duplicados

console.log(numeros);
console.log(new Set(numeros));
console.log([...new Set(numeros)]); //cnvertido en array sin duplicados
