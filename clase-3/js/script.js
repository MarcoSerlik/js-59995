// =========== Repaso ==========

// for (let i = 0; i < 5; i++) {
//     // Código a ejecutar

//     // break | continue
// }

// while (datoUsuario === "") {
//     // Código a ejecutar
// }

// do {
//     // Codigo a ejecutar por lo menos una vez
// } while (datoUsuario === "")

// switch (datoAEvaluar) {
//     case "texto 1":
//         // Código a ejecutar
//         break
//     case "texto 2":
//         break
//     default:
//         break
// }

// function miFuncion(mensaje) {
//     alert(mensaje)
//     // Código a ejecutar
//     return mensaje
// }

// console.log(miFuncion("Bienvenido a mi sitio"))

// const miFuncion = (mensaje) => {
//     alert(mensaje)
//     return mensaje
// }

// miFuncion("Mensaje")

// =========== Objetos ==========
/*
const nombre = "Marco"
const edad = 24
const rol = "Profesor"
const tieneHambre = true

const usuario = {
    nombre: "Marco",
    edad: 24,
    rol: "Profesor",
    tieneHambre: true
}*/

// Acceder a los valores de cada propiedad de mi objeto:
// console.log(usuario.nombre)
// console.log(usuario["nombre"])

//Actualizar datos de mi objeto.
// usuario.tieneHambre = false
// console.log(usuario.tieneHambre)

// Sumar nuevas propiedades
// usuario.activo = true
// console.log(usuario.activo)
// console.log(usuario)

// Borrar propiedad del objeto
// delete usuario.tieneHambre
// console.log(usuario);


// ========= Funcion Constructora ========
/*
function Producto(nombre, precio, desc) {
    this.nombre = nombre
    this.precio = precio
    this.desc = desc
}

const producto = new Producto("Remera", 10000, "Remera de algodon")
const producto2 = new Producto("Buzo", 30000, "Buzo estampado")

console.log(producto)
console.log(producto2)
*/

// ============= This, New ==========
/*
function Producto(nombre, precio, desc) {
    this.nombre = nombre
    this.precio = precio
    this.desc = desc
}
*/
// const producto = new Producto("Remera", 10000, "Remera de algodon")
/*
const producto = {
    // Acá opera Producto()
    // this.nombre = "Remera"
    // objeto.nombre = "Remera"
}
*/

// ========== Métodos ==========
/*
function Producto(nombre, precio, desc, stock) {
    this.nombre = nombre
    this.precio = precio
    this.desc = desc
    this.stock = stock

    this.mostrarStock = () => console.log("El stock disponible es: " + this.stock)

}

const producto = new Producto("Remera", 10000, "Remera de algodon", 20)
console.log(producto)

producto.mostrarStock()
*/

// ========= Clases =========
/*
class Producto {

    constructor(nombre, precio, desc, stock) {
        this.nombre = nombre
        this.precio = precio
        this.desc = desc
        this.stock = stock
    }

    restarStock() {
        this.stock--
    }

    agregarStock(cantidad) {
        this.stock += cantidad
        // this.stock = this.stock + cantidad
    }

}

const producto = new Producto("Remera", 10000, "Remera algodon", 20)
console.log(producto);

producto.restarStock()
console.log(producto);

producto.agregarStock(40)
console.log(producto);
*/

// ======= Ejemplo =======
/*
class CuentaBancaria {

    constructor(nombre, saldo, tipo) {
        this.nombreUsuario = nombre
        this.saldo = saldo
        this.tipo = tipo
    }

    obtenerSaldo() {
        console.log(this.saldo);
        return this.saldo
    }

    // Método para depositar dinero
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad
            // this.saldo = this.saldo + cantidad
            alert(`Depositado: $${cantidad}. Nuevo saldo: $${this.saldo}`)
            return this.saldo
        } else {
            alert("La cantidad a depositar debe ser positiva.")
        }
    }

    // Método para retirar dinero
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad
            // this.saldo = this.saldo - cantidad
            alert(` Retirado: $${cantidad}. Nuevo saldo: $${this.saldo} `)
            return this.saldo
        } else {
            alert("Cantidad inválida o insuficiente saldo.")
        }
    }
}

const cuenta1 = new CuentaBancaria("Marco", 20000, "Caja de Ahorro")
console.log(cuenta1);

cuenta1.obtenerSaldo()

cuenta1.retirar(10000)
cuenta1.depositar(50000)
*/
// ======== Stack y Heap ========
/*
// Se guarda en Stack
// Copiando el valor de otra variable
let texto = "Hola"
let texto2 = texto
console.log(texto, texto2)

texto = "Chau"
console.log(texto2);

// Se guarda en Heap
const usuario = { /// id: 444
    nombre: "Marco",
    edad: 24,
    nacionalidad: "Argentino"
}

// Se guarda la referencia al objeto
const usuario2 = usuario /// id: 4444
usuario2.edad = 26

console.log(usuario);
*/


// =========== ARRAYS ===========

// const productos = ["Cama", "Mesa", "Silla", "Placard", "Puerta"]

// const numeros = [22, 11, 54, 52]

const mixto = [true, 123, "Hola", { nombre: "Marco" }]

// console.log(productos);
// console.log(productos[4])

// const resultado = numeros[3] + numeros[1]
// console.log(resultado);

for (let i = 0; i < 4; i++) {
    // 1. i = 0  ||   console.log(productos[0]) ---> "Cama"
    // 1. i = 1  ||   console.log(productos[1]) ---> "Mesa"
    // console.log(productos[i])

}

// Acceder a la longitud de mi array
// console.log(productos.length);

// Recorrer la totalidad del array
// for (let i = 0; i < productos.length; i++) {
// console.log(productos[i])
// }

// =========== Ejemplos recorrer Array==============
/*
const precios = [22, 11, 54, 52]
let total = 0 // Acumulador

for (let i = 0; i < precios.length; i++) {
    total += precios[i]
}

console.log("Resultado final: $" + total);
*/

/*
const usuariosRegistrados = ["roberto", "manuel", "sofia", "mailen", "carlos"]
let usuario = ""

const validarUsuario = (user) => {

    // Recorremos el array de usuarios registrados para validar
    for (let i = 0; i < usuariosRegistrados.length; i++) {

        // Retornar true si el usuario ingresado coincide con alguno de mis usuarios registrados
        if (user === usuariosRegistrados[i]) {
            return true
        }
    }

}

do {
    usuario = prompt("Ingrese su nombre:").toLowerCase()
    if (validarUsuario(usuario)) {
        alert("Usted es bienvenido!")
    } else {
        alert("Acceso Denegado")
    }
} while (validarUsuario(usuario) !== true)
*/

// ======= Métodos para los Arrays =======

// const productos = ["Cama", "Mesa", "Silla", "Placard", "Puerta"]

// == Agregar elementos al Array, en la ultima posicion
// productos.push("Mesa de Luz")
// console.log(productos);

// == Agregar elementos en la primer posicion del array
// productos.unshift("Escritorio")
// console.log(productos);

// == Eliminar elementos del Array
// productos.pop() // Borrar el ultimo
// productos.shift() // Borrar el primero
// console.log(productos);

// == Unir todos los elementos a un string con un cáracter que los una
// console.log(productos.join(" + "));
// console.log("Nuestros productos son: " + productos.join(", ") + ".");

// == Unir dos arrays en un nuevo .concat()
// const productosUsados = ["Escritorio", "Bicicleta", "Piano"]

// const ofertas = productos.concat(productosUsados)
// console.log(ofertas);

// == Averiguar indice de un elemento en el Array
// console.log(productos.indexOf("Silla")) // ---> Retorna 2
// console.log(productos.indexOf("Piano")) // ---> Retorna -1 si no encuentra el elemento.


// == Verificar si existe un elemento en mi Array
// console.log(productos.includes("Silla"));

// == Borrar desde un punto especifico
//               splice(desde, cuantos)
//      productos.splice(2, 3)
// productos.splice(productos.indexOf("Silla"), 3)


// == Armar una copia de un fragmento de un Array
//                                    .slice(inclusivo, excluyente)
// const corte = productos.slice(2, 5)
// console.log(corte);

// ========== Funcion para eliminar elemento especifico ========
/*
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre, array,) => {
    // busco su índice en el array
    let index = array.indexOf(nombre) // Devuelve -1 si no lo encuentra

    // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1) {
        array.splice(index, 1)
    }
}

eliminar('Pedro', nombres)
eliminar("Silla", productos)
console.log(productos);
console.log(nombres);

*/


///============= Arrays y Objetos ============

// const productos = [
//     {
//         id: 1,
//         nombre: "Producto 1",
//         precio: 9000,
//     },
//     {
//         id: 2,
//         nombre: "Producto 2",
//         precio: 12000,
//     },
//     {
//         id: 3,
//         nombre: "Producto 3",
//         precio: 44000,
//     },
// ]

// // console.log(productos[2].nombre);

// class Producto {

//     constructor(id, nombre, precio, desc) {
//         this.id = id
//         this.nombre = nombre.toLowerCase()
//         this.precio = precio
//         this.desc = desc
//     }

// }

// const productosArray = [
//     new Producto(1, "producto 1", 15000, "Remera"),
//     new Producto(2, "producto 2", 8000, "Remera"),
//     new Producto(3, "producto 3", 30000, "Remera"),
// ]

// productosArray.push(new Producto(4, "producto 4", 45000))

// console.log(productosArray);

// Sumar precios de un array de productos
// let totalCarrito = 0
// for (let i = 0; i < productosArray.length; i++) {
//     totalCarrito += productosArray[i].precio
// }

// console.log(totalCarrito);


// ===== Sentencia for ...of ======

// Sirve para recorrer Arrays de Objetos. 
// La variable "elemento" va a ir tomando como valor cada objeto del array
// for (let elemento of productosArray) {

// console.log("Producto: " + elemento.nombre);
// console.log("Precio: " + elemento.precio);

// }

//  =========== Ejemplo ==============


class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
    }
}

// Mi base de datos
const productos = []

const agregarProductos = () => {
    let nombre = prompt("Ingrese el nombre del producto:")
    let precio = parseInt(prompt("Ingrese el precio del producto:"))
    let descripcion = prompt("Ingrese una breve descripcion:")

    let producto = new Producto(nombre, precio, descripcion)

    productos.push(producto)
}

const mostrarProductos = () => {
    let total = 0
    let mensaje = "Productos agregados: \n"

    for (let producto of productos) {
        mensaje += `
        . Nombre: ${producto.nombre}
        . Descripcion: ${producto.descripcion}
        . Precio: $${producto.precio}
        `
        total += producto.precio
    }

    alert(mensaje)
    alert(`El precio final de todos los productos es $${total}`)
}

const borrar = () => {
    let seleccion = parseInt(prompt("Ingrese el numero del producto que deseas borrar:")) - 1

    productos.splice(seleccion, 1)
}


const simulador = () => {
    let continuar = true

    while (continuar) {
        agregarProductos()
        continuar = confirm("¿Desea agregar otro producto?")
    }

    mostrarProductos()

}

simulador()

switch (seleccion) {
    case 1:

}