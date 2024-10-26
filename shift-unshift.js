// Inicializa la lista de tareas vacía
let listaTareas = [];

// Función para mostrar la lista de tareas actual
function mostrarLista() {
    console.log("Lista de tareas actual:", listaTareas);
}

// Función para agregar una tarea al principio de la lista
function agregarTarea() {
    const tarea = prompt("Ingrese una nueva tarea:");
    listaTareas.unshift(tarea);  // Agrega la tarea al principio
    mostrarLista();
}

// Función para eliminar la tarea más antigua
function eliminarTareaAntigua() {
    if (listaTareas.length === 0) {
        console.log("La lista de tareas está vacía, no hay tareas para eliminar.");
    } else {
        listaTareas.shift();  // Elimina la tarea más antigua (primer elemento)
        mostrarLista();
    }
}

// Menú principal
function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar nueva tarea\n2. Eliminar tarea más antigua\n3. Salir");
        switch(opcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                eliminarTareaAntigua();
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
