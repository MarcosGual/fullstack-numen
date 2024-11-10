const objetoNulo = {};

//this en el ámbito global
// se refiere al objeto Window
// (la ventana del navegador)
// console.log(this);

// this.nombre = "Ventana del navegador";
// this.tipo = "Objeto";

//imprimiendo this desde adentro de un objeto
const objeto = {
  nombre: "Contexto del Objeto 1",
  imprimir: function () {
    console.log(this.nombre);
  },
};

// objeto.imprimir();

// Llamando la función imprimir desde otro objeto
const objeto2 = {
  nombre: "Contexto del Objeto 2",
  imprimir: objeto.imprimir,
};

// objeto2.imprimir();

// Función constructora
// function Jedi(arma, poder) {
//   // Atributos o Propiedades
//   this.arma = arma;
//   this.poder = poder;
//   // Métodos
//   this.hablar = function () {
//     console.log("Que la fuerza te acompañe");
//   };
// }

// Jedi.prototype.susurrar = function () {
//   console.log("Usa la fuerza Luke");
// };

// Creación de instancias
// let jedi = new Jedi("Sable de Luz", "La fuerza");
// jedi.hablar();
// jedi.susurrar();

// Imprimimos en la consola
// console.log(jedi);

// const alumno1 = new Alumno("juancito", "pérez", 25, 112233);
// console.log(alumno1);
// const alumno2 = new Alumno("paula", "rodriguez", 28, 112244);
// console.log(alumno2);

// alumno1.saludar();

class Jedi {
  constructor(nombre, raza) {
    (this.nombre = nombre), (this.raza = raza);
  }

  saludar() {
    console.log("Hola! " + this.nombre);
  }
}

Jedi.prototype.susurrar = function () {
  console.log("Usa la fuerza, " + this.nombre);
};

let yoda = new Jedi("Yoda", "Desconocida");

console.log(Jedi)

yoda.susurrar()

// console.log(yoda)
// yoda.saludar();

//Clases y Herencia

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  presentarse() {
    return `
    nombre: ${this.nombre}
    apellido: ${this.apellido}
    edad: ${this.edad}
    `;
  }
}

//Herencia
class Alumno extends Persona {
  constructor(nombre, apellido, edad, legajo) {
    super(nombre, apellido, edad);
    this.legajo = legajo;
  }
  saludar() {
    return `Hola, soy el alumno ${this.nombre} ${this.apellido} y mi legajo es ${this.legajo}.`;
  }
}

const alumno1 = new Alumno("juancito", "pérez", 30, 123456);
console.log(alumno1.presentarse());
console.log(alumno1.saludar());
