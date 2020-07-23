/*
    Expresiones Regulares
    
        -Sustitucion: Define un comodin dentro del 
        patron. El simbolo es el "."
                       /ipsum               
        const regEx = /i..um/g // el numero de puntos representa un caracter desconocido
        
                        foto001.jpg
        const regEx = /foto...\.jpg


        -Listado de caracteres validos: Entre corchetes
        se pone una lista de los caracteres validos.
        [aeiou] Con esto cogeriamos todas las vocales
        
        const regEx = /[aeu]/g // toma cada caracter por individual en este caso "a","e","u"
        const regEx = /[123]/g
        
        
        -Rangos: Entre corchetes si ponemos un guion 
        entre dos caracteres establecemos un rango. [a-z]
        Todas las letras minusculas
        
        const regEx =/[a-l]/g //toma el rango de letras que se establece, en este caso desde a hasta la l
        
        
        -Mezcla entre rangos y lista: 
            Podemos unir los dos anteriores en una sola
             expresion. [0-5ou] Serian numeros del 0 al 5,
             la letra "o" y la letra "u"
             
        const regEx =/[0-5ou]/g //Combinacion de rangos y listado
        
        
        -cadenas completas:
        Para establecer una cadena completa debe ir 
        entre parentesis, si queremos las palabras
        iran separadas por un pipe. (Lorem|amet) es
        valida la palabra "Lorem" y la palabra "amet"
        
        const regEx =/(12)/g
        const regEx =/("Lorem"|"amet"|1)/g

*/

const text = document.getElementById('text').textContent

//Expresiones clase anterior #44
// const regEx = /lorem/gi
// const regEx2 = new RegExp('lorem', 'gi')
// const regEx3 = new RegExp('/lorem/', 'gi')


//console.log(regEx2.test(text))

