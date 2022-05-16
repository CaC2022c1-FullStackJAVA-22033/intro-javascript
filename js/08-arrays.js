
const cars = ["Saab", "Volvo", "BMW", "Ford"];

/*
console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[-1])
*/

cars[1] = "Fiat"

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element);
}

cars.push("Peugeot") // Agrega "Peugeot" al final

const borrado = cars.pop(); // Borra el último y lo retorna