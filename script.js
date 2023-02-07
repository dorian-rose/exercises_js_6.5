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
function numberOfStarsIncrement() {
  let n = 5; //parseInt(prompt("inserte un numero entero"));

  let stars = "0";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

/*function myFunction() {
  var text = "";
  var i;
  var j;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 2; j++) {
      text += "The number is i = " + i + " and j = " + j + "<br>";
    }
  }
  console.log(text);
}
myFunction();*/

//Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)
let first = prompt("Enter a date with format 'January 20'");
let second = prompt("Enter a date with format 'January 20'");

//In JavaScript, date objects are created with new Date().
//Date  converts to number of milliseconds since beginning of January 1 1970

let dateOne = new Date(first);
console.log(dateOne);
let dateTwo = new Date(second);
console.log(dateTwo);

// segundos = milisegundos/1000
// minutos = segundos/60
// horas = minutos/60
// Días = horas/24

const differenceInDays = Math.floor(
  (dateOne - dateTwo) / (1000 * 60 * 60 * 24)
);
console.log(differenceInDays);
