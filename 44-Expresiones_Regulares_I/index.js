/*

    Expresiones Regulares:
        Son una secuencia de caracteres que forman un patron de busqueda,
        principalmente utilizada para la busqueda de patrones de cadenas
        de caracteres u operaciones de sustituciones.

        Sintaxis:
        /patron/
        Banderas:
            i: ignore case. No diferencia entre mayusculas y minusculas
            g: global. busca de forma global, es decir, no se para despues de
            la primera coincidencia.

*/

const text = document.getElementById('text').textContent

const regEx = /lorem/g

console.log(regEx.test(text))
console.log(text.includes('Lorem'))