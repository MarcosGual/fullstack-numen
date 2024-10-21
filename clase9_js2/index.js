//console.log(suma(10, 20)); //hosting o izamiento
//console.log(resta(4,2));

// Declaración de función
function miPrimeraFuncion() {
  console.log("1");
  console.log("2");
  console.log("3");
}

// Llamado a la función
//miPrimeraFuncion();

function hacerArroz() {
  console.log("1. Poner agua a hervir.");
  console.log("2. Esperar a que hierva.");
  console.log("3. Poner el arroz.");
  console.log("4. Esperar 12 minutos.");
  console.log("5. Apagar y colarlo.");
  console.log("6. Servir.");
}

//hacerArroz();

//Función declarada o Function Declaration
function suma(a, b) {
  //console.log(a+b);
  return a + b;
}

// var resultadoSuma = suma();
// console.log(resultadoSuma)

//Función expresada o Function Expression
var resta = function (a, b) {
  return a - b;
};

//console.log(resta(4,2));

// ARREGLOS EN JAVASCRIPT

var miPrimerArreglo = ["Hola", 1, true, ["a", "b", "c"]];

// console.log(miPrimerArreglo);
// console.log("Longitud del arreglo: ", miPrimerArreglo.length);
// console.log(miPrimerArreglo[3][2]);

var estudiantes = ["Martin", "Fernando", "Sara", ["Samuel", "Jorge", "Pedro"]];
// Posicion:   0          1        2        3[0]      3[1]     3[2]

// estudiantes[0] = "Pablo";
// console.log(estudiantes)
// estudiantes[3][0] = "Juana";
// console.log(estudiantes);

// estudiantes.push('Juana');
// console.log(estudiantes);

// estudiantes.pop();
// console.log(estudiantes);

// estudiantes.unshift('Leo');
// console.log(estudiantes);

// estudiantes.shift();
// console.log(estudiantes);

//OBJETOS

var miPrimerObjeto = {
  nombre: "Sherlock Holmes",
  edad: 60,
  genero: "Masculino",
  intereses: ["Violin", "Boxeo"],

  saludo: function () {
    alert("Hola, soy " + this.nombre + ".");
  },
};

//console.log(miPrimerObjeto.saludo());
//console.log(miPrimerObjeto.saludo())

var a = 10;
var b = 20;

// if (a > b) {
//   console.log("El número a es mayor que el b.");
// } else if (a == b) {
//     console.log("Los números a y b son iguales.")
// } else {
//   console.log("El número b es mayor que el a.");
// }

// var opcionSeleccionada = 1;

// switch (opcionSeleccionada) {
//     case 1:
//         console.log("Té");
//         break;
//     case 2:
//         console.log("Café");
//         break;
//     case 3:
//         console.log("Agua")
//         break;
//     default:
//         console.log("Caramelo media hora")
//         break;
// }


// var contador = 0;

// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

var contador = 1000;

do {
    console.log("do while " + contador);
    contador++
} while (contador < 10);

