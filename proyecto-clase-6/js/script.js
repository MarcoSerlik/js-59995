// ====== Repaso DOM ======

// Acceder a un elemento por ID
// document.getElementById("")

// Acceder a un conjunto de elementos por sus clases
// document.getElementsByClassName()

// Acceder a un conjunto de elementos por el tipo de etiqueta
// document.getElementsByTagName()

// Acceder utiliznado sintaxis de CSS
// document.querySelector() // ---> Me devuelve un elemento
// document.querySelectorAll() // ---> Me devuelve un conjunto de elementos


const titulo = document.getElementById("titulo")

// console.log(titulo);
// console.dir(titulo)


// Texto con formato
// console.log(titulo.innerText);

// Texto plano 
// console.log(titulo.textContent);

// Modificar el HTML interno
// console.log(titulo.innerHTML);

// Modificar listado entero de clases
// titulo.className = "color-verde bg-red"

// Propiedad que tiene métodos asociados

// Agregar clase
titulo.classList.add()

// Remover clase
titulo.classList.remove()

// Alternar una clase
// titulo.classList.toggle()

// Revisar si un elemento contiene una clase
// titulo.classList.contains()


// ============ Eventos ============ //

const boton = document.getElementById("btn")
const clickeado = () => console.log("Boton clickeado")

// boton.addEventListener( evento, funcion  )
// boton.addEventListener("click", clickeado)
boton.addEventListener("click", () => {
    console.log("Botón clickeado");
})

let contador = 0
const spanContador = document.getElementById("contador")
const btnSumar = document.getElementById("sumar")
const btnRestar = document.getElementById("restar")
const btnReset = document.getElementById("resetear")


btnSumar.addEventListener("click", () => {
    contador++
    spanContador.textContent = contador
})

btnRestar.addEventListener("click", () => {
    if (contador > 0) {
        contador--
        spanContador.textContent = contador
    }
})

btnReset.addEventListener("click", () => {
    contador = 0
    spanContador.textContent = contador
})

// console.dir(btnSumar)

// ===== Ejemplo Modal =====

const modalContainer = document.getElementById("modal-container")
const modalAbrir = document.getElementById("modal-abrir")
const modalCerrar = document.getElementById("modal-cerrar")

modalAbrir.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active")
})

modalCerrar.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active")
})

// ====== Parametro evento y Teclas =====

const input = document.getElementById("input-id")
const inputEmail = document.getElementById("input-email")
const form = document.getElementById("form")
const usuarios = []

// input.addEventListener("keydown", (event) => {
//     console.log(event);
// })

// input.addEventListener("change", (event) => {
//     const valor = input.value
//     console.log(valor);
// })

input.addEventListener("input", (event) => {
    const valor = input.value

    if (valor.length < 3) {
        input.classList.add("invalido")
    } else {
        input.classList.remove("invalido")
    }
})

document.addEventListener("click", (event) => {
    // console.log(event);
})

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const nombre = input.value
    const email = inputEmail.value

    if (nombre.length < 3) {
        alert("Nombre Invalido")
        return
    }

    if (email.length < 3) {
        alert("Email invalido")
        return
    }

    // form.submit()

    const usuario = {
        nombre: nombre,
        email: email
    }

    usuarios.push(usuario)
    form.reset()
    console.log(usuarios);
})

document.addEventListener("DOMContentLoaded", () => {

})

window.addEventListener("load", () => {

})

// ====== LocalStorage =====

// Todo lo que guardamos en el LocalStorage se guarda como un string

// localStorage.setItem( clave , valor )

// const usuario = {
//     nombre: "Marco",
//     edad: 24,
//     correo: "ejemplo@correo.com",
//     premium: true
// }

// localStorage.setItem("nombre-usuario", "Marco")
// localStorage.setItem("edad-usuario", 24)
// localStorage.setItem("correo-usuario", usuario.correo)
// localStorage.setItem("premium-usuario", usuario.premium)


// localStorage.setItem("nombre-usuario", "Lucas")

// const nombreUsuario = localStorage.getItem("nombre-usuario")

// // console.log(nombreUsuario);

// const edadUsuario = parseInt(localStorage.getItem("edad-usuario"))

// console.log(edadUsuario);

// console.log(typeof edadUsuario);

// localStorage.getItem devuelve null si el elemento no se encuentra
// console.log(localStorage.getItem("inexistente"));

// let registro = localStorage.getItem("usuario") // null
// console.log(null);

// if (registro !== null) {
//     alert("Bienvenido " + registro + "!")
// } else {
//     registro = prompt("Ingrese su nombre")
//     localStorage.setItem("usuario", registro)

//     alert("Bienvenido " + registro + "!")
// }

// Métodos con Session Storage
// sessionStorage.setItem()
// sessionStorage.getItem()

// ===== Borrar Local Storage =====

// localStorage.removeItem("usuario")
// // localStorage.clear()

// console.log(localStorage);

// console.log(localStorage.key("3"));

// console.log(localStorage.length);


// ===== LocalStorage con Objetos y Arrays =====

const usuario = {
    nombre: "Marco",
    edad: 24,
    correo: "ejemplo@correo.com",
    premium: true
}

const docentes = [
    {
        nombre: "Marco",
        edad: 24,
        rol: "profesor"
    },
    {
        nombre: "Mauro",
        edad: 24,
        rol: "Tutor"
    },
    {
        nombre: "Lucas",
        edad: 24,
        rol: "Tutor Adjunto"
    },
]

// Llevamos Array a String y lo guardamos
// const arrayDocentes = JSON.stringify(docentes)
// localStorage.setItem("docentes", arrayDocentes)

localStorage.setItem("docentes", JSON.stringify(docentes))

// Obtenemos información del Local Storage y lo Parseamos
// const arrayDelLs = localStorage.getItem("docentes")
// console.log(arrayDelLs);
// const arrayParseado = JSON.parse(arrayDelLs)
// console.log(arrayParseado);

const arrayParseado = JSON.parse(localStorage.getItem("docentes"))
console.log(arrayParseado);

