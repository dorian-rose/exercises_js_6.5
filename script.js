//Una función que devuelva el número de cifras de un entero solicitado al usuario

function numberOfDigits() {
  let entero = prompt("inserte un numero entero");
  let numberString = entero.toString();
  return `El numero tiene ${numberString.length} cifra(s)`;
}

//Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario
function numberOfStars() {
  let n = parseInt(prompt("inserte un numero entero"));
  let stars = "";
  for (let i = 0; i < n; i++) {
    stars = stars + "*";
  }
  alert(stars);
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

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      asterisks += "*";
    }
    console.log(asterisks);
    asterisks = "";
  }
}

//Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)
