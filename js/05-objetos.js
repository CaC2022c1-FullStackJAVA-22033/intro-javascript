let v1 = "Carlos";
let v2 = 50;
let v3 = 3.14;
let v4 = false;
let v5 = {
    nombre: "Carlos",
    apellido: "Cimino",
    anioNacimiento: 1993,
    tieneHijos: false,
    domicilio: {
        calle: "Falsa",
        altura: 123,
        barrio: "Villa Buen Código",
        comoCadena: function() {
            return this.calle + " " + this.altura + ", " + this.barrio;
        }
    },
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    },
    edad: function() {
        return anioActual() - this.anioNacimiento;
    },
    presentarse: function() {
        console.log("Hola, soy " + this.nombreCompleto() + " y tengo " + this.edad() + " años y vivo en " + this.domicilio.comoCadena());
    }
};



console.log( v5.nombreCompleto() );
console.log( v5.edad() );
v5.presentarse();
