// BUCLE FOR

// for(var i=10; i>0; i--){
//   // console.log('Vuelta número... ', i)
//   console.log(i+' segundos para el despegue...')
// }

// console.log('Despega la nave!');

//recolectando manzanas

// var canasta = 0;

// for (var manzanas = 1; manzanas < 10; manzanas++) {
//     canasta = canasta + 1;
// }

// console.log(canasta)

// var balas = 11;

// for(var zombie = 10; zombie > 0 ; zombie--) {
//     balas = balas - 1
// }

// if (balas >= 0) {
//     console.log("You survived, mission complete")
// } else {
//     console.log("You died, mission failed")
// }

// function sumar(a, b) {
//   let resultado = a + b;
//   let retorno;
//   if (resultado > 0) {
//     retorno = "El resultado es positivo: " + resultado;
//   } else if (resultado < 0) {
//     retorno = "El resultado es negativo: " + resultado;
//   } else {
//     retorno = "El resultado es igual a cero.";
//   }

//   // console.log(retorno);
// }

// sumar(5, -15);
// console.log(resultado)
// console.log(resultado);
// console.log(resultado);

// const musica = "Pop"
// console.log(musica)

// {
//   musica = "Rock"
//   console.log(musica)
// }

// // var musica = "Pop"
// console.log(musica)

// const sumaArrow = (a, b) => a + b;
// const restaArrow = (a, b) => a - b;

// const superficieCirculo = (radio) => Math.PI * radio ** 2;

// console.log(sumaArrow(10, 10));
// console.log(restaArrow(10, 10));
// console.log(superficieCirculo(5));

// const ladoDeLaFuerza = (elegir) => {
//   if (elegir === "oscuro") {
//     return "Eres un Sith";
//   } else if (elegir === "luminoso") {
//     return "Eres un Jedi";
//   }
//   return "Eres un personaje irrelevante";
// };

// console.log(ladoDeLaFuerza('bla'));

// const valienteYAtrevido = 1,
//     justicieroYAmable = 2,
//     argumentativoYAnalitico = 3,
//     astutoEInescrupuloso = 4;

// const numeroAleatorio = Math.ceil(Math.random() * 5)

// const sombreroSeleccionador = (test) => {
//   switch (test) {
//       case valienteYAtrevido:
//           return "Griffindor";
//       case justicieroYAmable:
//           return "Hufflepuff";
//       case argumentativoYAnalitico:
//           return "Ravenclaw";
//       case astutoEInescrupuloso:
//           return "Slytherin";    
//       default:
//           return "Azkaban"
//   }
// }
// console.log(numeroAleatorio)
// console.log(sombreroSeleccionador(numeroAleatorio));

const juegoDeLasSillas = (alumnos, sillas) => {    
  for (let i = sillas; i > 1; i--) {
      console.log("Comienza ronda")        
      alumnos = alumnos - 1
      if (alumnos === 2) {
          alumnos = alumnos - 1
      }      
  }

  return alumnos
}

console.log(juegoDeLasSillas(10,9));