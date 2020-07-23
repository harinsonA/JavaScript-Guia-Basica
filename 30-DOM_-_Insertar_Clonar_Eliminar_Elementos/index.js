/*
Insertar y eliminar elemento II

    parent.insertBefore(newElement, referenceElement) -> insertar un
    elemento antes del elemento de referencia
    -> list.insertBefore(newElement, list.children[1])

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)
    
    parent.insertAdjacentHTML(position, HTML)
    list.children[0].insertAdjacentHTML('afterend', '<li> Elemento con html </li>')
    
    parent.insertAdjacentText(position, Text)
    list.children[0].insertAdjacentText('afterend', '<li> Elemento con html </li>')

    
    positions:
    beforebegin -> Antes de que empiece (hermano anterior)
    //list.insertAdjacentElement('beforebegin', newElement)
    //list.children[0].insertAdjacentElement('beforebegin', newElement)
    
    afterbegin -> despues de que empiece (primer hijo)
    //list.insertAdjacentElement('afterbegin', newElement)
    
    beforeend -> antes de que acabe (ultimo hijo)
    //list.insertAdjacentElement('beforeend', newElement)
    
    afterend -> despues de que acabe (hermano siguiente)
    //list.insertAdjacentElement('afterend', newElement)
    //list.children[0].insertAdjacentElement('afterend', newElement)

    parent.replaceChild(newChild, oldChild) -> Reemplaza un hijo por
    otro
    //list.replaceChild(newElement, list.children[1])
    
    */

// const list = document.getElementById("list");
// const newElement = document.createElement("li");
// newElement.textContent = "I'm a new element";

//list.replaceChild(newElement, list.children[1])

/*

    DOM manipulatio convenience Methods - JQuery Like
    https://caniuse.com/#search=JQuery-like

    positions:
        parent.before() -> Antes de que empiece (hermano anterior)
        //list.before(newElement)
        //list.children[0].before(newElement)
        
        parent.prepend() -> despues de que empiece (primer hijo)
        //list.prepend(newElement)

        parent.append() -> antes de que acabe (ultimo hijo)
        //list.append(newElement)
        
        parent.after() -> despues de que acabe (hermano siguiente)
        //list.after(newElement)
        //list.children[0].after(newElement)
        
        child.replaceWith(newChild)
        //list.replaceWith(newElement, list.children[0])
        //list.children[0].replaceWith(newElement)
        //document.getElementById('replace').replaceWith(newElement)
        
        */

//    const list = document.getElementById("list");
//    const newElement = document.createElement("li");
//    newElement.textContent = "I'm a new element";

/*

    Clonar y eliminar elementos
        element.cloneNode(true|false) -> Clona el nodo, si le pasamos
        true clona todo el elemento con los hijos, si le pasamos 
        false clona solo el elemento sin hijos
        //list.after(list.cloneNode(true))

        
        element.remove() -> Elimina el nodo del DOm
        //list.remove()


        element.removeChild(child) -> Elimina el nojo hijo del DOM
        //list.removeChild(list.children[1])



*/

const list = document.getElementById("list");
const newElement = document.createElement("li");
newElement.textContent = "I'm a new element";

list.removeChild(list.children[1])