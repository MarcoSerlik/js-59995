const carrito = JSON.parse(localStorage.getItem("carrito")) || []
const contenedorProductos = document.getElementById("contenedor-productos")
const botonOfertas = document.getElementById("ofertas")
const botonTodos = document.getElementById("todos")
const barraBusqueda = document.getElementById("busqueda")

const renderizarProductos = (array) => {

    contenedorProductos.innerHTML = ""

    // prd = cada objeto de mi array 
    array.forEach((prd) => {

        const div = document.createElement("div")

        // div.className = "producto"
        div.classList.add("producto")

        div.innerHTML = `
        <h3>${prd.nombre}</h3>
        <p>$${prd.precio}</p>
        <img src="${prd.img}">
        <button id="agregar${prd.id}">Comprar</button>
        `

        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${prd.id}`)
        boton.addEventListener("click", () => {
            agregarCarrito(prd.id)
        })
    })
}

const agregarCarrito = (id) => {

    // Recorrer el Array y encontrar un primer elemento que coincida con la comparación que establecemos
    const producto = stockProductos.find((prod) => prod.id === id)

    // método some 
    if (carrito.some((prd) => prd.id === id)) {

        // Actualizar la cantidad de ese elemento en el carrito
        // Encontrar el indice de mi producto en el carrito
        const index = carrito.findIndex((prd) => prd.id === id)
        carrito[index].cantidad++

    } else {
        producto.cantidad = 1
        carrito.push(producto)
    }

    guardarCarrito()
}

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

botonOfertas.addEventListener("click", () => {
    const productosOfertas = stockProductos.filter((prd) => prd.oferta === true)

    renderizarProductos(productosOfertas)
})

botonTodos.addEventListener("click", () => {
    renderizarProductos(stockProductos)
})

barraBusqueda.addEventListener("input", () => {
    const textoBusqueda = barraBusqueda.value.toLowerCase()

    const productosFiltrados = stockProductos.filter(prd => prd.nombre.toLowerCase().includes(textoBusqueda))

    renderizarProductos(productosFiltrados)
})


renderizarProductos(stockProductos)