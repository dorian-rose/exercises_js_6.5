//Una función que devuelva el número de cifras de un entero solicitado al usuario

function numberOfDigits() {
  let entero = prompt("inserte un numero entero");
  let numberDigits = entero.length;
  return numberDigits;
}

/*function numberOfDigits() {
  let entero = prompt("inserte un numero entero");
  let cifras = 0;
  for (let i = 0; i < entero.length; i++) {
    cifras++;
  }
  return cifras;
}*/

//Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario
function numberOfStars() {
  let n = parseInt(prompt("inserte un numero entero"));
  let stars = "";
  for (let i = 0; i < n; i++) {
    stars = stars + "*";
  }
  return stars;
}

//Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):

function buildString() {
  let n = parseInt(
    prompt(
      "inserte un numero entero, ese va a ser el numero de caracteres que aparezcan"
    )
  );
  let characters = "";
  for (let i = 0; i < n; i++) {
    if (i % 3 == 0) {
      characters = characters + "*";
    } else {
      if (i % 3 == 1) {
        characters = characters + "+";
      } else {
        if (i % 3 == 2) {
          characters = characters + "_";
        }
      }
    }
  }
  console.log(characters);
}

//Una función que permita mostrar un triángulo como el siguiente:
function numberOfAsterisksIncrement() {
  let n = parseInt(prompt("inserte un numero entero"));

  let asterisks = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      asterisks += "*";
    }
    console.log(asterisks);
    asterisks = "";
  }
}

//! Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)
var fecha1 = prompt("Mete una fecha en formato dia/mes");
var fecha2 = prompt("Mete otra fecha en formato dia/mes");
var fecha1Separada = fecha1.split("/");
var fecha2Separada = fecha2.split("/");
// alert(fecha1.split("/")[0])
var diferencia = 0;
var dia1 = parseInt(fecha1Separada[0]);
var mes1 = parseInt(fecha1Separada[1]);
var dia2 = parseInt(fecha2Separada[0]); //* 15 marzo; 17 julio
var mes2 = parseInt(fecha2Separada[1]);
const meses30 = [4, 6, 9, 11];
function esde30(mes) {
  let i = 0;
  let encontrado = false;
  while (!encontrado && i < meses30.length) {
    if (meses30[i] == mes) {
      encontrado = true;
    }
    i++;
  }
  return encontrado;
}
if (mes1 == mes2) {
  //todo 15/03 marzo; 17/06 julio
  console.log(dia2 - dia1);
} else {
  for (let i = mes1 + 1; i <= mes2 - 1; i++) {
    if (i == 2) {
      diferencia += 28;
    } else {
      if (esde30(i)) {
        diferencia += 30;
      } else {
        diferencia += 31;
      }
    }
  }
  diferencia += dia2;
  if (esde30(mes1)) {
    diferencia += 30 - dia1;
  } else {
    diferencia += 31 - dia1;
  }
}
console.log(diferencia);
