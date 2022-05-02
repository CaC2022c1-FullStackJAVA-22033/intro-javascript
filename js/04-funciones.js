
/*
 Para invocar una función, hay que colocar su nombre y los paréntesis
 de forma obligatoria. Entre ellos van (si hacen falta) los argumentos.
 La función puede o no retornar un valor.

 let retorno = nombre_func( args );

 Ejemplo:
 let nombre = prompt("Ingrese un nombre");
 let edad = parseInt( prompt("Ingrese una edad") )
*/


/*
saludar();
mostrarSaltoDeLinea();
saludar("María");
mostrarSaltoDeLinea();
saludar("Juan", "Carlos");
*/


// Ejemplo de función que retorna pero no recibe parámetros
// Math.random() viene con JavaScript...
/*
console.log( Math.random() );
let unRandom = Math.random();
console.log(unRandom)
*/


/*
let edad = leerEnteroEntre("Ingrese una edad", 1, 120);
console.log("Obtuvimos un " + edad);
let notaExamen = leerEnteroEntre("Ingrese una nota", 1, 10);
console.log("Obtuvimos un " + notaExamen);
let tempEnAlaska = leerEnteroEntre("Ingrese una temperatura para Alaska", -50, 0);
console.log("Obtuvimos un " + tempEnAlaska);
*/


let numero = leerEnteroEntre("Ingrese un numero positivo", 1, 10000000);
if ( esPar(numero) ) {
    console.log("El número es par");
} else {
    console.log("El número es impar")
}