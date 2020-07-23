/* Objeto Math */

// Objeto estatico

// Tenemos que usar su nombre oara utilizarlo

/* Propiedades Math.E y Math.PI */

console.log(Math.E);
console.log(Math.PI);

/* Metodos */

let num = 5.3;

console.log(Math.abs(num)); //Math.abs -> devuelve el valor absoluto de x
console.log(Math.ceil(num)); // Math.ceil -> devuelve el entero mas grande mayor o igual que un numero
console.log(Math.floor(num)); // Math.floor -> devuelve el entero mas pequeño menor o igual que un numero
console.log(Math.pow(2,3)); // Math.pow(x,y) -> devuelve la potencia de x(base) elevada a la y(exponente)
console.log(Math.random()); // Math.random() -> genera un numero pseudoaleatorio entre 0 y 1;
console.log(Math.round(Math.random()*100)); // Combinacion con Math.round()
console.log(Math.random()*(10 - 1)+ 1); //console.log(Math.random()*(maximo - minimo)+ minimo)
console.log(Math.sign(-5)); // -1 | 0 | 1 /Math.sign(x) -> devuelve el signo de la x, que indica si x es positivo, negativo o cero
console.log(Math.sqrt(2)); // Devuelve la raiz cuadrada de x
