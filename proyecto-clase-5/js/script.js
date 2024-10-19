// ======= Repaso ==============
/*
const arrayProductos = [
    { nombre: "Remera", precio: 10000 },
    { nombre: "Remera", precio: 20000 },
    { nombre: "Pantalon", precio: 15000 },
    { nombre: "Pantalon", precio: 17500 },
    { nombre: "Pantalon", precio: 20500 },
    { nombre: "Calzado", precio: 80000 },
    { nombre: "Calzado", precio: 90000 },
    { nombre: "Calzado", precio: 100000 },
    { nombre: "Buzo", precio: 50000 },
    { nombre: "Buzo", precio: 60000 },
    { nombre: "Buzo", precio: 45000 },
]

// === ForEach() ===
// elm --> { nombre: "Remera", precio: 10000 },
// elm -->  { nombre: "Remera", precio: 20000 },
arrayProductos.forEach((elm) => {
    console.log(elm.nombre);
})

// === Find() ===
const resultado = arrayProductos.find((elm) => elm.nombre === "Pantalon")
console.log(resultado);

// === Filter() ===
const filtrados = arrayProductos.filter((elm) => elm.nombre === "Buzo")
console.log(filtrados);

const filtrados2 = arrayProductos.filter((elm) => elm.precio > 30000)
console.log(filtrados2);

// === map() ===
const precios = arrayProductos.map((elm) => {
    return elm.precio
})
console.log(precios);

// === reduce() ===
const totalPrecios = arrayProductos.reduce((acumulador, elm) => acumulador + elm.precio, 0)
console.log(totalPrecios);

// === some() ===
console.log(arrayProductos.some((elm) => elm.nombre === "Remera")) // True
console.log(arrayProductos.some((elm) => elm.nombre === "Camisa")); // False


// ===  indexOf() ===

const frutas = ["banana", "manzana", "pera"]
const indice = frutas.indexOf("manzana")
console.log(indice);

// === findIndex() ===
const numeros = [5, 12, 8, 130, 140]

const indiceDos = numeros.findIndex((num) => num > 120)
console.log(indiceDos);

*/
// =========  DOM =========
/*
console.log(window);
console.log(document);
console.log(document.body);
console.log(document.head);
console.dir(document.head)
*/

// ======= Seleccionar Elemetos ======
/*
// Acceder por ID
const titulo = document.getElementById("titulo")

console.log(titulo);
console.dir(titulo);

// Acceder por Clases
const itemsLista = document.getElementsByClassName("list-item")
console.log(itemsLista);

// Acceder por etiquetas
const parrafos = document.getElementsByTagName("p")
console.log(parrafos);

// Selectores simil CSS
const tituloCSS = document.querySelector("#titulo")
console.log(tituloCSS);

const itemListaCSS = document.querySelectorAll(".list-item")
console.log(itemListaCSS);
*/

// ===== Navegación entre elementos =====
/*
const padre = document.getElementById("padre")
console.log(padre);

const hijos = padre.children
console.log(hijos);

const primerHijo = padre.firstElementChild
console.log(primerHijo);

const ultimoHijo = padre.lastElementChild
console.log(ultimoHijo);

const abuelo = padre.parentElement
console.log(abuelo);

const parrafo = document.getElementById("parrafo-dos")

const primerHermano = parrafo.previousElementSibling
console.log(primerHermano);

const segundoHermano = parrafo.nextElementSibling
console.log(segundoHermano);
*/

// ======= Atributos =======
/*
const input = document.getElementById("input-id")
// console.log(input);
// console.dir(input)

input.value = "Apellido"
// console.log(input.value);

const titulo = document.getElementById("titulo")
console.log(titulo);
console.log(titulo.textContent); // Texto plano, sin formato ni estilos
console.log(titulo.innerText); // Texto con formato
*/

// ======== Textos, innerHTMl y Estilos ==========
/*
const parrafo = document.getElementById("parrafo")
console.log(parrafo);

parrafo.textContent = "Información principal"
// parrafo.textContent = "<span>Información</span> principal"

parrafo.innerHTML = "<span>Información</span> principal"

const titulo = document.getElementById("titulo")

// titulo.style.color = "green"

console.log(titulo);

// Pisa todo el listado de clases para ese elemento
// titulo.className = "color-verde bg-red"

titulo.classList.add("bg-red") // Agrega solo una clase sin modificar lo hecho previamente
titulo.classList.remove("titulo") // Remueve una clase
titulo.classList.toggle("titulo") // Alterna una clase, la agrega si no está, la elimina si ya está
console.log(titulo.classList.contains("titulo")) // Devuelve un valor booleano dependiendo de si existe una clase

*/

// ===== Creación de nodos desde el HTML =====

const seccion = document.getElementById("seccion")
const p = document.createElement("p")


p.classList.add("color-verde")
p.textContent = "Texto de ejemplo"

console.log(p);

seccion.append(p) // Como último hijo
seccion.prepend(p) // Como primer hijo

seccion.after(p) // Insertar después de seccion (Hermano)
seccion.before(p) // Insertar antes de seccion (Hermano)