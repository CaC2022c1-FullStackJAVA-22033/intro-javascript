const inputNombre = document.getElementById("fname");
const inputApellido = document.getElementById("lname");
const tabla = document.getElementById("laTabla");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const personas = [];

function handleAdd (evt) {
    // Obtener datos de los inputs:
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;

    const unaFila = document.createElement("tr");

    const dato1 = document.createElement("td");
    dato1.innerHTML = personas.length + 1;
    const dato2 = document.createElement("td");
    dato2.innerHTML = nombre;
    const dato3 = document.createElement("td");
    dato3.innerHTML = apellido;

    unaFila.appendChild(dato1);
    unaFila.appendChild(dato2);
    unaFila.appendChild(dato3);

    personas.push(nombre + " " + apellido);

    tabla.appendChild(unaFila);
}

function handleRemove (evt) {
    // Para hacer de tarea...
}

btnAgregar.onclick = handleAdd;
btnQuitar.onclick = handleRemove;
