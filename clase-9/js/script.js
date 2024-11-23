// =========== Repaso ==========

// const promesa = () => {
//     return new Promise((resolve, reject) => {

//         const exito = false

//         if (exito) {
//             resolve("La promesa se cumplió")
//         } else {
//             reject("La operación falló")
//         }
//     })
// }


// promesa()
//     .then(
//         (mensaje) => {
//              console.log(mensaje);
//         }
//     ).catch(
//         (error) => {
//              console.log(error);
//         }
//     )

// const traerInfo = async () => {

//     try {
//         const respuesta = await promesa()
//         console.log(respuesta);
//     } catch (error) {
//         console.log(error);
//     }
// }

// traerInfo()

// ============

// const contenedor = document.getElementById("seccion")


// let valorDolar = 0

// fetch('https://criptoya.com/api/dolar')
//     .then(respuesta => respuesta.json())
//     .then(data => {
//         valorDolar = data.blue.ask
//     })

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((respuesta) => respuesta.json()) // Obtener la información y parsearla
//     .then((data) => {
//         console.log(data);

//         data.forEach(element => {
//             const div = document.createElement("div")
//             div.innerHTML = `
//             <h2>${element.title}</h2>
//             `
//             contenedor.append(div)
//         });

//         // mostrarProductos(data)
//     })

// const getData = async () => {

//     const url = 'https://jsonplaceholder.typicode.com/posts';

//     try {
//         const response = await fetch(url); // Hacemos fetch y guardamos la respuesta en una variable
//         const result = await response.json(); // Parseamos la información

//         result.forEach(element => {

//         });

//         mostrarProductos(result)

//     } catch (error) {
//         console.error(error);
//     }
// }

// =========Trabajando con Api Key =========


// const key = "live_nSvZ9aIbAgNwwSizK2nHMjK1OZVWxpWv5DT2zTuogpiNERZugemlE7MAIy6oVJpY"

// // fetch(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=${key}`)
// fetch(`https://api.thecatapi.com/v1/images/search?limit=20`, {
//     headers: {
//         "x-api-key": key
//     }
// })
//     .then((respuesta) => respuesta.json()) // Obtener la información y parsearla
//     .then((data) => {
//         console.log(data);

//         data.forEach(element => {
//             const div = document.createElement("div")

//             div.innerHTML = `
//             <img src="${element.url}" width="200">
//             `

//             contenedor.append(div)
//         });
//     })

// === Post / Enviar información

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(
//         {
//             title: "Post de prueba",
//             body: "Mensaje de prueba",
//             userId: 1
//         }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// }).then((response) => response.json())
//     .then((respuesta) => console.log(respuesta))


// == Put / Actualizar información
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify(
//         {
//             id: 1,
//             title: "Post de prueba",
//             body: "Mensaje de prueba",
//             userId: 1
//         }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// }).then((response) => response.json())
//     .then((respuesta) => console.log(respuesta))

console.log("Hola, trabajando con Node");
