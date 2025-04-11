"use strict";
// DECLARACIÓN DE TIPOS
// EXPLÍCITA
let id = 100;
let firstName = "Daniel";
let isAlive = true;
let ids = [id, 200, 300, 500];
let names = [firstName, 'Carlos', 'Patricia'];
let cualquierCosa = [firstName, id, isAlive, null, undefined, {}];
//INFERENCIA DE TIPOS
let numero = 10; //en la inicialización TS infiere el tipo
numero = -20;
let apellido = "Domínguez";
apellido = "Pérez";
//TIPO DINÁMICO: ANY (CUALQUIERA)
let cualquiera; //funciona como cualquier variable de JS
//UNIÓN DE TIPOS
let age = 18;
//OBJETOS
const persona1 = {
    nombre: firstName,
    apellido: "Pérez",
    edad: 30,
    esProgramador: true,
};
let alumno = {
    nombre: firstName,
    apellido: "Pérez",
    edad: 30,
    esProgramador: true,
    legajo: 12010100
};
// Enumeraciones --> "enum"
var DiasDeLaSemana;
(function (DiasDeLaSemana) {
    DiasDeLaSemana["Lunes"] = "Lunes";
    DiasDeLaSemana["Martes"] = "Martes";
    DiasDeLaSemana["Miercoles"] = "Mi\u00E9rcoles";
    DiasDeLaSemana["Jueves"] = "Jueves";
    DiasDeLaSemana["Viernes"] = "Viernes";
    DiasDeLaSemana["Sabado"] = "S\u00E1bado";
    DiasDeLaSemana["Domingo"] = "Domingo";
})(DiasDeLaSemana || (DiasDeLaSemana = {}));
let dia = DiasDeLaSemana.Lunes;
// FUNCIONES
const saludar = (nombre) => `Hola, ${nombre}!`;
const suma = (num1, num2) => "La suma es de: " + (num1 + num2);
class Vehiculo {
    constructor(patente, tieneAc, marca, modelo) {
        this.patente = patente;
        this.tieneAC = tieneAc;
        this.marca = marca;
        this.modelo = modelo;
    }
    //GETTERS y SETTERS
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
}
let vehiculo1 = new Vehiculo(100100, true, "Renaul", "Clío");
vehiculo1.getMarca();
vehiculo1.setMarca("Ford");
