// Array inicial con nombres de frutas
const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa", "Uva", "Naranja", "Mango"];

// Función para mostrar el array original y el nuevo array creado
function mostrarArrays(arrayOriginal, arrayNuevo) {
    console.log("Array original:", arrayOriginal);
    console.log("Nuevo array (elementos seleccionados):", arrayNuevo);
}

// Función para crear un nuevo array a partir de un rango de índices
function crearArrayConSlice() {
    const inicio = parseInt(prompt("Ingrese el índice de inicio del rango:"));
    const fin = parseInt(prompt("Ingrese el índice final del rango (no incluido en el nuevo array):"));

    if (inicio >= 0 && fin <= frutas.length && inicio < fin) {
        const nuevoArray = frutas.slice(inicio, fin);  // Crea un nuevo array con el rango seleccionado
        mostrarArrays(frutas, nuevoArray);
    } else {
        console.log("Rango de índices no válido.");
    }
}

// Llamada a la función para crear el nuevo array
crearArrayConSlice();
