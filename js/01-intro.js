/*
    Salidas: Muestran algo al usuario
    a través de la consola con la
    instrucción console.log(...)

    let edad; Declara la variable edad

    parseInt("560") devuelve 560 como entero
    parseFloat("1.82") devuelve 1.82 como float

    prompt("Pone un dato") retorna el dato del usuario
    como CADENA
*/

const anioActual = new Date().getFullYear();
let nombre = prompt("¿Cuál es tu nombre?");
let anioNac = prompt("¿En qué año naciste?");

anioNac = parseInt(anioNac)

let edad = anioActual - anioNac;

console.log("Hola " + nombre + "!!!")
console.log("Tu edad es " + edad + " o " + (edad - 1) + " años")
