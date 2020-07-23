const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let numberOne = prompt('Introducir primer numero'), // Input para ingresar valores
    numberTwo = prompt('Introducir segundo numero'),
    numberThree = prompt('Introducir tercer numero');

numbers.textContent = `Los numeros introducidos son ${numberOne}, ${numberTwo}, ${numberThree}`;

/* Ejercicio */

if(numberOne>numberTwo && numberOne>numberThree){
    if(numberTwo>numberThree){
        result.textContent = `${numberOne}, ${numberTwo}, ${numberThree}`;
    }
    else{
        result.textContent = `${numberOne}, ${numberThree}, ${numberTwo}`;
    }
}

if(numberTwo>numberOne && numberTwo>numberThree){
    if(numberOne>numberThree){
        result.textContent = `${numberTwo}, ${numberOne}, ${numberThree}`;
    }
    else{
        result.textContent = `${numberTwo}, ${numberThree}, ${numberOne}`;
    }
}

if(numberThree>numberTwo && numberThree>numberOne){
    if(numberTwo>numberOne){
        result.textContent = `${numberThree}, ${numberTwo}, ${numberOne}`;
    }
    else{
        result.textContent = `${numberThree}, ${numberOne}, ${numberTwo}`;
    }
}
