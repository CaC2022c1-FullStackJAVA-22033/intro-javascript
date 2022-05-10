/*
    Para obtener elementos del DOM, podemos usar:

    document.getElementById("algunIDValido"); // Retorna la referencia hacia el elemento o null si no existe
    document.getElementsByClassName("algunaClase"); // Retorna una colección de elementos que tengan esa clase aplicada
    document.getElementsByTagName("algunTag"); // Retorna una colección de elementos que sean de ese tipo
    document.querySelector("unSelectorDeCSS")
    document.querySelectorAll("unSelectorDeCSS")
*/

/*
    Qué podemos modificar de los elementos:

    let algunElemento = document.getElementById("algunIDValido");
    algunElemento.innerHTML = "Nuevo valor"; // Modifica el contenido del elemento
    document.getElementById("p2").className; // Retorna la lista de clases (como cadena)
    document.getElementById("p2").classList; // Retorna la lista de clases (como colección)
    Métodos para la lista de clases:
        - add
        - remove
        - replace
        - length
*/


let areaDeTexto = document.getElementById("mensaje");

function validar() {
    if (areaDeTexto.value.length < 50) {
        console.log("El texto mide menos de 50");
    } else {
        console.log("El texto mide más de 50");
    }
}
