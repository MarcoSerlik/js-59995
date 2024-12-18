const contenedorCarrito = document.getElementById("contenedor-carrito")
const totalCarrito = document.getElementById("total-carrito")
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((elm) => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <h3>${elm.nombre}</h3>
            <p>$${elm.precio}</p>
            <p>Cantidad: <span id="cantidad${elm.id}">${elm.cantidad}</span></p>
            <button id="decrementar${elm.id}">-</button>
            <button id="incrementar${elm.id}">+</button>
            <button id="borrar${elm.id}">Borrar</button>
        `;

        contenedorCarrito.append(div);

        // Botón para disminuir la cantidad
        const botonDecrementar = document.getElementById(`decrementar${elm.id}`);
        botonDecrementar.addEventListener("click", () => {
            if (elm.cantidad > 1) {
                elm.cantidad--;
                guardarCarrito();
                actualizarCarrito();
            }
        });

        // Botón para aumentar la cantidad
        const botonIncrementar = document.getElementById(`incrementar${elm.id}`);
        botonIncrementar.addEventListener("click", () => {
            elm.cantidad++;
            guardarCarrito();
            actualizarCarrito();
        });

        // Botón para borrar el producto
        const botonBorrar = document.getElementById(`borrar${elm.id}`);
        botonBorrar.addEventListener("click", () => {
            borrarDelCarrito(elm.id);
            actualizarCarrito();
        });
    });

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