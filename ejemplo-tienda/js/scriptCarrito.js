const contenedorCarrito = document.getElementById("contenedor-carrito")
const totalCarrito = document.getElementById("total-carrito")
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((elm) => {

        const div = document.createElement("div")
        div.classList.add("producto")

        div.innerHTML = `
        <h3>${elm.nombre}</h3>
        <p>$${elm.precio}</p>
        <p>Cantidad: ${elm.cantidad}</p>
        <button id="borrar${elm.id}">Borrar</button>
        `
        contenedorCarrito.append(div)
        const boton = document.getElementById(`borrar${elm.id}`)
        boton.addEventListener("click", () => {
            borrarDelCarrito(elm.id)
            actualizarCarrito()
        })
    })

    totalCarrito.textContent = `Total: $${carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)}`

}

const borrarDelCarrito = (id) => {
    const index = carrito.findIndex((prd) => prd.id === id)
    carrito.splice(index, 1)
    guardarCarrito()
}

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

actualizarCarrito()