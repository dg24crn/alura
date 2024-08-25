let numeroSecreto = 3;

let ingresarNumero;

let numeroIntentos = 1;

let intentosRestantes = 3;

while (ingresarNumero != numeroSecreto) {
  ingresarNumero = prompt(
    `Ingresa un numero entre 1 y 5\nIntentos Restantes: ${intentosRestantes}`
  );

  if (ingresarNumero == numeroSecreto) {
    alert(`Correcto!\nNumero de Intentos: ${numeroIntentos}`);
  } else if (ingresarNumero < numeroSecreto) {
    alert("El numero es mayor");
  } else if (ingresarNumero > numeroSecreto) {
    alert("El numero es menor");
  }
  numeroIntentos++;
  intentosRestantes = intentosRestantes - 1;
  if (numeroIntentos > 3) {
    alert("Numero de intentos superado.");
    break;
  }
}
