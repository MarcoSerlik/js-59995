// ==== Repaso ====

//== Operadores ternarios

// condicion ? verdadero : falso

// let edad = parseInt(prompt("Ingrese su edad:"))

// let permisoParaEntrar = edad >= 18 ? true : false

// let pass = parseInt(prompt("Ingrese la contraseña"))

// pass == 1234 ? (
//     alert("Contraseña correcta")
// ) : (
//     alert("Contraseña incorrecta"),
//     pass = prompt("Ingrese la contraseña:")
// )

// == Operador And

// const usuario = { nombre: "Ana", edad: 18 }
// const mensaje = usuario.edad >= 18 && "Usuario mayor de edad"

// == Operador Or

// const carrito = JSON.parse(localStorage.getItem("carrito")) || []

// == Desestructurar objetos

// let persona = {
//     nombre: "Marco",
//     edad: 24,
//     rol: "Profesor"
// }

// let { nombre, edad, rol: rolUsuario } = persona

// console.log(nombre);

// nombre = "Richard"

// console.log(nombre);
// console.log(persona);

// persona.nombre = "Richard"
// console.log(persona);

// console.log(rolUsuario);


// // == Desestructurar Arrays

// let numeros = [1, 2, "hola", 4, 6,]

// let [a, b, c] = numeros

// console.log(a, b, c);


// ======== Asincronia =======

// console.log("Hola");
// console.log(variable);
// console.log("Chau");


// setTimeout(fn , tiempoMS)

// let mostrarMensaje = () => {
//     console.log("Mensaje");
// }

// console.log("Hola");

// setTimeout(() => {
//     console.log("Mensaje después de 3 segundos");
// }, 0)

// console.log("Chau");

// setTimeout(mostrarMensaje, 3000)


// setInterval( fn , tiempo )

// setInterval(() => {
//     console.log("Hola");
// }, 2000)

// clearInterval()
// clearTimeout()

// let contador = 0

// const interval = setInterval(() => {

//     console.log("Contador: ", contador);
//     contador++

//     if (contador > 5) {
//         clearInterval(interval)
//         console.log("Se frenó el contador");

//     }

// }, 1000)

// const fin = setTimeout(() => {
//     console.log("fin");
// }, 2000)

// clearTimeout(fin)


// ======== Promesas =======


// const getData = () => {

//     setTimeout(() => {
//         return baseDeDatos
//     }, 2000)

// }

// console.log(getData());


// const traerDatos = (res) => {
//     return new Promise((resolve, reject) => {

//         if (res) {
//             // Devolvemos un valor si se cumple la promesa
//             resolve("Mi promesa se cumplió correctamente")
//         } else {
//             // Devolvemos un mensaje de error si la promesa es rechazada
//             reject("La promesa fue rechazada")
//         }

//     })
// }

// traerDatos(true)
// Lo que hacemos si la promesa se resuelve
// .then((respuesta) => console.log(respuesta))

// Lo que hacemos si la promesa se rechaza
// .catch((respuesta) => console.log(respuesta))

// Lo que hacemos cuando se finaliza la promesa
// .finally(() => console.log("Termino"))


// const pedirProductos = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(baseDeDatos)
//     }, 3000)
// }) 

const baseDeDatos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 5000,
        descripcion: "Remera",
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 10000,
        descripcion: "Pantalon",
        img: "https://prd.place/201"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 30000,
        descripcion: "Buzo",
        img: "https://prd.place/202"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 80000,
        descripcion: "Zapatillas",
        img: "https://prd.place/203"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 25000,
        descripcion: "Vestido",
        img: "https://prd.place/204"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 90000,
        descripcion: "Botas",
        img: "https://prd.place/205"
    }
]

const contenedor = document.getElementById("seccion")
let productos = []

function mostrarProductos(array) {
    array.forEach(element => {
        const div = document.createElement("div")

        div.innerHTML = `
        <p> ${element.nombre} </p>
        `

        contenedor.append(div)
    });
}

function pedirProductos(data) {
    return new Promise((resolve, reject) => {

        if (data === false) {
            reject("Error trayendo datos")
        }

        setTimeout(() => {
            resolve(baseDeDatos)
        }, 3000)
    })
}

// pedirProductos()
//     .then(
//         (res) => {
//             productos = res
//             console.log(res);
//             mostrarProductos(productos)
//         }
//     )
//     .catch()


// ===== Try / Catch ========

// try {
//     console.log(rodolfo);
// } catch (error) {
//     console.log(error);
// }

// ====== Async / Await =====


async function iniciarSimulador() {

    try {
        const respuesta = await pedirProductos(false) // pedirProductos luego de 3seg devuelve array de objetos
        mostrarProductos(respuesta)
    } catch (e) {
        console.log(e);
    }

}

iniciarSimulador()