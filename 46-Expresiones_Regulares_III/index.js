/*
Documentacion: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    
Página para evaluar expresiones regulares: https://regex101.com/

    Expresiones Regulares

    Delimitadores:
        ^ Antes de este símbolo no puede haber nada
        $ Después de este símbolo no puede haber nada
        Ejemplo:
            /^hola/gm
            /hola$/gm
            /^hola$/gm
    Cantidad:
        - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles. 
            {n} Se tiene que repetir n veces
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir como mínimo n veces y sin máximo
        
        Ejemplo:
            /^[a-zA-Z]{1,3}@{1}$/gm

        -asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.
        
        Ejemplo:
            /.*@.*\..* /gm


        -interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
         
        Ejemplo:
            /^[ae]?$/gm


        - operador +: lo que está antes del + tiene que estár una vez como mínimo
        
        Ejemplo:
            /A-[0-9]+/gm



*/

