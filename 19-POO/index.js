class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${ edad} años`
    }
    
    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

const harinson = new Persona('Harinson', 'Arellan', 28)
const marta = new Persona('Marta', 'Garcias', 25)

console.log(harinson);
console.log(harinson.saludar())
console.log(marta.saludar())