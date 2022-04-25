/*
Valores lógicos: true o false (Sin comillas)

Operadores relacionales:
< <= > >= == !=

2 > 2 se evalúa como false
3 > 2 se evalúa como true
-----------------------------
let x = 2;

console.log("Con ==");
// Compara solo valor
console.log(x == 2); // true
console.log(x == "2"); // true

console.log("Con ===");
// Compara valor y tipo
console.log(x === 2); // true
console.log(x === "2"); // false
--------------------------------------
const EDAD_MIN = 18;
let edad = parseInt( prompt("¿Tu edad?") );
if (edad >= EDAD_MIN) {
    console.log("Sos mayor de edad");
} else {
    console.log("Sos menor de edad");
}
console.log("Adiós");
*/

/*¡Ejercicio!
    Dada una edad y un género ("F", "M"), indicar
    si la persona está en edad de jubilarse.
    (F > 60 años ó M > 65 años)
*/

// VERSIÓN SIN OPERADORES LÓGICOS
/*
let edad = parseInt(prompt("¿Tu edad?"));
let genero = prompt("¿Tu género (F ó M)?");
if (genero.toUpperCase() == "M") {
    if (edad >= 65) {
        console.log("Está en edad de jubilarse");
    } else {
        console.log("NO está en edad de jubilarse");
    }
} else if (genero.toUpperCase() == "F") {
    if (edad >= 60) {
        console.log("Está en edad de jubilarse");
    } else {
        console.log("NO está en edad de jubilarse");
    }
} else {
    console.log("Género inválido");
}
*/

// VERSIÓN CON OPERADORES LÓGICOS
/*
let edad = parseInt(prompt("¿Tu edad?"));
let genero = prompt("¿Tu género (F ó M)?");
genero = genero.toUpperCase();

if ((genero == "M" && edad >= 65) || (genero == "F" && edad >= 60)) {
    console.log("Está en edad de jubilarse");
} else {
    console.log("NO está en edad de jubilarse");
}
*/

/*
    (cantHijos > 1 ? "s" : "") // Operador ternario
    (cond ? valor_si_true : valor_si_false)

    let cantHijos = parseInt(prompt("¿Cuántos hijos tenés?"));
    console.log("Tenés " + cantHijos + " hijo" + (cantHijos != 1 ? "s" : "") );
*/

let digitoRomano = prompt("Ingresá un dígito romano (I, V, X, L, C, D, M)").toUpperCase();

/* SIN SWITCH ES POSIBLE PERO... ES MUY LARGO
if (digitoRomano == "I") {
    console.log(1);
} else if (digitoRomano == "V") {
    console.log(5);
} ...
*/
switch(digitoRomano) {
    case "I":
        console.log(1);
        break;
    case "V":
        console.log(5);
        break;
    case "X":
        console.log(10);
        break;
    default:
        console.log("Eso no es un dígito romano");
}

