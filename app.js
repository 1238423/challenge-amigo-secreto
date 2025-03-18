// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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
// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // 2. Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // 3. Crear una cadena de texto con todos los <li>
    let listaHTML = ""; // Variable para almacenar el HTML de la lista

    // 4. Iterar sobre el arreglo amigos usando un ciclo for
    for (let i = 0; i < amigos.length; i++) {
        // 5. Agregar cada nombre como un <li> a la cadena de texto
        listaHTML += `<li>${amigos[i]}</li>`;
    }

    // 6. Asignar la cadena de texto al innerHTML de la lista
    listaAmigos.innerHTML = listaHTML;
}