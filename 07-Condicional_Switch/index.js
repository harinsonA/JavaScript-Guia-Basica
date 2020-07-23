/*Sintaxis Simple:

switch(evaluacion){
    case n:
        //codigo
        break;
    case n2:
        //codigo
        break;
    default:
        //codigo
} 

Sintaxis Multiple:

switch(evaluacion){
    case n:
    case n2:
    case n3:
    case n4:
        //codigo
        break;
    case n5:
    case n6:
        //codigo
        break;
    default:
        //codigo
} 
*/

let num = parseInt(prompt("introducir numero"));


// switch(num){
//     case 1: console.log('Num tiene el valor 1');
//     break;
//     case 2: console.log('Num tiene el valor 2');
//     break;
//     default:
//         console.log('Num diferente');
// }


switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`El numero ${num} es impar`);
        break;
    case 4:
    case 2:
        console.log(`El numero ${num} es par`);
        break;
    default:
        console.log('Machete');
}