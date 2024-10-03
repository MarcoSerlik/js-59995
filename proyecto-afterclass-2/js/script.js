/* === Borrar Objetos de un Array ===

let personas = [
    {
        nombre: "Juan",
        edad: 30,
    },
    {
        nombre: "Sofia",
        edad: 22,
    },
    {
        nombre: "Raul",
        edad: 45,
    }
]

function borrarElemento(array, busqueda) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nombre === busqueda) {
            array.splice(i, 1)
            break
        }
    }
}

borrarElemento(personas, "Sofia")

console.log(personas)
*/


// ====== Objetos ======

// const usuario = {
//     nombre: "Marco",
//     edad: 24,
//     trabajo: "Profesor",
//     conocimientos: ["html", "css", "js"],
//     tieneHambre: true
// }

// usuario.tieneHambre = false
// usuario.conocimientos.push("SASS")
// delete usuario.tieneHambre
// usuario.nacionalidad = "Argentino"

// console.log(usuario)

// class Producto {

//     constructor(nombre, precio, desc, stock) {
//         this.nombre = nombre
//         this.precio = precio
//         this.desc = desc
//         this.stock = stock
//     }

//     restarStock() {
//         this.stock--
//     }

//     agregarStock(cantidad) {
//         this.stock += cantidad
//     }
// }

// const producto = new Producto("Remera", 5000, "Remera de Boca", 20)
// producto.restarStock()

// console.log(producto)

// ====== Arrays =====

// const productos = ["Cama", "Silla", "Escritorio", "Placard", "Bicicleta"]

// console.log(productos[4])

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i])
// }


// ===== Métodos para Arrays ===

// productos.push("Mesa de Luz")
// productos.unshift("Escritorio")

// productos.pop()
// productos.shift()

// console.log(productos.includes("Cama"))
// console.log(productos.indexOf("Silla"))

// ========= Ejemplo ============

class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

}

// Array para almacenar productos que se ingresan
const productos = [
    {
        nombre: "Bicicleta",
        precio: 100000,
        stock: 10
    },
    {
        nombre: "Escritorio",
        precio: 80000,
        stock: 20
    },
    {
        nombre: "Buzo",
        precio: 50000,
        stock: 40
    }
]

// Array de Carrito
const carrito = []

const mostrarMenu = () => {
    let opcion = ""

    do {
        opcion = prompt(
            `Selecciona una opción:
    1. Agregar productos.
    2. Comprar productos. 
    3. Salir del simulador`
        )

        switch (opcion) {
            case "1":
                agregarProductos()
                break
            case "2":
                comprarProductos()
                break
            case "3":
                alert("Gracias por usar el simulador")
                break
            default:
                alert("Opción inválida. Ingrese otro valor:")
        }
    } while (opcion !== "3")

}

const agregarProductos = () => {
    let nombre = prompt("Ingrese el nombre del producto:")
    let precio = parseInt(prompt("Ingrese el precio del producto:"))
    let stock = parseInt(prompt("Ingrese el stock del producto"))

    productos.push(new Producto(nombre, precio, stock))
    alert(
        `Producto ingresado correctamente. Los datos:
        . Nombre: ${nombre}
        . Precio: $${precio}
        . Stock: ${stock}
        `)
}

const comprarProductos = () => {

    let mensaje = "Productos disponibles: \n"

    for (let i = 0; i < productos.length; i++) {
        mensaje += `
        ${i + 1}. ${productos[i].nombre} - $${productos[i].precio}
        . Stock: ${productos[i].stock}\n`
    }

    let seguirComprando

    do {
        let seleccion = parseInt(prompt(mensaje + "\nSelecciona el número del producto que deseas agregar al carrito: ")) - 1
        carrito.push(productos[seleccion])
        productos[seleccion].stock--
        alert(`${productos[seleccion].nombre} ha sido agregado al carrito`)

        seguirComprando = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase()

    } while (seguirComprando === "si")

    mostrarTotal()
}

const mostrarTotal = () => {
    let total = 0
    let resumenCompra = "Productos en tu carrito: \n"

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio
        resumenCompra += `${carrito[i].nombre} - $${carrito[i].precio} \n`
    }
    alert(resumenCompra + "Total a pagar: $" + total)
}

mostrarMenu()