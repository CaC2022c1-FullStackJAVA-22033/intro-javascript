/*
    Para definir una función:
        function nombre_func ( param1, param2, paramN ) {
            // Instrucciones...
        }
    
    Si la función retorna un valor, debe ir al final la 
    cláusula 'return' con el valor a retornar
*/

// Función que no retorna, ni recibe parámetros
function mostrarSaltoDeLinea () {
    console.log("\n"); // Imprime un salto de línea;
}

// Función que no retorna, y recibe un parámetro
function saludar( nom ) {
    console.log("Hola " + nom);
}

// Función que retorne, y reciba parámetros
function leerEnteroEntre(mensaje, minimo, maximo) {
    let entero = parseInt(prompt(mensaje));
    while (entero < minimo || entero > maximo) {
        entero = parseInt(prompt("ERROR. " + mensaje));
    }
    return entero;
}

// Una función que mejora la legibilidad del código
function esPar(num) {
    return num % 2 == 0;
}

function anioActual() {
    return new Date().getFullYear();
}