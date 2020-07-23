/* 
Operador ternario
(condicion)? true : false

(condicion)?
    (
        //Primera Sentencia,
        //Segunda Sentencia
    )
    :
    (
        //Primera Sentencia,
        //Segunda Sentencia
    )
*/

let num = parseInt(prompt('Ingrese un valor'));

// if(num % 2 ==0)console.log(`${num} es par`);
// else console.log(`${num} es impar`);

(num%2 == 0) ? console.log(`${num} es par`) :  console.log(`${num} es impar`);

(num%2 == 0) ? (
                console.log(`${num} es par`), console.log(`${num} es par2`) 
                
                ) 
            :  
            (
                console.log(`${num} es impar`), console.log(`${num} es impar2`)
                );