/* Bucles 

    Determinados 

    bucle for of/ for in

    for( let variable of estructura){
        codigo ejecutar
    }

    Palabras reservadas de bucles

        break - Rompe el bucle
        continue - se salta la(s) posicion(es) que le indiquemos y despues continua su ejecucion

*/

let nombres = ["Jose", "Carla", "Alejandra", "Josefa", "Maria"];

// for (let index = 0; index < nombres.length; index++) {
//    if (nombres[index]==='Josefa') {
//        continue;
//    }
//    console.log(nombres[index]);

// }

// for (let nombre of nombres) {
//   //     //console.log(nombre);
//   //     //console.log(nombres.indexOf(nombre));
//   if (nombre === "Josefa") {
//     break;
//   }
//   console.log(nombre);
// }

 for (let index in nombres) {
//    //console.log(index);
//    //console.log(nombres[index]);
if (nombres[index] === "Josefa") {
    continue;
  }
  console.log(index);
}
