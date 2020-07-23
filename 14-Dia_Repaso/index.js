const contenedor = document.getElementById("contenedor");

/*
    1. Solicita un nombre, la edad y muestra por consola el mensaje:
    "Hola ____, tienes ___ años y el año que viene tendrás ____ años"

    Realizar ejercicio con prompt(mensaje) y haz uso de los template string

*/

// let nombre = prompt('Ingrese su nombre'),
//     edad = parseInt(prompt('Ingrese su edad'));

// contenedor.textContent = `Hola ${nombre}, tiene ${edad} años y el año que viene tendrás ${edad + 1} años`;

/*
    2. Escribe un programa que pueda calcular el area de 3 figuras geometricas,
    triangulo, rectangulo y circulo, En primer lugar pregunta de que figura se quiere calcular
    el area, despues solicita los datos  que necesites para calcularlo.

    Triangulo = b*h/2
    rectangulo = b*h
    circulo =PI * r2 (pi * radio al cuadrado)

*/
// let area,
//   base,
//   altura,
//   radio,
//   calcular = prompt("Figura que quiere calcular");

// switch (calcular) {
//   case "triangulo":
//     (base = parseInt(prompt(`Inserte la base del ${calcular}`))),
//       (altura = parseInt(prompt(`Inserte la altura del ${calcular}`)));

//     area = (base * altura) / 2;

//     contenedor.textContent = `El area del ${calcular} es ${area}`;
//     break;

//   case "rectangulo":
//   case "cuadrado":
//     (base = parseInt(prompt(`Inserte la base del ${calcular}`))),
//       (altura = parseInt(prompt(`Inserte la altura del ${calcular}`)));

//     area = base * altura;

//     contenedor.textContent = `El area del ${calcular} es ${area}`;
//     break;

//   case "circulo":
//     (radio = parseInt(prompt(`Inserte el radio del ${calcular}`)))

//     area = (Math.PI * Math.pow(radio,2));

//     contenedor.textContent = `El area del ${calcular} es ${area}`;
//     break;

//   default:
//     alert('La descripcion de la figura no existe');
//     break;
// }

/*
    3. Solicita un numero  e imprime todos los numeros pares e impares desde 
    1 hasta ese numero con el mensaje "es par" o "es impar"

        Si el numero es 5 el resultado sera:

        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/

// let numero =parseInt(prompt("Ingrese un numero"));

// if (numero!=0 && numero>0) {

//     for (let index = 1; numero > 0 ; numero--, index++) {

//         if (index%2 ==0) {
//             let elemento  = document.createElement('p');
//             let texto = document.createTextNode(`${index} - es par`);
//             elemento.appendChild(texto);
//             contenedor.appendChild(elemento);
//         } else {
//             let elemento  = document.createElement('p');
//             let texto = document.createTextNode(`${index} - es impar`);
//             elemento.appendChild(texto);
//             contenedor.appendChild(elemento);
//         }

//     }
// }else{
//     alert('Valor no valido');
// }

/*

    4. Escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero es primo o no

    un numero primo es aquel que solo es divisible por si mismo y la unidad

*/

/*
    5. Escriba un programa que pida un numero entero mayor que cero y calcule su factorial.
    el factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 =120

// */

// let numero = parseInt(prompt('Ingrese un valor'));
// let factorial = numero,
//     multiplicador = numero - 1;

// for (let index = numero ; index >1; index--) {

//     console.log(`Vuelva: ${index} : ${factorial} x ${multiplicador} es: ${factorial = factorial * multiplicador }`);
//     multiplicador--;

// }

/*

    6. Escriba un programa que permita ir introduciendo una serie de indeterminada de
    numeros mientras su suma no supere 50, cuando esto ocurra, se debe mostrar el total
    acumulado y el contador de cuantos numeros se han introducidos

*/

// let numero, contador=0, suma=0;

// do {
//     numero = parseInt(prompt('Introducir un numero'));
//     if (numero<=50 && numero >0 && (suma + numero)<=50) {
//         suma = suma + numero;
//         contador++;
//     }else{
//         alert(`Faltan ${50 - suma} numeros. Selecciona otro numero`);
//     }
// } while (suma<50);

// console.log(`Total = ${suma}\nTotal de numeros introducidos = ${contador}`);

/*

    7. Crea 3 arrays. El primero tendra 5 numeros y el segundo se llamara pares
    y el tercero impares, ambos estaran vacios. Despues multiplica cada uno de los numeros
    del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero 
    en el array de pares y si es impar en el array de impares. Muestra por consola:

    -la multiplicacion que se produjo junto con su resultado con el formato 2 x 3 = 6
    - el array de pares e impares

*/

// let numeros = [1, 2, 3, 4, 5],
//   pares = [],
//   impares = [],
//   resultado;

// for (let numero of numeros) {
//   let multiplicador = Math.round(Math.random() * (10 - 1) + 1);
//   console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
//   resultado = numero * multiplicador;
//   if (resultado % 2 == 0) {
//     pares.push(resultado);
//   } else {
//     impares.push(resultado);
//   }
// }
// console.log(`Array de pares: ${pares.join(" - ")}\n\nArray de impares: ${impares.join(" - ")}`);

/*

    8. Dado un array de letras, solicita un numero de DNI y calcula que letra
    le corresponde.

    El numero no puede ser negativo ni tener mas de 8 digitos. La posicion de la letra
    es el resultado del modulo del numero introducido entre 23.

    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z',
                    'S','Q','V','H',]
*/

// const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z',
//                     'S','Q','V','H','L','C','K','E','T'];

// let numero = prompt('ingresar numero'),
//     posicion,
//     letra;

// if (numero.length <= 8 && parseInt(numero)> 0) {    
//     numero = parseInt(numero);
//     posicion = numero%23;
//     letra = letras[posicion]; 
//     if (letra == undefined) {
//         letra = letras[8]
//         console.log(letra);   
//     }else{
//         console.log(letra);   

//     }
// } else {
//     alert(`${numero} no es un numero valido`);
// }

/*
    9. solicita al usuario una palabra y mostrar por consola el numero de consonantes,
    vocales y longitud de la palabra

*/

// let palabras = prompt('Introduzca una palabra'),
//     letra= [],
//     vocales = 0,
//     consonantes = 0;

//     palabras = palabras.toLowerCase();

// for (let letras in palabras) {

//    letra.push(palabras.substring(letras, ++letras));

// }
// for (let letras of letra) {
//     if (letras == 'a' || letras == 'e' || letras == 'i' || letras == 'o' || letras == 'u') {
//         console.log(`${letras} es una vocal`);
//         vocales++;
//     } else {
//         console.log(`${letras} es una consonante`);
//         consonantes++;
//     }
// }
// console.log(`Longitud de la palabra: ${palabras.length}\nTotal de Vocales: ${vocales}\nTotal de consonantes: ${consonantes}`);

/*
    10. Dado un array que contiene ["azul","amarillo","rojo","verde","rosa"] determinar
    si un color introducido por el usuario a traves de un prompt se encuentra dentro del array
    o no.

*/

let colores = ["azul","amarillo","rojo","verde","rosa"],
    color = prompt('Introduce un color'),
    valido;

    valido = colores.indexOf(color);

if (valido>0) {
    console.log(`El color ${color} si esta dentro del array`);
} else {
    console.log(`El color ${color} no se encuentra en el array`);
}

