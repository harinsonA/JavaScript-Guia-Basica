/*
Atributos
    element.getAttribute('attribute') -> Nos devuelve el atributo
    console.log(name.getAttribute('type'));

    element.setAttribute('attribute', value) -> modifica el valor del atributo
    name.setAttribute('type', 'number');

Clases
    element.classList.Add('class','class',...) -> Agregar una clase
    title.classList.add('main-title','other-title');
    console.log(title);
    
    element.classList.remove('class','class',...) -> quitar una clase
    title.classList.remove('main-title');
    console.log(title);

    element.classList.toggle('class'[, force]) -> Agrega la clase si no la tiene, y si la tiene se la quita
    
    element.classList.contains('class') -> Devuelve true o false si tiene la clase o no
    if (title.classList.contains('title'))console.log('Title tiene la clase title')
    else console.log('No tiene la clase title')

    element.classList.replace('oldClass','newClass') -> sustituye una clase por otra
    title.classList.replace('title','main-title')

Atributos directos
    id
    console.log(title)
    console.log(title.id);
    console.log(title.innerHTML);
    console.log(title.textContent);
    
    value
    console.log(name.value)
    console.log(name.value.length)
*/

const title = document.getElementById('title');
const name = document.getElementById('name');
