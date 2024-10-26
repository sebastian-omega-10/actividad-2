// Array inicial de contactos
let contactos = [];

// Función para mostrar la lista de contactos actual
function mostrarContactos() {
    console.log("Lista de contactos actual:", contactos);
}

// Función para agregar un contacto al final de la lista
function agregarContactoAlFinal() {
    const nombre = prompt("Ingrese el nombre del contacto:");
    contactos.push(nombre);  // Agrega el contacto al final de la lista
    mostrarContactos();
}

// Función para agregar un contacto al inicio de la lista
function agregarContactoAlInicio() {
    const nombre = prompt("Ingrese el nombre del contacto:");
    contactos.unshift(nombre);  // Agrega el contacto al inicio de la lista
    mostrarContactos();
}

// Función para eliminar el último contacto
function eliminarUltimoContacto() {
    if (contactos.length === 0) {
        console.log("No hay contactos para eliminar.");
    } else {
        contactos.pop();  // Elimina el último contacto
        mostrarContactos();
    }
}

// Función para eliminar el primer contacto
function eliminarPrimerContacto() {
    if (contactos.length === 0) {
        console.log("No hay contactos para eliminar.");
    } else {
        contactos.shift();  // Elimina el primer contacto
        mostrarContactos();
    }
}

// Función para eliminar un contacto en una posición específica
function eliminarContactoEnPosicion() {
    const posicion = parseInt(prompt("Ingrese la posición del contacto a eliminar:"));
    if (posicion >= 0 && posicion < contactos.length) {
        contactos.splice(posicion, 1);  // Elimina el contacto en la posición especificada
        mostrarContactos();
    } else {
        console.log("Posición no válida.");
    }
}

// Función para listar un rango de contactos
function listarRangoDeContactos() {
    const inicio = parseInt(prompt("Ingrese el índice de inicio del rango:"));
    const fin = parseInt(prompt("Ingrese el índice final del rango (no incluido en el nuevo array):"));
    if (inicio >= 0 && fin <= contactos.length && inicio < fin) {
        const rangoContactos = contactos.slice(inicio, fin);  // Crea un nuevo array con el rango seleccionado
        console.log("Rango de contactos seleccionados:", rangoContactos);
    } else {
        console.log("Rango de índices no válido.");
    }
}

// Menú principal
function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar contacto al final\n2. Agregar contacto al inicio\n3. Eliminar último contacto\n4. Eliminar primer contacto\n5. Eliminar contacto en posición específica\n6. Listar rango de contactos\n7. Salir");
        switch(opcion) {
            case "1":
                agregarContactoAlFinal();
                break;
            case "2":
                agregarContactoAlInicio();
                break;
            case "3":
                eliminarUltimoContacto();
                break;
            case "4":
                eliminarPrimerContacto();
                break;
            case "5":
                eliminarContactoEnPosicion();
                break;
            case "6":
                listarRangoDeContactos();
                break;
            case "7":
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while(opcion !== "7");
}

// Inicia el programa
menu();
