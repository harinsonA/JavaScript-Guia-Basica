/* Bucles

    Determinados

    Su sintaxis se compone de 3 partes
        iniciacion de variable
        numero de vueltas
        incremento o decremento

    for(let i=0 ; i<=10 ; i++){
        codigo a ejecutar
    }

*/
// for(let i=0 ; i < numeros.length ; ++i){
//     if(i!=5){
        
//         console.log(i);
//     }
// }
let numeros = [3,12,2,31,54,75];

for(let i=0 ; i <= numeros.length ; ++i){
    console.log(`nro de vuelta: ${i+1}.\nEl valor en la posicion ${i} del array es igual a ${numeros[i]}`);
}