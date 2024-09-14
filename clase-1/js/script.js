// ======= Clase 1 =========


// Declaracion
// let nombre

// Asignacion
// nombre = "Marco"

// Inicializar una variable
let rolEnElCurso = "Profesor"

// Declaracion con const
// const edad = 24

// console.log(nombre)

// ========= Tipos de Datos ======

let texto = "String 'Texto entre comillas'"
let numero = 423
let booleano = true // false

// ======= Operaciones basicas =====

/* 
suma = 54 + 45
resta = 345 - 45
multiplicacion = 5 * 3
division = 15 / 3 
*/

// let notaUno = 8
// let notaDos = 6
// let notaTres = 9

// let promedio = (notaUno + notaDos + notaTres) / 3

// console.log(promedio.toFixed(2))

// El promedio final es: 7.66
// console.log("El promedio final es: " + promedio.toFixed(2))

// console.log("20" + 10)


// ========= Concatenar Strings ========

let nombre = "Marco"
let apellido = "Serlik"

let nombreCompleto = nombre + " " + apellido

// console.log(nombreCompleto)

// ======== Métodos del navegador ========

// alert("Mostrar un mensaje!")

// console.log(confirm("Acepte"))

// let nombreUsuario = prompt("Ingrese su nombre:")
// let apellidoUsuario = prompt("Ingrese su apellido:")


// let nombreCompletoUsuario = nombreUsuario + " " + apellidoUsuario

// alert("Su nombre es: " + nombreCompletoUsuario)

// let numeroUno = prompt("Ingrese su primer numero:")
// let numeroDos = prompt("Ingrese su segundo numero:")

// console.log(typeof numeroUno);

// numeroUno = parseInt(numeroUno)
// numeroDos = parseInt(numeroDos)

parseInt() // entero
parseFloat() // decimales

// console.log(typeof numeroUno)
// console.log(typeof numeroDos)

// let resultado = numeroUno + numeroDos

// alert("Su resultado es: " + resultado)

// ============= Ejemplo Integrador =========


// let nombreUsuario = prompt("Por favor, para continuar le solicitamos que ingrese su nombre:")

// alert("¡Hola " + nombreUsuario + "! Bienvenido al simulador de promedios. \n A continuación le solicitaremos que ingrese 3 numeros, luego le daremos el promedio final.")

// let notaUno = parseInt(prompt("Ingrese el primer valor:"))
// let notaDos = parseInt(prompt("Ingrese el segundo valor:"))
// let notaTres = parseInt(prompt("Ingrese el tercer valor:"))

// let promedio = (notaUno + notaDos + notaTres) / 3

// alert("Perfecto " + nombreUsuario + "! Tu promedio final es: " + promedio.toFixed(2))

// =========== Bloque 2 - Control de Flujos =============

// if (true) {
//     console.log("Hola")
// }

/*
== Igualdad
=== Estrictamente igual (Se compara el tipo de dato)
!= Es distinto
!== Es esctrictamente distinto (Se compara el tipo de dato)

< Menor que
<= Menor o igual a
> Mayor que
>= Mayor o igual a
*/

// .toLowerCase() ---> Lleva un string a minusculas
// .toUpperCase() ---> Lleva un string a mayusculas

/*
let usuario = prompt("Ingrese su nombre").toLowerCase()

if (usuario == "marco") {
    alert("Bienvenido " + usuario)
} else if (usuario === "igna") {
    alert("Bienvenido " + usuario)
} else {
    alert("Acceso Denegado")
}
*/

/*
let password = parseInt(prompt("Ingrese su clave númerica:"))

if (password !== 123456) {
    alert("La contraseña no es valida")
} else {
    alert("Bienvenido")
}
*/
/*
const password = 123456
const usuarioRegistrado = "marco"
let passUsuario = ""
let usuario = prompt("Ingrese su usuario").toLowerCase()

if (usuario === usuarioRegistrado) {

    passUsuario = parseInt(prompt("Ingrese su clave numerica:"))

    if (passUsuario === password) {
        alert("Logedo correctamente. Bienvenido.")
    } else {
        alert("Password incorrecta. Intente luego.")
    }

} else {
    alert("Usuario Incorrecto. Intente luego.")
}
*/
/*
let edad = parseInt(prompt("Ingrese su edad: "))

if ((edad >= 18) && (edad <= 100)) {
    alert("Bienvenido al sitio")
} else {
    alert("Lo lamento, usted no puede ingresar")
}
*/


// const password = 123456
// const usuarioRegistrado = "marco"
// let usuario = prompt("Ingrese su usuario").toLowerCase()
// let passUsuario = parseInt(prompt("Ingrese la clave numerica:"))


// if ((usuario === usuarioRegistrado) && (passUsuario === password)) {
//     alert("Bienvenido al sitio")
// } else {
//     alert("Acceso Denegado")
// }

// let usuario = prompt("Ingrese su rol: ")
//
// if ((usuario != "") && ((usuario === "marco") || (usuario === "MARCO"))) {
//     alert("Hola Marco!")
// }


// ============= Valores Falsy ==============

/* false, 0 , "" , undefined , null*/

// let variable = prompt("Ingrese un nombre:")

// console.log(variable)

if (!false) {
    console.log("Mensaje")
}

// ============ Ejemplos ==========

let montoCompra = parseInt(prompt("Ingrese el monto total de su compra: "))
let descuento = 0
let totalFinal = 0

if (montoCompra >= 1000) {
    descuento = montoCompra * 0.1
} else if (montoCompra >= 500) {
    descuento = montoCompra * 0.05
}


totalFinal = montoCompra - descuento

if (descuento > 0) {
    alert("Felicidades! Tenes un descuento de $" + descuento + ". El total a pagar es: $" + totalFinal)
} else {
    alert("No aplica para un descuento. El monto total a pagar es: $" + montoCompra)
}
