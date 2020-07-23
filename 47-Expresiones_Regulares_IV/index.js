/*

Caracteres:
        \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro.
         /^[a-zA-Z]+\s[a-zA-Z]+$/gm
        \S: Coincide con todo menos caracteres de espacio
         /^\S{5}$/gm
        \d: Coincide con un carácter de número. Equivalente a 
        [0-9] /^\d{5}$/gm
        \D: Coincide con cualquier carácter no numérico. Equivalente a
         [^0-9] /^\D{5}$/gm
        \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a 
        [A-Za-z0-9_] /^\w+@$/gm
        \W: Coincide con todo menos caracteres de palabra. 
        /^\W+$/gm


*/