/*

Arrays - Metodos II


*/

/*

    .from(iterable) - Convertir en array el elemento iterable

*/

// const links = document.querySelectorAll('a');
// console.log(links);

// let word = 'Hola Harinson';

// console.log(Array.from(word));
// console.log(word.split(' '));

/*

    .sort([callback])  -> Ordena los elementos de un array alfabeticamente
    (valor unicode), si le pasamos un callback los ordena en funcion del
    algoritmo que le pasemos

*/

// const letras = ['b','c','z','a'];
// const numeros = [1, 2000, 80,23];

// console.log(letras.sort());
// console.log(numeros.sort());


// console.log(numeros.sort((a,b)=>a-b));
// console.log(numeros.sort((a,b)=>b-a));

/*

    .forEach([callback(currentValue, [index])]) -> Ejecuta la funcion indicada
    una vez por cada elemento del array

*/

// const numeros =[12,54,87,1,46];

// numeros.forEach((numero)=> console.log(numero));
// numeros.forEach((numero, index)=> console.log(`${numero} esta en la posicion ${index}`));

/*

    .some(callback) -> Comprueba si al menos un elemento del array cumple la condicion
    .every(callback) -> Comprueba si todos los elementos del array cumple la condicion

*/

// const words = ['HTML','CSS','JavaScript','PHP']

// //console.log(words.some(word => word.length>10));
// console.log(words.every(word => word.length>3));

/*

    .map(callback) -> Transforma todos los elementos del array y devuelve un
    nuevo array

*/

// const numeros =[12,54,87,1,46];
// numeros.map(numero=> console.log(`${numero} x 2 = ${numero*2}`));
// const numeros_2 = numeros.map(numero => numero*2);
// console.log(numeros_2);

/*

    .filter(callback) -> Filtra todos los elementos del array que cumpla la condicion
     y devuelve un nuevo array

*/

// const numeros =[12,54,87,1,46];

// const numeros_2 = numeros.filter(numero => numero > 10);

// console.log(numeros_2);

/*

    .reduce(callback) -> reduce todos los elementos del array
    a un unico valor

*/

// const numeros =[12,53,87,1,46];

// console.log(numeros.reduce((a,b)=> a+b));

const users = [
    {
        name: 'User 1',
        online: true
    },
    {
        name: 'User 2',
        online: true
    },
    {
        name: 'User 3',
        online: false
    },
    {
        name: 'User 4',
        online: true
    },
    {
        name: 'User 5',
        online: false
    },
    {
        name: 'User 6',
        online: true
    }

]

const usersOnline = users.reduce((cont, user)=>{
    if(user.online) cont++;
    return cont;
},0)
console.log(`Hay ${usersOnline} usuarios conectados`);