const carrito = JSON.parse(localStorage.getItem("carrito")) || []
const contenedorProductos = document.getElementById("contenedor-productos")
const botonOferta = document.getElementById("oferta")
const botonTodos = document.getElementById("todos")
const barraBusqueda = document.getElementById("barra-busqueda"); // Campo de entrada para la búsqueda

const renderizarProductos = (array) => {
    // prd = cada objeto de mi array 

    contenedorProductos.innerHTML = ""

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

botonOferta.addEventListener("click", () => {
    const productosOferta = stockProductos.filter(prd => prd.oferta === true);
    renderizarProductos(productosOferta)
});

botonTodos.addEventListener("click", () => {
    renderizarProductos(stockProductos)
});

// Función para filtrar productos por nombre
const filtrarPorNombre = () => {
    const textoBusqueda = barraBusqueda.value.toLowerCase(); // Convertir a minúsculas para hacer la búsqueda case-insensitive

    const productosFiltrados = stockProductos.filter(prd =>
        prd.nombre.toLowerCase().includes(textoBusqueda) // Filtrar por coincidencia parcial
    );

    renderizarProductos(productosFiltrados); // Renderizar productos que coinciden con la búsqueda
};

barraBusqueda.addEventListener("input", filtrarPorNombre);

renderizarProductos(stockProductos)