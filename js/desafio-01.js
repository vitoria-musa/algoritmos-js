let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));


// Funções para cada operação
const soma = (num1, num2) => num1 + num2;
const subtracao = (num1,num2) => num1 - num2;
const multiplicacao = (num1,num2) => num1 * num2;
const divisao = (num1,num2) => num1 / num2;


//Mensagem de Erro
if (num2 === 0) {
    document.getElementById("resultado").innerHTML = "<p>Erro: Divisão por zero não é permitida. Coloque um número diferente de O.</p>";
} else { 
    document.getElementById("resultado").innerHTML = `
        <p>A soma de ${num1} + ${num2} = ${soma(num1, num2)}</p>
        <p>A subtração de ${num1} - ${num2} = ${subtracao(num1, num2)}</p>
        <p>A multiplicação de ${num1} * ${num2} = ${multiplicacao(num1, num2)}</p>
        <p>A divisão de ${num1} / ${num2} = ${divisao(num1, num2)}</p>
    `;
}


