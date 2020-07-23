// let numeros = [1, 2, 3, 4, 5,];

let numeros;
let objeto = {
    id:2, name:'Nuevo dos'
}

const array =[
    {id:1,name: 'Uno'},
    {id:2,name: 'dos'},
    {id:3,name: 'tres'},
    {id:4,name: 'cuatro'}
]
console.log(array,"1er")


const index = array.findIndex(elemnt=> elemnt.id == objeto.id);

if(index!== -1){
    array[index] = objeto
    console.log(array,"dos")
}


/*
    Arrays - Propiedad
        .legth -> Devuelve el numero de posiciones que contiene el array

*/
    //console.log(numeros.length);

/*
    Arrays Metodos
        Array.isArray(variable a evaluar) -> Devuelve si la variable es un array.

*/

    //console.log(Array.isArray(numeros))

/*
    Eliminar un elemento de un array

    .shift() -> Elimina el primer elemento del array y devuelve ese elemento
    .pop() -> Eminina el ultimo elemento de un array y devuelve ese elemento

*/

// console.log(numeros);
// let borrado = numeros.shift();
// console.log(borrado);
// console.log(numeros)
//  let borrado = numeros.pop();
//  console.log(borrado);
// console.log(numeros);

/*
    Añadir Elementos
    
    .push(elemento1, elemento2, elementoN ) -> añade uno o mas elementos al final del array y devuelve la nueva longitud
    .unshift(elemento1, elemento2, elementoN) -> añade uno o mas elementos al comienzo del array y devuelve la nueva longitud

*/

// let newNumeros = numeros.push(6);
// console.log(numeros);
// console.log(newNumeros);

// let newNumeros = numeros.unshift(6);
// console.log(numeros);
// console.log(newNumeros);


/* Como buscar elementos dentro de un array

    .indexOf(valor) -> Devuelve el primer indice del elemento que coincida
            con el valor especificado, 0, -1 si ninguno es encontrado 
            
    .lastIndexOf(valor) -> Devuelve el unltimo indice del elemtento que coincida
            con el valor especificado, 0, -1 si ninungo es encontrado

*/

// console.log(numeros.indexOf(2));
// console.log(numeros.lastIndexOf(4));

/*
    Como invertir los valores de un arrays

    .reverse() -> Invierte el orden de los elementos del arrays

*/

// console.log(numeros.reverse());

/* 
     Como separar elementos dentro de un array

    .join('separador') -> Devuelve un string con el separador que indiquemos
            por defecto son comas

*/

// console.log(numeros.join("\n"));

/*
    Como añadir o eliminar elementos donde queramos 

    .splice(a, b, items) -> Cambia el contenido de un array eliminando elementos
            existentes  y/o agregando nuevos elementos.

            a - Inidice inicio
            b - Numero de elementos (Opcional)
            Items - Elementos a añadir en el caso de que se añadan (opcional)

*/

// numeros.splice(3); -> elimina desde la posicion tres hasta el final
// numeros.splice(2,2); -> Elimina desde la posicion 2 el numero de los valores que le indiquemos
// numeros.splice(2,2,10, 23,54); -> si b es un valor distinto de 0 elimina el numero de valores
//     que indiquemos en b y añade los valores de Items a partir de la posicion a
// numeros.splice(2,0,10, 23,54) -> Si b vale cero añade los elementos a partir de la posicion  a y no elimina ninguno
//console.log(numeros);

/*
    Como extraer elementos desde la posicion que queramos

    .slice(a,b) -> extrae elementos de un array desde el indice (a) hasta el 
        indice (b) si no existe (b) lo hace desde (a) hasta el final, si no existe
        ni (a) ni (b) hace una copia del original

*/
// let numero = numeros.slice(); -> genera una copia del mismo array
// console.log(numero);

// let numero = numeros.slice(2); -> Extrae todos los elementos desde la posicion 2 del array
// console.log(numero);

// let numero = numeros.slice(1,3); -> extrae los elementos desde la posicion (a) hasta la posicion
//           (b) sin incluir la ultima posicion 
// console.log(numero);