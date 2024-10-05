// ====== Repaso =======
/*
const usuario = {
    nombre: "Marco",
    edad: 24,
    rol: "profesor"
}

console.log(usuario.nombre);
usuario.edad = 25
console.log(usuario.edad);


class Usuario {

    constructor(nombre, edad, rol) {
        this.nombre = nombre
        this.edad = edad
        this.rol = rol
    }

    mostrarNombre() {
        console.log(this.nombre);
    }

}

const usuario2 = new Usuario("Marco", 24, "Profesor")

console.log(usuario2);

usuario2.mostrarNombre()

// ===== Arrays ====

const arrayUno = ["Silla", "Mesa", "Placard", "Bicicleta"]

console.log(arrayUno);

console.log(arrayUno[3]);

for (let i = 0; i < arrayUno.length; i++) {
    console.log(arrayUno[i])
}

// ==== Metodos de Arrays ====

arrayUno.push("Botella") // Sumar al final
arrayUno.unshift("Piano") // Sumar al principio

arrayUno.pop()
arrayUno.shift()
console.log(arrayUno);

// Recorrer arrays y objetos

const arrayDos = [
    {
        nombre: "producto 1",
        precio: 8000
    },
    {
        nombre: "producto 2",
        precio: 100000
    },
    {
        nombre: "producto 3",
        precio: 1000
    }
]

for (let producto of arrayDos) {
    console.log(producto.precio, producto.nombre)
}
*/

// ========== Funciones de Orden Superior =============
/*
//                          Funcion
const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b

const realizarOperacion = (funcion) => {

    let num1 = parseInt(prompt("Ingrese el primer numero:"))
    let num2 = parseInt(prompt("Ingrese el segundo numero:"))


    let resultado = funcion(num1, num2)

    return resultado
}

console.log(realizarOperacion(multiplicar)) // funcion = multiplicar(num1, num2)
console.log(realizarOperacion(sumar)) // funcion =  sumar(num1,num2)

sumar() // Llamado a la funcion
sumar //

*/

// ====== Ejemplo ====

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let numeros2 = []
/*
for (let num of numeros) {

    numeros2.push(num * 2)

}
*/
/*
const numerosDobles = (array) => {

    let dobles = []

    for (let num of array) {
        dobles.push(num * 2)
    }

    return dobles

}

numeros2 = numerosDobles(numeros)
console.log(numeros2);

*/

/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const porCadaUno = (array, operacion) => {

    let arrayModificado = []

    // elm = 1
    // elm = 2
    // elm = 3
    for (let elm of array) {
        let resultado = operacion(elm)
        arrayModificado.push(resultado)
    }

    return arrayModificado
}

// const doble = (num) => num * 2
// const porDiez = (num) => num * 10

const arrayPorDos = porCadaUno(numeros, (num) => num * 2)
const arrayPorDiez = porCadaUno(numeros, (num) => num * 10)

console.log(arrayPorDos);
console.log(arrayPorDiez);

*/

// ========= Métodos para Arrays =========

// .forEach() .find() .filter() .some() .map() .reduce() .sort()

/*
// === .forEach()

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeros2 = []

// elm --> 1
// elm --> 2
// elm --> 3
// numeros.forEach((elm) => console.log(elm))

numeros.forEach((elm) => {
    numeros2.push(elm * 2)
})

console.log(numeros2);

let total = 0 // Acumulador 

numeros.forEach((elm) => {
    total += elm
})

console.log(total);
*/

// ==== Ejemplo For Each ====

class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
    }


    cumplirAnios() {
        this.edad++
    }
}

const mascotas = []

mascotas.push(new Mascota("Roberto", "perro", 3))
mascotas.push(new Mascota("Nala", "perro", 12))
mascotas.push(new Mascota("Jorge", "gato", 8))
mascotas.push(new Mascota("Morgana", "gato", 9))

mascotas.forEach(
    (mascotas) => {
        if (mascotas.nombre === "Morgana") {
            mascotas.cumplirAnios()
        }
    }
)
// console.log(mascotas);

// === Find ===

// console.log(mascotas.find((mascota) => {
//     return mascota.nombre === "Roberto"
// }));

const resultado = mascotas.find((mascota) => mascota.nombre === "Roberto")
const resultado2 = mascotas.find((elm) => elm.nombre === "Norberto")

// console.log(resultado);
// console.log(resultado2);



// ==== Filter ====

const arrayProductos = [
    { nombre: "Remera", precio: 10000 },
    { nombre: "Remera", precio: 20000 },
    { nombre: "Pantalon", precio: 15000 },
    { nombre: "Pantalon", precio: 17500 },
    { nombre: "Pantalon", precio: 20500 },
    { nombre: "Calzado", precio: 80000 },
    { nombre: "Calzado", precio: 90000 },
    { nombre: "Calzado", precio: 100000 },
    { nombre: "Buzo", precio: 50000 },
    { nombre: "Buzo", precio: 60000 },
    { nombre: "Buzo", precio: 45000 },
]

// .filter() genera un nuevo Array con los elementos que cumplan la condicion
// let busqueda = prompt("¿Que desea buscar?")

const filtrados = arrayProductos.filter((elm) => elm.nombre === "Buzo")
// const filtradoUsuario = arrayProductos.filter((elm) => elm.nombre === busqueda)

// console.log(filtrados);
// console.log(filtradoUsuario);

const filtradoPrecio = arrayProductos.filter((elm) => elm.precio <= 40000)
// console.log(filtradoPrecio);

const filtradoCombinado = arrayProductos.filter((elm) => elm.precio <= 40000 && elm.nombre === "Pantalon")
// console.log(filtradoCombinado);

const busquedaFiltrada = (busqueda, array) => array.filter((prod) => prod.nombre === busqueda)


const filtrado2 = busquedaFiltrada("Calzado", arrayProductos)
// console.log(filtrado2);

// Filtrar elementos por una primer letra.
// console.log(Array.from("Hola"));
// console.log(arrayProductos.filter((elm) => Array.from(elm.nombre)[0] === "C"))

// ==== Map | Array modificado ===
// Devuelve un nuevo Array teniendo en cuenta el return de mi funcion

// let numeros = [1, 2, 3, 4, 5]
// let dobles = numeros.map((elm) => elm + 5)

// console.log(dobles);

const mapeado = arrayProductos.map((elm) => elm.nombre)
// console.log(mapeado);


const nuevoStock = arrayProductos.map((elm, indice) => {

    return {
        id: indice + 1,
        nombre: elm.nombre,
        precio: elm.precio * 1.21
    }

})

// console.log(nuevoStock);

// El segundo parametro toma el indice del elemento dentro del Array
// arrayProductos.forEach((elm, indice) => {
//     console.log(elm, indice)
// })

// ===== Reduce - Recorre un array y devuelve un valor final

// let totalProductos = 0
// arrayProductos.forEach((elm) => totalProductos += elm.precio)

// console.log(totalProductos);

// let totalProductos = arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0)

let costoEnvio = 5000
let totalProductos = arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, costoEnvio) // acumulador comienza en 5000

// ===== Sort - Ordenar Elementos del Array

// let numeros = [67, 18, 83, 13, 17, 18, 55, 23, 64, 28]

// numeros.sort((a, b) => a - b) // Menor a mayor
// numeros.sort((a, b) => b - a) // Mayor a menor

/* 
 Primera iteración--> a = 28 y b = 64 (64 - 23 = 36) ---> Si da positivo, deja como está
 Segunda iteración --> a = 64 y b = 23 (23-63 = -41) ---> Si da negativo, entonces cambia de lugar
*/

// arrayProductos.sort((a, b) => b.precio - a.precio)

arrayProductos.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return -1 // return 1
    }
    if (a.nombre < b.nombre) {
        return 1 // return -1
    }
    return 0
})

// console.log(arrayProductos);


// ==== Some ====

// console.log(arrayProductos.some((elm) => elm.nombre.toLowerCase() == "calzado"));

// let personas = [
//     { nombre: "Manuel", edad: 28 },
//     { nombre: "Sofia", edad: 18 },
//     { nombre: "Adriana", edad: 63 }
// ]

// if (personas.some((elm) => elm.edad < 18)) {
//     console.log("Hay un menor de edad en el grupo, usted no puede ingresar");
// } else {
//     console.log("Usted puede ingresar");
// }

// ====== Math() ===

// Math.max() ---> Devuelve numero maximo
// Math.min() ---> Devuelve el numero mas pequeño

// console.log(Math.max(1, 2, 3, 5, 6, 7));
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7));

// let numeros = [63, 58, 24, 3, 812]


// NaN --> Not A Number
// let max = Math.max(numeros)
// let min = Math.min(numeros)
// let max = Math.max(...numeros)
// let min = Math.min(...numeros)

// console.log(max, min);

// ===== Spread Operator ====

let ultimos = [6, 7, 8, 9, 10]
let primeros = [1, 2, 3, 4, 5, ...ultimos]

// console.log(primeros);

let frutas = ["Naranja", "Manzana", "Pera"]
let verduras = ["Lechuga", "Tomate", "Cebolla"]

let productos = [frutas, verduras]

productos = [...frutas, ...verduras]
// console.log(productos);

// ====== .ceil() - .floor()  | Utilizar con numeros decimales ====

// .ceil() ---> (Techo) Redondear para arriba
// .floor() ---> (Piso) Redondear para abajo

// console.log(Math.ceil(8.1));
// console.log(Math.floor(8.1));

// console.log(Math.ceil(8.99999999));
// console.log(Math.floor(8.99999999));

// console.log(Math.ceil("8.5")); // --> Retorna 9


// ====== .round() ===
// Redondea en base al primer decimal

// console.log(Math.round(9.9));
// console.log(Math.round(5.5));
// console.log(Math.round(-5.5)); // --- Redondea al numero mas cercano a 0


// ==== .abs() ===

// console.log(Math.abs(5));
// console.log(Math.abs(-5));

// ==== .random() ===

// Retorna un valor entre 0 y 1, sin llegar nunca al 1
// console.log(Math.random());

// console.log(Math.round(Math.random() * 10)); // 1 digito
// console.log(Math.round(Math.random() * 100)); // 2 digitos
// console.log(Math.round(Math.random() * 1000)); // 3 digitos


// console.log(Math.round(Math.random() * 3));

// let max = 50
// let min = 10

// console.log(Math.round(Math.random() * (max - min) + min)); // Formula para establecer numeros al azar en un rango específico


// ========== Date ===========

let fecha = new Date()

// console.log(fecha);

// console.log(new Date(1000)); // Comienzan desde 1 de Enero de 1970 y le agrega 1000ms

// año, mes, dia, hora, minutos, segundos
const date = new Date(2018, 2, 30, 23, 14, 30)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// console.log(date);

// console.log(new Date(2024, 9)); // Cuidado, funciona como array ["en", "fb", "mz"]

const date2 = new Date("2018/02/28 23:14:30")

// console.log(date2);

// ====== Calculos con Fechas =====

let ahora = new Date()

let navidad = new Date(2024, 11, 25)

// console.log(ahora, navidad);

// console.log(navidad - ahora);

// Lo queremos dias
// de Ms a S ->  division en 1000
// de S a Min ->  Dividir en 60
// de Min a H -> Dividir en 60
// de Hs a Dias -> Dividir en 24


const miliAMin = 60 * 1000
const miliAHora = 60 * 60 * 1000
const miliADia = 24 * 60 * 60 * 1000

let diferencia = (navidad - ahora) / 1000 / 60 / 60 / 24
// console.log(diferencia);

const calcularDiferencia = (fechaUno, fechaDos, formato) => {

    let diferencia = fechaUno - fechaDos
    let resultado = 0

    switch (formato) {
        case "dias":
            resultado = diferencia / miliADia
            console.log("La diferencia es de: " + Math.round(resultado) + " dias");
            break
        case "hora":
            resultado = diferencia / miliAHora
            console.log("La diferencia es de: " + Math.round(resultado) + " horas");
            break
        case "minutos":
            resultado = diferencia / miliAMin
            console.log("La diferencia es de: " + Math.round(resultado) + " minutos");
            break
    }

}

// calcularDiferencia(navidad, ahora, "dias");
// calcularDiferencia(navidad, ahora, "hora");
// calcularDiferencia(navidad, ahora, "minutos");

// ===== Acceder a fechas ===

// console.log(fecha.month);

// console.log(fecha.getDay()); // Devuelve el día de la semana [ "dom", "lun" ]
// console.log(fecha.getDate()) // Día del mes
// console.log(fecha.getMonth()) // Devuelve el mes ["en", "feb", "marzo"]
// console.log(fecha.getFullYear()); // Devuelve el año
// console.log(fecha.getHours());



const medicos = [
    { id: 1, nombre: "Dra. Gómez", especialidad: "Cardiología" },
    { id: 2, nombre: "Dr. Pérez", especialidad: "Dermatología" },
    { id: 3, nombre: "Dra. Rodríguez", especialidad: "Neurología" }
];

const pacientes = [
    { id: 101, nombre: "Juan Pérez" },
    { id: 102, nombre: "Ana López" },
    { id: 103, nombre: "Carlos Sánchez" }
];


const turnos = []

const reservarCitas = (pacienteId, medicoId, fecha) => {

    const paciente = pacientes.find((p) => p.id === pacienteId)
    const medico = medicos.find((m) => m.id === medicoId)

    if (paciente && medico) {

        const turno = {
            paciente: paciente.nombre,
            medico: medico.nombre,
            especialidad: medico.especialidad,
            fecha: new Date(fecha)
        }

        turnos.push(turno)
        console.log(`Turno reservado: ${paciente.nombre} con ${medico.nombre} el ${turno.fecha}`);


    } else {
        console.log("Paciente o médico no valido");

    }

}
reservarCitas(102, 3, "2018/02/28 23:14:30")

const cancelarCita = (pacienteId, medicoId) => {
    const paciente = pacientes.find((p) => p.id === pacienteId)
    const medico = medicos.find((m) => m.id === medicoId)

    if (paciente && medico) {

        const index = turnos.findIndex((t) => t.paciente === paciente.nombre && t.medico === medico.nombre)

        turnos.splice(index, 1)
        console.log(turnos);

    }
}

cancelarCita(102, 3)