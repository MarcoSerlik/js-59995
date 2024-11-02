// ====== Repaso Eventos y LocalStorage ======

localStorage.setItem("usuario", "richard") // Guardar información

// Recuperar información / devuelve null si el valor no existe
// let usuario = localStorage.getItem("usuario")

// console.log(usuario);

// localStorage.removeItem("usuario") // Borra un item
// localStorage.clear() // Borra todo el localStorage

const array = [
    {
        nombre: "Marco",
        edad: 24,
        rol: "profesor"
    },
    {
        nombre: "Lucas",
        edad: 30,
        rol: "tutor"
    }
]

// JSON.stringify() --> Lleva la información a un string
// JSON.parse() --> Convertir el string a su formato original


localStorage.setItem("array", JSON.stringify(array))

const nuevoArray = JSON.parse(localStorage.getItem("array"))
// console.log(nuevoArray);



// ============ Eventos ============ //

// const boton = document.getElementById("btn")
// const clickeado = () => console.log("Boton clickeado")

// // boton.addEventListener( evento, funcion  )

// // boton.addEventListener("click", clickeado)

// boton.addEventListener("click", (e) => {
//     console.log(e);
//     console.log("Botón clickeado");
// })

// let contador = 0
// const spanContador = document.getElementById("contador")
// const btnSumar = document.getElementById("sumar")
// const btnRestar = document.getElementById("restar")
// const btnReset = document.getElementById("resetear")


// btnSumar.addEventListener("click", () => {
//     contador++
//     spanContador.textContent = contador
// })

// btnRestar.addEventListener("click", () => {
//     if (contador > 0) {
//         contador--
//         spanContador.textContent = contador
//     }
// })

// btnReset.addEventListener("click", () => {
//     contador = 0
//     spanContador.textContent = contador
// })


// ===== Operadores Avanzados =======

// let contador = 0

// console.log(++contador);
// console.log(--contador);

// === Operadores ternarios ===

// condicion ? verdarero : falso

// let nombre = prompt("Ingrese su nombre:").toLowerCase()

/*
if (nombre == "marco") {
    alert("Bievenido")
} else {
    alert("Usted no es bienvenido")
} */

// nombre == "marco" ? alert("Bievenido") : alert("Usted no es bienvenido")

// let nombre = prompt("Ingrese su nombre:").toLowerCase()
// let edad = parseInt(prompt("Ingrese su edad:"))
// let permisoParaEntrar

/*
if (edad >= 18) {
    permisoParaEntrar = true
} else {
    permisoParaEntrar = false
}
*/

// edad >= 18 ? permisoParaEntrar = true : permisoParaEntrar = false

// let permisoParaEntrar = (edad >= 18 && nombre == "marco") ? true : false

// permisoParaEntrar ? alert("Bienvenido") : alert("Usted no tiene permiso para entrar")


// Ejemplo

// const temperatura = 28
// const mensaje = temperatura > 30 ? "Día caluroso!" : "Día agradable"

// console.log(mensaje);


// === Operador Ternario Multilinea ===

// let pass = parseInt(prompt("Ingrese la contraseña:"))

// if (pass == 1234) {
//     alert("Contraseña correcta")
// } else {
//     alert("Contraseña Incorrecta")
//     pass = prompt("Ingrese la contraseña:")
// }

// pass == 1234 ? (
//     alert("Contraseña Correcta")
// ) : (
//     alert("Contraseña incorrecta"),
//     pass = prompt("Ingrese la contraseña")
// )


// === Operador And ===

// Un if sin else

// const carrito = ["hola"]

// if (carrito.length === 0) {
//     console.log("El carrito está vacío");
// }

// let mensaje = carrito.length === 0 && "El carrito está vacío"
// console.log(mensaje);
// Devuelve false si la condición no se cumple


// === Operador Or ===

/*
Valores falsy:
false -- Valor booleano
0 - el número cero (también -0)
"" o '' - cadena de texto vacía
null - la ausencia de un valor
undefined - una variable que todavía no tiene un valor asignado
NaN - "Not - A - Number", un valor no númerico
*/

// let nombre = prompt("Ingrese su nombre:") || "Nombre Anonimo"
// console.log(nombre);

// let productos = ["Producto 1 ", "Producto 2"]
// localStorage.setItem("carrito", JSON.stringify(productos))


// let carrito = []
// let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))
// // Devuelve undefined si no encuentra nada

// if (carritoLocalStorage) {
//     carrito = carritoLocalStorage
// } else {
//     carrito = []
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || []

// ===== Ejemplo Form =====
/*
const form = document.getElementById("form-registro")

form.addEventListener("submit", (e) => {

    e.preventDefault()

    let nombreUsuario = form[0].value
    let passUsuario = form[1].value

    let usuario = {
        nombre: "",
        pass: ""
    }

    usuario.nombre = nombreUsuario ? nombreUsuario : "anonimo"

    let cant = passUsuario.length

    // if (cant <= 3) {
    //     form[1].style.borderColor = "red"
    // } else if (cant < 8) {
    //     form[1].style.borderColor = "yellow"
    // } else {
    //     form[1].style.borderColor = "green"
    // }

    form[1].style.borderColor = cant <= 3 && "red"
    form[1].style.borderColor = (cant > 3 && cant < 8) && "yellow"
    form[1].style.borderColor = cant > 8 && "green"

})

*/

// === Acceso condicional ===

// const usuario = null

// console.log(usuario.nombre || "El usuario no existe")
// Error: "No se pueden leer propiedades de NULL"

// console.log(usuario?.nombre || "El usuario no existe")
// "El usuario no existe"


// ==== Desestructuración de Objetos ====

// let persona = {
//     nombre: "Marco",
//     edad: 24,
//     rol: "profesor",
//     comisiones: {
//         javascript: 123423,
//         desarrolloWeb: 12314
//     }
// }

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.rol);

// const { nombre: nombreUsuario, edad, rol, comisiones: { javascript, desarrolloWeb } } = persona

// console.log(nombre);
// console.log(edad);
// console.log(rol);
// console.log(javascript);
// console.log(desarrolloWeb);


// nombre = "Richard"

// console.log(nombre);
// console.log(persona.nombre);

// console.log(nombreUsuario);

// === Ejemplo con funciones ===

let estudiante = {
    nombre: "Ivan",
    edad: 20,
    comision: 59995,
    promedio: 8
}

// function aprobar(estudiante) {
//     let { promedio, nombre } = estudiante
//     let aprobado = promedio >= 7 ? true : false
//     console.log(promedio, nombre);
//     return aprobado
// }

function aprobar({ promedio, nombre }) {
    let aprobado = promedio >= 7 ? true : false
    console.log(promedio, nombre);
    return aprobado
}

// estudiante.aprobado = aprobar(estudiante)
// console.log(estudiante);

// === DOM ===

// window.addEventListener("click", ({ x, y }) => {
//     console.log(x, y);
// })

// === Desestructuración de Arrays ===

// const numeros = [1, 2, 3, 4, 5, 6]

// const [primero, jorge, ayer, , , helado] = numeros

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(d);

// console.log(primero, jorge, ayer, helado);

// === Desestructuración de Arrays de Objetos ===

const estudiantes = [
    { nombre: "Richard", edad: 25 },
    { nombre: "Renzo", edad: 25 }
]

const [{ nombre: nombreUno }, { nombre: nombreDos }] = estudiantes

console.log(nombreUno);
console.log(nombreDos);

// === Parametros por Defecto === 

function mostrarUsuario(nombre = "Anónimo", edad = 18, ciudad = "Desconocida") {

    console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);

}

mostrarUsuario("Carlos")

// === Spread Operator con Arrays ===

// const numeros = [1, 2, 3, 4, 5]
// const numerosDos = [6, 7, 8, 9, 10]

// const nuevosNumeros = [...numeros, ...numerosDos]
// nuevosNumeros = [1,2,3,4,5,6,7,8,9,10]

// console.log(nuevosNumeros);

// console.log(Math.max(nuevosNumeros)) // NaN

// console.log(Math.max(...nuevosNumeros)) // 10 


// === Spread Operator con Objetos ===

const persona = {
    nombre: "Nicolas",
    edad: 21,
    ciudad: "Mar Del Plata"
}

const datosCompletos = {
    ...persona,
    ciudad: "Buenos Aires"
}

console.log(datosCompletos);

// === Spread de Array en Objeto ===

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

const nombresObj = {
    ...nombres
}

console.log(nombresObj);

// === Rest Parameters ===

//           Los valores se reciben como un array
function sumar(...numeros) {

    return numeros.reduce((acumulador, numero) => acumulador + numero, 0)

}


console.log(sumar(1, 2, 3, 123, 56, 123, 456, 567, 123)); // [1, 2, 3, 123, 56, 123, 456, 567, 123]


function mostrarDetalles(nombre, edad, ...hobbies) {

    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);


}

mostrarDetalles("Marco", 24, "musica", "comer", "viajar", "ir al cine")