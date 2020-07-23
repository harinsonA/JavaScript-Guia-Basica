/* String */

let cadena = 'Hola Harinson';

/* Propiedades */

//1. Propiedad Length -> Devuelve la longitud de la cadena

console.log(cadena.length);

// 2. toUppercase() -> Devuelve la cadena en Mayusculas

console.log(cadena.toUpperCase());

// 3. toLowercase() -> Devuelve la cadena en Minisculas

console.log(cadena.toLocaleLowerCase());

// 4. indexof(string) -> Devuelve la posicion en la que encuentra el string,
//                      Si no la encuenta devuelve -1

console.log(cadena.indexOf('Harinson'));
console.log(cadena.indexOf('H'));

// 5. replace(valor a buscar, valor nuevo) -> reemplaza el fragmento que le digamos
//               en la cadena y pone el valor nuevo

console.log(cadena.replace('Hola','Bienvenido'));

// 6. substring(inicio [, fin]) -> extrae  los caracteres des el inicio hasta
//              el fin (El final no se incluye)

console.log(cadena.substring(3,7));
console.log(cadena.substring(7));

// 7. slice(inicio[, fin]) -> Igual que el substring pero admite
//          valores negatos, si no se incluye el final extraera 
//          hasta el final
// (2,-4) -> Empieza a contar en el tercer caracter y los 4 ultimos
//          no los considera

console.log(cadena.slice(-2));
console.log(cadena.slice(1,-2));

// 8. trim() -> Elimina los espacios al inicio y final de una cadena

let cadena2 = '        Hola harinson! Como estas?   ';

console.log(cadena2.trim());

// 9. startsWith(valor [,inicio]) -> sirve para saber si la cadena empieza
//                      con ese valor. Devuelve true o false

console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));

console.log(cadena.startsWith('H', 5));

// 9. endsWith(valor[, inicio]) -> sirve para saber si la cadena termina 
//                      con ese valor. Devuelve true o false

console.log(cadena.endsWith('n'));
console.log(cadena.endsWith('a', 4));
console.log(cadena.endsWith('r',8 ));
console.log(cadena.endsWith('Harinson'));

//10. includes(valor[, inicio]) -> igual que indexof pero devuelve
//                          true o false

console.log(cadena.includes('n'));
console.log(cadena.includes('a', 5));
console.log(cadena.includes('a', 2));

// 11. repeat(valor) -> Repite el string el numero de veces que le indiquemos

let cadena3 = 'hola';

console.log(cadena3.repeat(3));
console.log('r'.repeat(3));

// templates string

let nombre = 'harinson';
let apellido = 'arellan';
let edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad + 1} años.`);