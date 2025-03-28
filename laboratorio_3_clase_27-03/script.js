let calculo = 0;
const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");
const botonSuma = document.getElementById("sumar");
const botonResta = document.getElementById("restar");
const botonMulti = document.getElementById("multiplicar");
const result = document.getElementById("result");

botonSuma.addEventListener("click", () => {
    calculo = parseInt(primero.value) + parseInt(segundo.value);
    result.innerText = `Resultado: ${calculo}`;
});

botonResta.addEventListener("click", () => {
    calculo = parseInt(primero.value) - parseInt(segundo.value);
    result.innerText = `Resultado: ${calculo}`;
});

botonMulti.addEventListener("click", () => {
    calculo = parseInt(primero.value) * parseInt(segundo.value);
    result.innerText = `Resultado: ${calculo}`;
});
