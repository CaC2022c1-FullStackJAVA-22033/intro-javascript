
/*
let contador = 1;

while ( contador <= 5 ) {
    console.log(contador +" Hola mundo de los ciclos");
    contador = contador + 1;
}
console.log("Adiós");
*/

/*
let cont2 = 2;
while ( cont2 <= 20 ) {
    console.log(cont2);
    cont2 = cont2 + 2;
}*/
// 5 4 3 2 1 0
/*
let cont2 = 5;
while ( cont2 >= 0 ) {
    console.log(cont2);
    cont2 = cont2 - 1;
}*/

// cont = cont + 1  --> cont++
/*
let veces = 5;
for (let cont = 1; cont <= veces; cont++) {
    console.log(cont +" Hola mundo de los ciclos");
}
*/


/* 
 El usuario ingresa cuatro números. La computadora dice
 cuál fue el mayor (se supone único) y en que pos apareció
 Ejemplo --> Ingresa 4 7 5 3. "El mayor fue 7 en la pos 2"
*/
/*
let posMayor;
let mayor = Number.MIN_SAFE_INTEGER; // El menor valor posible
let numero;
let veces = 4;
for (let cont = 1; cont <= veces; cont++) {
    numero = parseInt(prompt(cont + ") Ingrese un numero"));
    if (numero > mayor) {
        mayor = numero;
        posMayor = cont;
    }
}
console.log("El mayor fue " + mayor + " en la pos. " + posMayor);
*/

/*
let numero;
let veces = 4;
let mayor = parseInt(prompt("Ingrese un numero"));
let posMayor = 1;
for (let cont = 2; cont <= veces; cont++) {
    numero = parseInt(prompt("Ingrese un numero"));
    if (numero > mayor) {
        mayor = numero;
        posMayor = cont;
    }
}
console.log("El mayor fue " + mayor + " en la pos. " + posMayor);
*/

// Con WHILE (Ciclo de 0..n)
let edad = parseInt(prompt("Ingresá tu edad (entre 1 y 120)"));
while ( !(edad >= 1 && edad <= 120) ) {
    edad = parseInt(prompt("ERROR. Ingresá tu edad (entre 1 y 120)"));
}
console.log("La edad fue validada. Es: " + edad);


// Con DO-WHILE (Ciclo de 1..n)
let genero;
do {
    genero = prompt("Ingresá tu género (M o F)").toUpperCase();
} while(!(genero == "M" || genero == "F"));
console.log("El género fue validado. Es: " + genero);


// Ley de De Morgan
// !(genero == "M" || genero == "F")
// genero != "M" && genero != "F"