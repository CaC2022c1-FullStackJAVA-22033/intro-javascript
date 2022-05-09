let areaDeTexto = document.getElementById("mensaje");


function validar() {
    if (areaDeTexto.value.length < 50) {
        console.log("El texto mide menos de 50");
    } else {
        console.log("El texto mide más de 50");
    }
}
