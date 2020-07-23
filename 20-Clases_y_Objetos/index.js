/*

Crea una clase libro
la clase libro tendra titulo, autor, año y genero
Crea un metodo que devuelva toda la informacion del libro
Pide 3 libros y guardalos en un array
los libros se introduciran al arrancar el programa pidiendo los datos con prompt
validar que los campos no se introduzcan vacios
validar que el año sea un numero y que tenga 4 digitos
validar que el genero sea: Aventura, terror o fantasia
crea una funcion que muestre todos los libros
crea una funcion que muestre los autores ordenados alfabéticamente
crea una funcion que pida un genero y muestre la informacion de los libros 
que pertenezcan a ese genero usando un  el metodo que devueva la informacion 
 

*/

class Libro {
  constructor(titulo, autor, fecha, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.fecha = fecha;
    this.genero = genero;
  }
  obtenerAutor() {
    return this.autor;
  }
  obtenergenero() {
    return this.genero;
  }

  obtenerfecha() {
    return this.fecha;
  }

  informacion() {
    return `Titulo: ${this.titulo}.\nAutor: ${this.autor}.\nFecha: ${this.fecha}.\nGenero: ${this.genero}.`;
  }
}

// let libro = new Libro("Sexto sentido", "Harinson", 2020, "Violencia");

// console.log(libro.informacion());

let titulo,
  autor,
  fecha,
  genero,
  condicion = true,
  libros = [],
  contador = 0;

do {
  do {
    titulo = prompt("Introducir titulo");
    if (titulo.length != 0) {
      condicion = false;
    } else {
      alert("Tiene que introducir un Titulo");
      condicion = true;
    }
  } while (condicion);

  do {
    autor = prompt("Introducir Autor");
    if (autor.length != 0) {
      condicion = false;
    } else {
      alert("Tiene que introducir un Autor");
      condicion = true;
    }
  } while (condicion);

  do {
    fecha = prompt("Introducir el año");
    if (fecha.length == 4 && parseInt(fecha) > 0) {
      condicion = false;
    } else {
      alert("Tiene que introducir una Fecha");
      condicion = true;
    }
  } while (condicion);

  do {
    genero = prompt("Introducir el genero");
    genero = genero.toLowerCase();
    if (genero == "aventura" || genero == "terror" || genero == "fantasia") {
      condicion = false;
    } else {
      alert(
        "Tiene que introducir un genero.\n\nOpciones: Aventura, Terror y Fantasia."
      );
      condicion = true;
    }
  } while (condicion);

  let libro = new Libro(titulo, autor, fecha, genero);
  libros.push(libro);

} while (libros.length < 1);

const mostrarAutores = ()=>{

libros.forEach((libro)=>{
  console.log(
    libro.obtenerAutor()

  )
})

}



// const mostrarLibros = () => {
  
//   console.log(obtenerAutor());
// };

// mostrarLibros();

// const mostrarAutores = () => {
//   let autores = [];
//   for (const libro of libros) {
//     autores.push(libro.obtenerAutor());
//   }
//   console.log(autores.sort());
// };
// mostrarAutores();

// const mostrarGenero = () => {
//   const genero = prompt("Introduce un genero a buscar").toLowerCase();
//   for (const libro of libros) {
//     if (libro.obtenergenero() == genero) {
//       console.log(libro.informacion());
//     }
//   }
// };
// //mostrarGenero();

// const mostrarFecha = () => {
//   const fecha = parseInt(prompt("Introduce una fecha a buscar"));
//   for (const libro of libros) {
//     if (libro.obtenerfecha() == fecha) {
//       console.log(libro.informacion());
//     }
//   }
// };
// mostrarFecha();
