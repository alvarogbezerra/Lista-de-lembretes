/*
V 1-O presente projeto será um aplicativo que permita ao usuário adicionar, visualizar e excluir tarefas.
V 2-Cada tarefa deve conter: nome, data de realização e estado (fazer ou feita).
F 3-O aplicativo deve permitir a listagem de tarefas ordenadas por nome e data de realização, nessa listagem deve aparecer somente as tarefas com estado "fazer".
F 4-O aplicativo deve permitir a listagem de tarefas "feita"
F 5-O aplicativo deve permitir que o usuário altere e remova uma tarefa cadastrada.

cd "C:\Users\alvar\REPOSITÓRIO PRINCIPAL\Lista de lembretes"
node main.js
*/

const prompt = require('readline-sync');

let listaDeLembretes = [];

console.log(`Esses são os seus lembretes atuais:\n ${listaDeLembretes}`);

let interruptor = prompt.question("Insira 1 para iniciar o app lembretes ou 2 para encerrar");

while (interruptor === "1") {
    adicionarLembrete();
    visualizarLembrete();
    excluirLembrete();

    interruptor = prompt.question("Insira 1 para iniciar o app lembretes ou 2 para encerrar");
    if (interruptor === "2") {
        break;
    }
}

function adicionarLembrete() {
    let nome = prompt.question("Insira o nome do lembrete: ");
    let data = prompt.question("Insira a data no formato DD/MM/AAAA: ");
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;
    while (!regex.test(data)) {
        console.log("Data inválida. Tente novamente.");
        data = prompt.question("Insira a data no formato DD/MM/AAAA: ");
    }
    let situacao = prompt.question("Insira a situação do lembrete como 'feito', 'a fazer' ou outra descrição.");
    let informacoes = "Insira aqui as informações que pretende adicionar";

    let novoLembrete = [nome, data, situacao, informacoes];
    listaDeLembretes.push(novoLembrete);
}

function visualizarLembrete() {
    for (let i = 0; i < listaDeLembretes.length; i++) {
        console.log(`Seus lembretes possuem os seguintes títulos: ${listaDeLembretes[i][0]}`);
    }

    for (;;) {
        let numeroDoPrimeiroIndice = prompt.question("Insira o número do lembrete que você pretende visualizar ou 'x' para sair da visualização de lembretes.");

        if (numeroDoPrimeiroIndice === "x" || numeroDoPrimeiroIndice === "X") {
            break;
        } else if (isNaN(numeroDoPrimeiroIndice) || numeroDoPrimeiroIndice < 1 || numeroDoPrimeiroIndice > listaDeLembretes.length) {
            console.log("Índice inválido. Por favor, insira um número válido.");
        } else {
            let lembreteSelecionado = listaDeLembretes[numeroDoPrimeiroIndice - 1];
            console.log(lembreteSelecionado);
        }
    }
}

function excluirLembrete() {
    for (;;) {
        let indiceDoLembrete = prompt.question("Insira o número do lembrete que você pretende excluir ou 'x' para sair da aba de exclusão de lembretes.");

        if (indiceDoLembrete === "x" || indiceDoLembrete === "X") {
            break;
        } else if (isNaN(indiceDoLembrete) || indiceDoLembrete < 1 || indiceDoLembrete > listaDeLembretes.length) {
            console.log("Índice inválido. Por favor, insira um número válido.");
        } else {
            let indice = parseInt(indiceDoLembrete) - 1;
            listaDeLembretes.splice(indice, 1);
        }
    }
}
