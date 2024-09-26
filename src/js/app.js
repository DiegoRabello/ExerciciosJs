//Exercício 1
function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}
function exibirSoma() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = somarDoisNumeros(num1, num2);
    document.getElementById('resultado').textContent = `A soma de ${num1} e ${num2} é: ${resultado}`;
}

//Exercício 2


function exibirSaudacao() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    document.getElementById('saudacao').textContent = `Olá, ${nome} ${sobrenome}!`;;
    
}

//Exercício 3
function ConverterDolar(real) {
    const dolar = 5.47;
    return real / dolar;
}

function exibirConversao() {
    const real = parseFloat(document.getElementById('real').value);
    const resultado = ConverterDolar(real);
    document.getElementById('resultado').textContent = `O valor em dólar é: ${resultado}`;
}

//Exercício 4
function AntecessorSucessor(numero) {
    const antecessor = numero - 1;
    const sucessor = numero + 1;
    return `Antecessor: ${antecessor}, Sucessor: ${sucessor}`;
}

function exibirAntecessorSucessor() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = AntecessorSucessor(numero);
    document.getElementById('resultado').textContent = resultado;
}

//Exercício 5
function CalcularM2(largura, comprimento, preco) {
    const valorM2 = parseFloat(preco);
    const area = largura * comprimento;
    const valor = area * valorM2;
    return valor;
}

function exibirValorTerrenoM2() {
    const preco = parseFloat(document.getElementById('preco').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const resultado = CalcularM2(largura, comprimento, preco);
    document.getElementById('resultado').textContent = `O valor do terreno é: ${resultado}`;
}

//Exercício 6
function exibirTotalGastoCombustivel() {
    const valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value);
    const litrosCombustivel = parseFloat(document.getElementById('litrosCombustivel').value);
    const kmPercorridos = parseFloat(document.getElementById('kmPercorridos').value);
    const totalGasto = (litrosCombustivel / kmPercorridos) * valorCombustivel;
    document.getElementById('resultado').textContent = `O total gasto com combustível é: ${totalGasto}`;
}

//Exercício 7
function exibirMediaAritmetica() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('resultado').textContent = `A média aritmética é: ${media}`;
}

//Exercício 8
function farenheitToCelsius(farenheit) {
    return (farenheit - 32) * 5/9;
}

function exibirConversaoFarenheitCelsius() {
    const farenheit = parseFloat(document.getElementById('farenheit').value);
    const resultado = farenheitToCelsius(farenheit);
    document.getElementById('resultado').textContent = `A temperatura em Celsius é: ${resultado}`;
}

//lista 2

//Exercício 1
function ParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}
function exibirParOuImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = ParOuImpar(numero);
    document.getElementById('resultado').textContent = `O número ${numero} é ${resultado}`;
}

//Exercício 2
function exibirMaiorNumero() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const maior = Math.max(numero1, numero2);
    document.getElementById('resultado').textContent = `O maior número é: ${maior}`;
}


//exercicio3
// function filaPrioritaria(idade, pcd) {
//     if (idade >= 65) {
//         return 'Fila Prioritária';
//     } else if (pcd === 'sim') {
//         return 'Fila Prioritária';
//     } else if (gestante === 'sim') {
//         return 'Fila Prioritária';
//     } else {
//         return 'Fila Normal';
//     }
// }

// function exibirFilaPrioritaria() {
//     const idade = parseInt(document.getElementById('idade').value);
//     const pcd = document.getElementById('pcd').value;
//     const gestante = document.getElementById('gestante').value;
//     const resultado = filaPrioritaria(idade, pcd, gestante);
//     document.getElementById('resultado').textContent = `Você está na ${resultado}`;
// }

let etapaAtual = 1;
let respostas = {
    idade: 0,
    pcd: false,
    gestante: false
};

function proximaPergunta() {
    switch(etapaAtual) {
        case 1:
            respostas.idade = parseInt(document.getElementById('idade').value);
            if (respostas.idade >= 65) {
                exibirResultado('Fila Preferencial');
            } else {
                atualizarPergunta('Você é uma pessoa com deficiência?', 'pcd', 'checkbox');
                etapaAtual++;
            }
            break;
        case 2:
            respostas.pcd = document.getElementById('pcd').checked;
            if (respostas.pcd) {
                exibirResultado('Fila Preferencial');
            } else {
                atualizarPergunta('Você está gestante?', 'gestante', 'checkbox');
                etapaAtual++;
            }
            break;
        case 3:
            respostas.gestante = document.getElementById('gestante').checked;
            if (respostas.gestante) {
                exibirResultado('Fila Preferencial');
            } else {
                exibirResultado('Fila Comum');
            }
            break;
    }
}

function atualizarPergunta(pergunta, id, tipo) {
    const container = document.getElementById('pergunta-container');
    container.innerHTML = `
        <label for="${id}">${pergunta}</label>
        <input type="${tipo}" id="${id}" name="${id}">
        <button onclick="proximaPergunta()">Próxima</button>
    `;
}

function exibirResultado(fila) {
    const container = document.getElementById('pergunta-container');
    container.innerHTML = '';
    document.getElementById('resultado').textContent = `Você deve ir para a ${fila}.`;
}

// exercicio 4
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return 'Pode entrar';
    } else if (idade >= 16) {
        return 'Apenas com acompanhante';
    } else {
        return 'Não pode entrar';
    }
}

function exibirMaiorDeIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = maiorDeIdade(idade);
    document.getElementById('resultado').textContent = `${resultado}`;
}

// exercicio 6
function calcularMedia(nota1, nota2, nota3) {
    const resultado = (nota1 + nota2 + nota3) / 3;
    const aprovadoReprovado = resultado >= 6 ? 'Aprovado' : 'Reprovado';
    return aprovadoReprovado;
}

function exibirMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const media = calcularMedia(nota1, nota2, nota3);
    document.getElementById('resultado').textContent = `O aluno está ${media}`;
}

// exercicio 7
    function identificadorDivisao(numero1, numero2) {
        if (numero1  % numero2 === 0) {
            return 'O numero é divisível';
        } else {
            return 'O numero não é divisível';
        }
    }

    function exibirIdentificadorDivisao() {
        const numero1 = parseFloat(document.getElementById('numero1').value);
        const numero2 = parseFloat(document.getElementById('numero2').value);
        const resultado = identificadorDivisao(numero1, numero2);
        document.getElementById('resultado').textContent = `${resultado}`;
    }

// exercicio 8
let etapaPerguntas =1;
let respostasPerguntas = {
    pais: '',
    cidade: 0,
    genero: '',
    estadoCivil: '',
    escolaridade: ''
};

function proximaPergunta() {
    switch(etapaPerguntas) {
        case 1:
            respostas.pais = document.getElementById('pais').value;
            if (respostas.pais === 'Brasil') {
                exibirResultado('Brasileiro');
            } else {
                atualizarPergunta('Você já morou em outros países?', 'cidade', 'checkbox');
                etapaPerguntas++;
            }
            break;
        case 2:
            respostas.cidade = document.getElementById('cidade').value;
            if (respostas.cidade === 'São Paulo') {
                exibirResultado('São Paulo');
            } else {
                atualizarPergunta('Você já morou em outros países?', 'cidade', 'checkbox');
                etapaPerguntas++;
            }
            break;
        case 3:
            respostas.genero = document.getElementById('genero').value;
            if (respostas.genero === 'Masculino') {
                exibirResultado('Masculino');
            } else {
                atualizarPergunta('Você já morou em outros países?', 'cidade', 'checkbox');
                etapaPerguntas++;
            }
            break;
        case 4:
            respostas.estadoCivil = document.getElementById('estadoCivil').value;
            if (respostas.estadoCivil === 'Solteiro') {
                exibirResultado('Solteiro');
            } else {
                atualizarPergunta('Você já morou em outros países?', 'cidade', 'checkbox');
                etapaPerguntas++;
            }
            break;
        case 5:
            respostas.escolaridade = document.getElementById('escolaridade').value;
            if (respostas.escolaridade === 'Ensino Fundamental') {
                exibirResultado('Ensino Fundamental');
            } else {
                atualizarPergunta('Você já morou em outros países?', 'cidade', 'checkbox');
                etapaPerguntas++;
            }
            break;
    }
}

function atualizarPergunta(pergunta, id, tipo) {
    const container = document.getElementById('pergunta-container');
    container.innerHTML = `
        <label for="${id}">${pergunta}</label>
        <input type="${tipo}" id="${id}" name="${id}">
        <button onclick="proximaPergunta()">Próxima</button>        
    `;
}

function exibirResultado(resultado) {
    const container = document.getElementById('pergunta-container');
    container.innerHTML = '';
    document.getElementById('resultado').textContent = `O resultado é: ${resultado}`;
}
