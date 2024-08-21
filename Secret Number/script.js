let numeroSecreto = 5;
let numeroIngresar;

while (numeroSecreto != numeroIngresar) {
    let numeroPrompt = prompt("Ingresa un numero");
    numeroIngresar = parseInt(numeroPrompt, 10)

    if (numeroIngresar === numeroSecreto) {
        alert("¡Correcto!");
        break;
    } else {
        alert("Número incorrecto. Inténtalo de nuevo.");
    }
}
