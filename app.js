// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y final

    // 2. Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre."); // Mostrar alerta si el campo está vacío
        return; // Salir de la función si no hay un nombre válido
    }

    // 3. Actualizar el array de amigos
    amigos.push(nombreAmigo); // Añadir el nombre al array

    // 4. Limpiar el campo de entrada
    inputAmigo.value = ""; // Restablecer el campo de texto a una cadena vacía

    // 5. Actualizar la lista visual (opcional, si ya tienes una función para esto)
    actualizarListaAmigos();
}