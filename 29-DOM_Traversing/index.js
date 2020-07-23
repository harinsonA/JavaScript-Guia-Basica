// Recorrer el DOM (DOM traversing)
/*
Padre - parent (Nodo del que desciende)
    -parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    -parentElement - Devuelve el nodo elemento padre


    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener 
    un elemento padre, parentNode devolvera siempre null

Hijos - child (Nodo que desciende de un padre)
    -childNodes - Devuelve todos los nodos hijos
    -children - Devuelve todos los nodos elementos hijos
    -firstChild - Devuelve el primer nodo hijo
    -firstElementChild - Devuelve el primer nodo elemento hijo
    -lastChild - Devuelve el ultimo nodo hijo
    -lastElementChild - Devuelve el ultimo nodo elemento hijo
    -hasChildNodes() - Devuelve true si el nodo tiene hijos y false
    si no tiene

Hermanos - siblings (Nodo al mismo nivel)
    -nextSibling - Devuelve el siguiente nodo hermano
    -nextElementSibling
    -previousSibling
    -previousElementSibling

Cercano
    -Closest(selector) - Selecciona el nodo mas cercano que cumpla 
    con el selector, aun es experimental.

*/

const parent = document.getElementById('parent')

//console.log(parent.parentNode) Devuelve el elemento Padre
//console.log(parent.parentElement) Igualmente devuelve el elemento padre
//console.log(parent.parentElement.parentElement)
//console.log(parent.childNodes) devuelve todos los nodos hijos
//console.log(parent.children) devuelve unicamente los nodos que son elementos hijos
//console.log(parent.firstChild) devuelve el primer nodo que encuenta
//console.log(parent.firstElementChild) devuelve el nodo elemento hijo
//console.log(parent.lastChild) devuele el ultmo nodo hijo
//console.log(parent.lastElementChild) devuelve el ultimo nodo elemento hijo
//console.log(parent.hasChildNodes()) devuelve true si el elemento tiene hijos y si no devuelve false
//console.log(parent.nextSibling) devuelve el nodo hermano
//console.log(parent.nextElementSibling) devuelve el elemento hermano si tiene
//console.log(parent.parentElement.nextElementSibling) 
//console.log(parent.parentElement.previousSibling) devuelve el nodo hermano anterior 
//console.log(parent.parentElement.previousElementSibling) devuelve el elemento hermano anterior