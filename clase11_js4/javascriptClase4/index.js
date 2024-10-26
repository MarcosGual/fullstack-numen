function suma(a, b) {
  return a + b;
}

const sumaArrow = (a, b) => a + b;

// const enteros = [23, 10, 102, -30, 0, 5];

// console.log(c.length);
// console.log(c[c.length - 1]);

const ultimaPosicionArreglo = (arreglo) => {
  const ultimaPosicion = arreglo.length - 1;
  return arreglo[ultimaPosicion];
};

const nombresEstudiantes = [
  "Martin",
  "Fernando",
  "Sara",
  "Samuel",
  "Jorge",
  "Pedro",
];

// console.log(nombresEstudiantes)

// console.log(ultimaPosicionArreglo(c));
// console.log(ultimaPosicionArreglo(nombresEstudiantes));

// const estudiantes = ['Martin', 'Fernando', 'Sara', 'Samuel'];
// estudiantes.push('Patricia');
// console.log(estudiantes); // ['Martin', 'Fernando', 'Sara', 'Samuel‘, 'Patricia'];

// estudiantes.pop();
// estudiantes.pop();
// console.log(estudiantes); // ['Martin', 'Fernando', 'Sara', 'Samuel‘]

// const estudiantes = ['Martin', 'Fernando', 'Sara', 'Samuel'];
// estudiantes.unshift('Leo');
// console.log(estudiantes); // ['Leo‘, 'Martin', 'Fernando', 'Sara', 'Samuel'];

// estudiantes.shift();
// console.log(estudiantes); // // ['Martin', 'Fernando', 'Sara', 'Samuel'];

function imprimirPosiciones(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

// imprimirPosiciones(nombresEstudiantes);

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(array[i]) === array[i]) {
      array[i]++;
    } else {
      console.log("Error: las cadenas de texto y decimales no se pueden sumar");
    }
  }

  return array;
}

// const enteros = [23, 10, 102, -30, 0, 0.15];

// // console.log(incrementarPorUno(enteros));
// console.log(enteros)

const tablas = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  tablaDelUno = [],
  tablaDelDos = [],
  tablaDelTres = [],
  tablaDelCuatro = [],
  tablaDelCinco = [],
  tablaDelSeis = [],
  tablaDelSiete = [],
  tablaDelOcho = [],
  tablaDelNueve = [];

function tablasDeMultiplicar(tablas) {
  for (let i = 0; i < tablas.length; i++) {
    tablaDelUno[i] = 1 * tablas[i]; //[1,2,3,4,5,6,7,8,9]
    tablaDelDos[i] = 2 * tablas[i]; //[2,4,6,8,10,12,14,16,18]
    tablaDelTres[i] = 3 * tablas[i];
    tablaDelCuatro[i] = 4 * tablas[i];
    tablaDelCinco[i] = 5 * tablas[i];
    tablaDelSeis[i] = 6 * tablas[i];
    tablaDelSiete[i] = 7 * tablas[i];
    tablaDelOcho[i] = 8 * tablas[i];
    tablaDelNueve[i] = 9 * tablas[i];
  }

  return [
    tablaDelUno,
    tablaDelDos,
    tablaDelTres,
    tablaDelCuatro,
    tablaDelCinco,
    tablaDelSeis,
    tablaDelSiete,
    tablaDelOcho,
    tablaDelNueve,
  ];
}

// console.log(tablasDeMultiplicar(tablas));

//OBJETOS

const objeto = {};

// console.log(objeto);

const auto = {
  marca: "Ford",
  modelo: "Focus",
  anio: 2015,
  ruedas: 4,
  puertas: 3,
  tieneAireAcondicionado: true,
  presentar: function () {
    console.log(`este es un ${this.marca} ${this.modelo}...`);
  },
  arrancar: function () {
    console.log("brrrrmm arrancando...");
  },
  frenar: function () {
    console.log("iiiiii frenando...");
  },
  aireAcondicionado: function () {
    if (this.tieneAireAcondicionado) {
      console.log("Tiene aire acondicionado.");
    } else if (this.tieneAireAcondicionado) {
      console.log("No tiene aire acondicionado");
    }
  },
};

auto["color"] = "rojo";

auto.acelerar = function () {
  console.log("brrrrr acelerando...");
};

// console.log(auto);
// auto.presentar();
// auto.aireAcondicionado();

// //notación del punto (dot notation)
// console.log(auto.ruedas);
// auto.presentar();
// auto.arrancar();
// auto.frenar();

// //notación del corchete (bracket notation)
// console.log(auto['modelo'])
// auto['arrancar']();
// auto['frenar']();

const productos = [
  { id: 1, name: "Xayah", precio: "10" },
  { id: 2, name: "Garen", precio: "20" },
  { id: 3, name: "Twitch", precio: "30" },
  { id: 4, name: "Yasuo", precio: "40" },
  { id: 5, name: "Nasus", precio: "50" },
];

function crearTarjetas(productos) {
  for (let i = 0; i < productos.length; i++) {
    console.log(`
             ${productos[i].name}
              $${productos[i].precio}
             - 0 +
            AGREGAR
        `);
  }
}

crearTarjetas(productos)