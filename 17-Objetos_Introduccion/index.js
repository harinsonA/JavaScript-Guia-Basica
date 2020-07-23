const persona = {
    nombre: 'Harinson',
    edad: 28,
    hijos:['Luciano','Lucia','Maria','Tom']
}

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona['nombre']);

// for (const key in persona) {
//     console.log(key);
// }

// for (const key in persona) {
//     console.log(persona[key]);
// }

// for (const hijo of persona.hijos) {
//     console.log(hijo);
// }


console.log(`Hola ${persona.nombre}. Tienes ${persona.edad} años y tus hijos se llaman ${persona.hijos.join(', ')}`)