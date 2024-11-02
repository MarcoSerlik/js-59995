const formularioTarea = document.getElementById("formularioTarea")
const listaTareas = document.getElementById("listaTareas")


const alternarCompletada = (id) => {
    const tareasGuardadas = localStorage.getItem("tareas");
    let tareas = [];
    if (tareasGuardadas !== null) {
        tareas = JSON.parse(tareasGuardadas);
    }

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            tareas[i].completada = !tareas[i].completada
            break
        }
    }

    guardarTareas(tareas)
    actualizarListaTareas()

}


const eliminarTarea = (id) => {

    const tareasGuardadas = localStorage.getItem("tareas")
    let tareas = [];
    if (tareasGuardadas !== null) {
        tareas = JSON.parse(tareasGuardadas);
    }

    // Borrar un elemento del array por exclusión
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id)

    guardarTareas(nuevasTareas)
    actualizarListaTareas()
}

const editarTarea = (id) => {
    const tareasGuardadas = localStorage.getItem("tareas");
    let tareas = [];
    if (tareasGuardadas !== null) {
        tareas = JSON.parse(tareasGuardadas);
    }

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {

            const nuevoTitulo = prompt("Editar título:")
            const nuevaDescripcion = prompt("Editar decripción:")

            tareas[i].titulo = nuevoTitulo
            tareas[i].descripcion = nuevaDescripcion

            break
        }
    }

    guardarTareas(tareas)
    actualizarListaTareas()
}

// Actualizar Lista de Tareas
const actualizarListaTareas = () => {
    listaTareas.innerHTML = ""
    cargarTareas()
}


// Cargar Tareas en el DOM
const cargarTareas = () => {

    const tareasGuardadas = localStorage.getItem("tareas")
    let tareas = []

    if (tareasGuardadas !== null) {
        tareas = JSON.parse(tareasGuardadas)
    }

    for (let i = 0; i < tareas.length; i++) {
        mostrarTarea(tareas[i])
    }
}

// Funcion encargada de setear el array de Tareas en el LocalStorage
const guardarTareas = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
}

// Funcion encargada de generar un nuevo elemento en el DOM a partir de un objeto
const mostrarTarea = (tarea) => {

    const elementoTarea = document.createElement("li")
    elementoTarea.classList.add("tarea")

    if (tarea.completada === true) {
        elementoTarea.classList.add("completada")
    }

    elementoTarea.innerHTML = `
    <span class="texto-tarea">
        <strong>${tarea.titulo}</strong>: ${tarea.descripcion}
    </span>
    <div>
        <button class="marcar-completa" onclick="alternarCompletada('${tarea.id}')">Marcar</button>
        <button class="editar" onclick="editarTarea('${tarea.id}')">Editar</button>
        <button class="eliminar" onclick="eliminarTarea('${tarea.id}')">Eliminar</button>
    </div>
    `

    listaTareas.appendChild(elementoTarea)

}

// Funcion encargada de generar una nueva tarea en el LocalStorage y en el DOM
const agregarTarea = (evento) => {

    evento.preventDefault()

    const titulo = document.getElementById("tituloTarea").value
    const descripcion = document.getElementById("descripcionTarea").value

    const nuevaTarea = {
        id: Date.now().toString(),
        titulo: titulo,
        descripcion: descripcion,
        completada: false
    }

    mostrarTarea(nuevaTarea)

    const tareasGuardadas = localStorage.getItem("tareas") // Si no existe el elemento devuelve un null
    let tareas = []

    if (tareasGuardadas !== null) {
        tareas = JSON.parse(tareasGuardadas)
    }

    tareas.push(nuevaTarea)
    guardarTareas(tareas)

    console.log(tareas);

    formularioTarea.reset()
}

formularioTarea.addEventListener("submit", agregarTarea)
document.addEventListener("DOMContentLoaded", cargarTareas)