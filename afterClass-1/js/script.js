// Repaso de Clase 1

/*
let --> Permite reasignación de valor
const --> Constante
*/

/*
Tipos de datos:
numbers --> Ej: 24
string ---> Ej: "Marco"
booleanos  ---> Ej: true / false
*/

/*
typeof dato

let nombre = "marco"
console.log(typeof nombre) ---> string
*/

/*
prompt("mensaje") --> string
confirm("mensaje") ---> booleano = true/false
alert("mensaje")
*/

/*
suma ---> +
resta --> -
division --> /
multiplicacion ---> *
sumar una unidad --> variable++
restar una unidad --> variable--
*/

/*
No podemos realizar operaciones sobre un string.
La suma de dos strings devuelven un string mas largo. Ejemplo : "24" + "24" = "2424"

Si yo deseo poder realizar operaciones con los datos que se ingresan en un prompt() debo parsear el string
parseInt(string) ---> Devuelve numero entero / Ejemplo: parseInt("24") ---> 24
parseFloat() ---> Devuelve numero decimal

dato.toFixed(2) ---> Setear cantidad de decimales //
Ejemplo:
let dato = 5.0000043
console.log(dato.toFixed(2)); -----> 5.00
*/


// ====== Condicionales =======

/*
if(condicion){
    bloque de codigo a ejecutar
}
    else if(condicion) ---> Evaluar condicion
    else ---> Instruccion alternativa si ninguna de las anteriores se cumple.
*/

/* Operadores de Comparación y Lógicos // Devuelven datos booleanos

== ---> Un dato es igual a otro. // Ejemplo: 24 == "24" ---> True
=== ---> Un dato es estrictamente igual a otro, se compara el tipo de dato. // Ejemplo: 24 === "24" --> False

!= ---> Un dato es diferente a otro.
!== ---> Estrictamente diferente.

< ---> Menor que // 24 < 50 ---> true
> ---> Mayor que //  24 > ---> false
>= ---> Mayor o igual
<= ---> Menor o igual

&& (AND) ---> Las dos condiciones tienen que ser true // Ejemplo: console.log(true && true) ---> true
|| (OR) ---> Solo una de las dos operaciones tiene que ser true // Ejemplo: console.log(false || (8 > 3)) ---> true

! (not) ---> Operador de negacion // Ejemplo: console.log(!true) ---> False
*/

/*
Otros tipos de datos relevantes:
null ---> Es un valor nulo, representa 0 o nada // Esto aparece cuando se cancela una ventana de prompt()
undefined ---> Valor de variable o dato indefinido
NaN (Not A Number) --->No es un numero
*/


/* Validacion de datos numericos
let numero = parseInt(prompt("Ingrese un numero"))
// isNaN("Hola") ---> true

while (isNaN(numero) || (numero < 0)) {
    numero = parseInt(prompt("Dato invalido, ingrese un numero:"))
}
*/

/* Ejemplo validacion con null
let nombre = prompt("Ingrese su nombre")
while (nombre === null || nombre === "") {
    nombre = prompt("El dato ingresado no es valido, ingrese su nombre:")
}

*/

// ========= Clase 2 ============


/* 
Ciclo For

for(contador; condicion; actualizacion ){
    // La instruccion a realizar
}

*/

for (let i = 0; i < 5; i++) {
    console.log("Hola n° " + i);

    /* 
    break ---> Frenar el ciclo
    if( i == 3 ){
        break 
    } 

    continue ---> Saltea un ciclo
        if ( i == 3){
        continue
        }
    */
}

/* Sentencia while
while (true) {

    let nombre = prompt("Ingrese el nombre")

    if (nombre == "marco") {
        break
    }
}
*/

/*  Sentencia do while

do{
    instrucciones a realizar
}while(condicion)

let nombre
do {
    nombre = prompt("Ingrese el nombre magico")
} while (nombre !== "marco")
*/


// ==== Funciones ===


/*
Bloque de código que se encarga de una tarea en especifico.
El nombre de la función debe de representar la tarea que lleva a cabo esa función.

function nombre(parametro){
    // Instrucciones
    return dato a retornar
}

*/


// =====  Ejemplo 1: Calcular Descuento ===== 

let precioUsuario = 0
let descuentoUsuario = 0

function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) / 100
    const precioConDescuento = precio - descuento

    return precioConDescuento
}

function pedirNumero(mensaje) {
    let numero = parseInt(prompt(mensaje))

    while (isNaN(numero) || (numero < 0)) {
        numero = parseInt(prompt(mensaje))
    }

    return numero

}

function simuladorDescuento() {

    precioUsuario = pedirNumero("Ingrese el precio de su producto:")
    descuentoUsuario = pedirNumero("Ingrese en números enteros el porcentaje de descuento que desea aplicar:")

    let precioFinal = calcularDescuento(precioUsuario, descuentoUsuario)

    alert(` 
        El precio de su producto es: ${precioUsuario}.
        El descuento que usted aplicó fue de: ${descuentoUsuario}%.
        El precio final de su producto con el descuento es de: $${precioFinal}
        `)

}

simuladorDescuento()
