// Inicializa el array con algunos elementos de ejemplo
let array = ["Elemento1", "Elemento2", "Elemento3", "Elemento4"];

// Función para mostrar el array actual
function mostrarArray() {
    console.log("Array actual:", array);
}

// Función para eliminar elementos desde una posición específica
function eliminarElementos() {
    const posicion = parseInt(prompt("Ingrese la posición desde donde quiere eliminar elementos:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad de elementos a eliminar:"));

    if (posicion >= 0 && posicion < array.length && cantidad > 0) {
        array.splice(posicion, cantidad);  // Elimina elementos desde la posición especificada
        mostrarArray();
    } else {
        console.log("Posición o cantidad no válida.");
    }
}

// Función para agregar elementos en una posición específica
function agregarElementos() {
    const posicion = parseInt(prompt("Ingrese la posición donde quiere agregar elementos:"));
    const nuevosElementos = prompt("Ingrese los elementos a agregar, separados por comas:");

    if (posicion >= 0 && posicion <= array.length) {
        const elementosArray = nuevosElementos.split(",");  // Divide los elementos ingresados por comas
        array.splice(posicion, 0, ...elementosArray);  // Agrega los nuevos elementos en la posición especificada
        mostrarArray();
    } else {
        console.log("Posición no válida.");
    }
}

// Menú principal
function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Eliminar elementos\n2. Agregar elementos\n3. Salir");
        switch(opcion) {
            case "1":
                eliminarElementos();
                break;
            case "2":
                agregarElementos();
                break;
            case "3":
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while(opcion !== "3");
}

// Inicia el programa
menu();
