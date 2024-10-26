// Inicializa el array vacío
let array = [];

// Función para mostrar el array actual
function mostrarArray() {
    console.log("Array actual:", array);
}

// Función para agregar un elemento al array
function agregarElemento() {
    const elemento = prompt("Ingrese un elemento para agregar al array:");
    array.push(elemento);
    mostrarArray();
}

// Función para eliminar el último elemento del array
function eliminarUltimoElemento() {
    if (array.length === 0) {
        console.log("El array está vacío, no hay elementos para eliminar.");
    } else {
        array.pop();
        mostrarArray();
    }
}

// Menú principal
function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar elemento\n2. Eliminar último elemento\n3. Salir");
        switch(opcion) {
            case "1":
                agregarElemento();
                break;
            case "2":
                eliminarUltimoElemento();
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
