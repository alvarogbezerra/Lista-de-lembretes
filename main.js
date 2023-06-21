/*1-O presente projeto será um aplicativo que permita ao usuário adicionar, visualizar e excluir tarefas.

2-Cada tarefa deve conter: nome, data de realização e estado (fazer ou feita).
3-O aplicativo deve permitir a listagem de tarefas ordenadas por nome e data de realização, nessa listagem deve aparecer somente as tarefas com estado "fazer".
4-O aplicativo deve permitir a listagem de tarefas "feita"
5-O aplicativo deve permitir que o usuário altere e remova uma tarefa cadastrada.

const prompt = require('readline-sync')
prompt.question()

pedir que o chat gpt desenvolva melhor o código
*/

const prompt = require('readline-sync')
let listaDeLembretes = [];
let i = "node main.js"

function aFazerOuFeita() {
    let aux = situacao
    if (aux == 1) {
        situacao = "A fazer";
    } else if (aux == 2) {
        situacao = "Feita";
    } else {
        console.log("Entrada inválida. Tente novamente.");
        return aFazerOuFeita();
    }
}




function adicionarLembrete() {
    let nome = "alvaro" //prompt.question("Insira o nome do lembrete: ");

    //Faz com que a data fique obrigatoriamente no formato DD/MM/AAAA
    let data = "25/07/2002" //prompt.question("Insira a data no formato DD/MM/AAAA: ");
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;
    while (!regex.test(data)) {
        console.log("Data inválida. Tente novamente.");
        data = prompt.question("Insira a data no formato DD/MM/AAAA: ");
    }

    let situacao = prompt.question("Insira 1 para fazer ou 2 feita: ");
    aFazerOuFeita()

    let novaNota = [nome, data, situacao]

    listaDeLembretes.push(novaNota)
}
adicionarLembrete()

function visualizarLembrete() {
    console.log(listaDeLembretes);
}
visualizarLembrete()

function excluirLembrete() {
    let indiceDoLembrete = Number(prompt.question("Insira o numero do lembrete que pretende excluir."))-1

    listaDeLembretes.pop(indiceDoLembrete);
}
excluirLembrete()

console.log(listaDeLembretes);