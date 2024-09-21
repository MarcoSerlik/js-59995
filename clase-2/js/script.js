// ======== Repaso =============
/*
let numero = 120
const nombre = "marco"
const booleano = true //false
*/
/*
console.log()
alert("")
confirm("") ---> true/false
prompt("") ---> devuelve un string

parseInt(dato) ---> Numeros enteros
parseFloat(dato) ---> Admite decimales
*/

/*
if (condicion) {
    // Codigo a ejecutar
} else if (condicion) {
    // codigo alternativo
} else {
    // Opcion alternativa final
}
*/

/* Operadores
== Es igual
=== Es estrictamente igual
!= Es distinto
!== Es esctrictamente distinto

< menor que
> mayor
>= mayor o igual
<= menor o igual

&& and
|| or
! operador not // !true --> false

Valores Falsy:
false
null
undefined
0
""
*/

// ======= CLASE 2 // Ciclos y funciones ======

// ==== Ciclo For ===

/*
for (contador; condicion; actualizacion) {
    Codigo a Ejecutar
}

*/

// numero++ 5 --> 6 // numero-- 5 --> 4

// 1. i = 0 // "Hola N° 0"
// 2. i = 1 // "Hola N° 1"
/*
for (let i = 0; i < 5; i++) {
    console.log("Hola N°" + i);
}
*/
// Paso 1: Evaluar si la condición se cumple
// Paso 2: Ejecutar el código que está dentro de las llaves
// Paso 3: Actualizar nuestro contador

/* Ejemplo de tablas de multiplicar:
let numeroUsuario = parseInt(prompt("Ingresar un número"))

for (let i = 0; i <= 10; i++) {

    let resultado = numeroUsuario * i
    // resultado = 5 * 1 (5)
    // resultado = 5 * 2 (10)
    // resultado = 5 * 3 (15)

    console.log(numeroUsuario + " x " + i + " = " + resultado);

}
*/

// ========== Sentencias Break y Continue ========

/*
for (let i = 0; i <= 15; i++) {

    if (i === 7) {
        console.log("Apareció el numero prohibido!");
        // break
        // continue
    }

    console.log("Tu número es: " + i);

}

*/

// ====== Ejemplo =========

// console.log("#")
// console.log("##")
// console.log("###")
// console.log("####")
// console.log("#####")
// console.log("######")
// console.log("#######")
// console.log("########")


/*
let bloque = "#"
let limite = parseInt(prompt("Ingrese el limite"))

for (let i = 0; i < limite; i++) {
    console.log(bloque)

    // bloque = bloque + "#"
    bloque += "#"
}
*/

// ========= While ========

/*
while (condicion) {
    //Bloque de codigo a ejecutar
}
*/
/*
let contador = 0

while (contador <= 10) {
    console.log("Iteración N° " + contador)
    contador++
}

*/

// ===== Ejemplo Validar datos ====
/*
let usuario = prompt("Ingrese su nombre de usuario:").toLowerCase()
let contadorIntentos = 0

while (usuario !== "marco") {

    if (contadorIntentos === 3) {
        alert("Acceso Bloquedo")
        break
    }

    usuario = prompt("El valor ingresado es incorrecto. Ingrese su usuario:")
    contadorIntentos++
    // 1. contadorIntentos = 0
    // 2. contadorIntentos = 1
    // 3. contadorIntentos = 2
    // 4. contadorIntentos = 3 ---> Se bloquea Acceso
}

*/

// ======= Do ...While ========
/*
let pass = 0

do {
    pass = parseInt(prompt("Ingrese contraseña númerica:"))
} while (pass !== 1234)
*/

// ========= Switch =========
/*
let producto = prompt("Ingrese el nombre del producto por el cual desea consultar:").toLowerCase()

switch (producto) {
    case "remera":
        alert("El valor de la remera es: $5000")
        break

    case "pantalon":
        alert("El valor de el pantalon es: $8000")
        break

    case "campera":
        alert("El valor de la campera es: $13000")
        break

    default:
        alert("El valor ingresado no es correcto")
        break
}

*/

// ======= Calculadora ========

/*
let numeroUno = parseInt(prompt("Ingrese el primer número:"))
let numeroDos = parseInt(prompt("Ingrese el segundo número:"))
let operacion = prompt("Ingrese el operador de la operacion que desea realizar: (+, -,  /, *) ")
let resultado = 0

switch (operacion) {
    case "+":
        resultado = numeroUno + numeroDos
        alert("El resultado de su operación es: " + resultado)
        break

    case "-":
        resultado = numeroUno - numeroDos
        alert("El resultado de su operación es: " + resultado)
        break

    case "*":
        resultado = numeroUno * numeroDos
        alert("El resultado de su operación es: " + resultado)
        break

    case "/":
        resultado = numeroUno / numeroDos
        alert("El resultado de su operación es: " + resultado)
        break

    default:
        alert("Los datos ingresados no son validos")
        break
}

*/

// ======== Simulador Tienda =======
/*
let total = 0
let seleccionUsuario = prompt("Ingrese el nombre del producto que desea adquirir. Tenemos disponible: remera, pantalon, campera. ").toLowerCase()

while (seleccionUsuario !== "comprar") {
    switch (seleccionUsuario) {
        case "remera":
            total += 8000
            console.log(total);
            seleccionUsuario = prompt("Usted selecciono remera. Ingrese el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar su compra.")
            break

        case "pantalon":
            total += 13000
            console.log(total);
            seleccionUsuario = prompt("Usted selecciono un pantalon. Ingrese el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar su compra.")
            break

        case "campera":
            total += 20000
            console.log(total);
            seleccionUsuario = prompt("Usted selecciono campera. Ingrese el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar su compra.")
            break

        default:
            seleccionUsuario = prompt("El valor ingresado no es correcto.  Ingrese el nombre de un producto si desea comprar o la palabra 'comprar' si desea finalizar su compra. ")
            break
    }
}

alert("El valor final de su compra es: $" + total)

*/

// ====== Funciones ======
/*
function saludarUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombreUsuario)
}

saludarUsuario()
saludarUsuario()
saludarUsuario() */
/*
let num1 = 20
let num2 = 50

let resultado = 0

console.log(resultado);

function sumar() {
    resultado = num1 + num2
}

sumar()

console.log(resultado);
*/
/*
let usuario = prompt("Ingrese su nombre:")

function saludar(nombre) {
    alert("Hola! Bienvenido " + nombre)
}

saludar(usuario)
*/

//saludar("Marco") // parametro nombre = "Marco"
//saludar("Richard") // Paramtro nombre = "Richard"
/*
let resultado

function sumar(a, b) {

    return a + b
}

sumar(20, 40) // a = 20 // b = 40
console.log(resultado);

sumar(60, 80) // a = 60 / b = 80
console.log(resultado);

console.log(sumar(20, 40));
*/

// ======== Ejemplo ========

/*
let resultadoFinal = 0

function solicitarNumero() {

    let numero = prompt("Por favor, ingresa un número o escribe 'salir' para terminar:  ")
    if (numero.toLowerCase() === "salir") {
        return "salir"
    }

    numero = parseInt(numero)
    return numero

}

function sumar() {

    let numeroUno = solicitarNumero()

    if (numeroUno === "salir") {
        return "salir"
    }

    let numeroDos = solicitarNumero()

    if (numeroDos === "salir") {
        return "salir"
    }

    let resultado = numeroUno + numeroDos

    return resultado
}

do {
    resultadoFinal = sumar()

    if (resultadoFinal === "salir") {
        alert("El programa se ha terminado.")
    } else {
        alert("Su resultado final es: " + resultadoFinal)
    }
} while (resultadoFinal !== "salir")

    */
// ========== Scope ============

// Se buscan los valores/variables en el ambito mas cercano. Si no está en el ámbito local, se busca en el global.
// Desde el ámbito global, no puedo acceder a el ámbito local de una función.
/*
function mostrarDatos() {
    let nombre = "Jorge"
    let edad = 8

    if (edad >= 18) {
        let mensaje = `Tu nombre es: ${nombre} y tu edad es ${edad}. Sos mayor podes ingresar`
        return mensaje
    } else {
        let mensaje = `Tu nombre es: ${nombre} y tu edad es ${edad}. Sos mayor podes ingresar`
        return mensaje
    }
}

console.log(mostrarDatos());
*/


//  ====== Funciones Anónimas =======

// const suma = function (a, b) { return a + b }

// console.log(suma(23, 48));

//  ====== Funciones Flecha =======

// console.log(suma(8, 60))

const suma = (a, b) => { return a + b }
const resta = (a, b) => a - b

console.log(resta(40, 10));

// console.log(sumar(3, 6));

// function sumar(a, b) {
//     return a + b
// }

// ===== Ejemplo =======

const iva = 1.21

// Funciones Flechas
const calcularPrecioConIva = (precioSinIVA) => precioSinIVA * iva

const mostrarResultado = (precioFinal) => alert("El precio final es: " + precioFinal)

const calculadora = () => {

    let precioConIva = 0
    let precioUsuario = parseInt(prompt("Ingrese el precio de su producto:"))

    precioConIva = calcularPrecioConIva(precioUsuario)

    mostrarResultado(precioConIva)

}
// calculadora()


// ========= Ejemplo ===========
/*
let total = 0
let seleccionUsuario = prompt("Ingrese el nombre del producto que desea adquirir. Tenemos disponible: remera, pantalon, campera. ").toLowerCase()

while (seleccionUsuario !== "comprar") {
    switch (seleccionUsuario) {
        case "remera":
            total += 8000
            console.log(total);
            seleccionUsuario = prompt("Usted selecciono remera. Ingrese el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar su compra.")
            break

        case "pantalon":
            total += 13000
            console.log(total);
            seleccionUsuario = prompt("Usted selecciono un pantalon. Ingrese el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar su compra.")
            break

        case "campera":
            total += 20000
            console.log(total);
            seleccionUsuario = prompt("Usted selecciono campera. Ingrese el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar su compra.")
            break

        default:
            seleccionUsuario = prompt("El valor ingresado no es correcto.  Ingrese el nombre de un producto si desea comprar o la palabra 'comprar' si desea finalizar su compra. ")
            break
    }
}

alert("El valor final de su compra es: $" + total)*/


let total = 0
let seleccionUsuario = ""

const sumarTotal = (precio) => total += precio

const bienvenidaUsuario = () => {
    seleccionUsuario = prompt(
        `Bienvenido al simulador de compra. Los productos disponibles son:

    . Remera: $8000
    . Pantalón: $ 9000
    . Campera: $13000

    Ingrese el nombre del producto que desea comprar:`)

}

const resumenMensaje = (producto) => {
    seleccionUsuario = prompt(
        `Usted ha seleccionado un/a ${producto}. Su nuevo total es: $ ${total} 
    
    ¿Desea comprar algo más? Tenemos disponible:
    . Remera: $8000
    . Pantalón: $9000
    . Campera: $13000

    Si desea finalizar la compra ingrese la palabra "comprar", caso contrario ingrese el nombre del producto que desee:
    `
    )
}

const mostrarTotalFinal = () => {
    alert("El valor final de su compra es de $" + total)
    return total
}

const simuladorTienda = () => {

    bienvenidaUsuario()

    while (seleccionUsuario != "comprar") {

        switch (seleccionUsuario) {
            case "remera":
                sumarTotal(8000)
                resumenMensaje("remera")
                break

            case "pantalon":
                sumarTotal(9000)
                resumenMensaje("pantalon")
                break

            case "campera":
                sumarTotal(13000)
                resumenMensaje("campera")
                break

            default:
                seleccionUsuario = prompt("El valor ingresado no es valido. Ingrese el nombre de producto o  'comprar' para finalizar la compra. ")
                break
        }
    }

    mostrarTotalFinal()
}

simuladorTienda()

// Template String
console.log(` Hola, su total es: ${total}  `)