function suma(a, b) {
  return a + b;
}

// console.log(suma(2,2));
// console.log(suma(2,2));

// console.log(suma(3,5));
// console.log(suma(3,5));

//FUNCIONES DE ORDEN SUPERIOR

const restaArrow = (a, b) => a - b;

// console.log(restaArrow(4,2));

// for(let i=1; i<=5; i++){
//   console.log("Hola - repetición "+i);
// }

// function pedirNumero(){
//   let veces = prompt(
//     "Hola. Por favor ingrese la cantidad de veces que quiere repetir..."
//   );
//   return veces;
// }

// function repetir() {
//   let repeticiones = pedirNumero();
//   for (let i = 1; i <= repeticiones; i++) {
//     console.log("Hola - repetición " + i);
//   }
// }

// repetir();

const saludarUsuario = (nombre) => {
  alert(`Hola, ${nombre}!`);
};

const despedirUsuario = (nombre) => {
  alert(`Adiós, ${nombre}!`);
};

const procesarEntrada = (callback) => {
  const nombreUsuario = prompt("Hola. Por favor ingrese su nombre...");

  return callback(nombreUsuario);
};

// procesarEntrada(despedirUsuario);

// MÉTODO forEach

// const profesores = ["Cinthia", "Matias", "Andres", "Santi"];

// sin callback

// for (let i = 0; i < profesores.length; i++) {
//     console.log(profesores[i])
// }

// con callback

const saludar = (profesor) => {
  console.log("Hola, profesor " + profesor);
};

// profesores.forEach((profesor, index) => {
//   console.log("Hola, profesor " + profesor + "- Vuelta n°: " + index);
// });

let numeros = [1, 5, 10, 15];

let dobleNumeros = numeros.map((numero) => {
  return numero * 2;
});

// console.log(numeros);
// console.log(dobleNumeros);

const sumatoriaElementos = numeros.reduce((acumulador, valor) => {
  return (acumulador += valor);
}, 0);

// console.log(sumatoriaElementos);

// const palabras = ["hola", "cómo", "están"];

// const saludoArmado = palabras.reduce((frase, palabra) => {
//   return frase += ' ' + palabra;
// });

// console.log(saludoArmado);

let palabras = [
  "chancleta",
  "pato",
  "bigote",
  "ornitorrinco",
  "termo",
  "ajedrez",
];

let resultadoFiltrado = palabras.filter((palabra) => palabra.length < 6);

let edades = [1, 5, 10, 15, 50, 30, 35, 20];

// console.log(resultadoFiltrado);
let mayoresDeEdad = edades.filter((edad) => edad >= 18);

let primerMayorDeEdad = edades.find((edad) => edad >= 18);

console.log(primerMayorDeEdad);

let palabraBuscada = palabras.find((palabra) => palabra === "termo");

console.log(palabraBuscada)

const profesores = [
  {
    nombre: "Matias",
    edad: "33",
    profesion: "Profesor",
  },
  {
    nombre: "Cinthia",
    edad: "31",
    profesion: "Coordinadora",
  },
  {
    nombre: "Andres",
    edad: "27",
    profesion: "Profesor",
  },
  {
    nombre: "Marcos",
    edad: 35,
    profesion: "Profesor",
  },
  {
    nombre: "Guillermo",
    edad: "25",
    profesion: "Tutor",
  },
];

// document.write(profesores.map(profesor => {
//   return(`
//     <h2>Bienvenidos a Academia Numen</h2>

//     <p>En esta ocasión quiero presentarles
//     a ${profesor.nombre} quien será su ${profesor.profesion}
//     a lo largo de este curso.</p>
//   `)
// }))
