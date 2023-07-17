const readlineSync = require('readline-sync');
const listaDeLembretes = require('./Lista-de-Lembretes.json')

console.log(listaDeLembretes)

function exibirMenu(){
    console.log('********** MENU *********')
    console.log('1 - Adicionar Lembrete')
    console.log('2 - Visualizar Lembretes')
    console.log('3 - Ordenar Lembretes')
    console.log('4 - Alterar Lembretes')
    console.log('5 - Excluir Lembrete')
    console.log('0 - Sair')
    return Number(readlineSync.question('Insira o numero da opcao desejada:'))
}

let interruptor = exibirMenu()

while (interruptor !== 0) {
  switch(interruptor){
    case 1:
      adicionarLembrete();
      break
    case 2:
      visualizarLembrete()
      break
    case 3:
      ordenar()
      break
    case 4:
      alterar()
      break
    case 5:
      excluirLembrete();
      break;
    default:
      console.log('Opção Inválida.')
      break
  }

    interruptor = exibirMenu()
}


  function adicionarLembrete() {
      let nome = readlineSync.question("Insira o nome do lembrete: ");
      let data = readlineSync.question("Insira a data no formato DD/MM/AAAA: ");
      let regex = /^\d{2}\/\d{2}\/\d{4}$/;
      while (!regex.test(data)) {
          console.log("Data invalida. Tente novamente.");
          data = readlineSync.question("Insira a data no formato DD/MM/AAAA: ");
      }
      let situacao;
      while (true) {
        situacao = readlineSync.question("Digite a situacao do lembrete (1 para 'Feito', 2 para 'A fazer', ou 0 para nao adicionar lembrete): ");
        if (situacao === '0' || situacao === '1' || situacao === '2') {
          break;
        } else {
          console.log("Opcao invalida. Por favor, digite 0, 1 ou 2.");
        }
      }
      if (situacao === '1'){
        situacao = 'Feito'
      }else if (situacao === '2'){
        situacao === 'A fazer'
      }else {
        console.log('Operacao cancelada. Nao foi adicionado nenhum lembrete.')
        return
      }
       
      let informacoes = readlineSync.question("Insira aqui as informacoes que pretende adicionar ao lembrete. ");
  
      let novoLembrete = [nome, data, situacao, informacoes];
      listaDeLembretes.push(novoLembrete);
  }
  
  function ordenar() {
    let ordenarOuNao = Number(readlineSync.question("Insira 1 para ordenar lembretes com o estado 'A fazer', 2 para ordenar com 'Feito' ou 3 para seguir em frente. "));
    
    while (ordenarOuNao >= 1 && ordenarOuNao <= 3) {
      if (ordenarOuNao === 1) {
        let ordenaPorNomeOuData = Number(readlineSync.question("Insira 1 para ordenar lembretes 'A fazer' por nome ou 2 para ordenar por data. "));
    
        if (ordenaPorNomeOuData === 1) {
          let lembretesAFazer = listaDeLembretes.filter(function(lembrete) {
            return lembrete[2] === "A fazer";
          });
    
          if (lembretesAFazer.length > 0) {
            lembretesAFazer.sort(function(a, b) {
              let nomeA = a[0].toLowerCase();
              let nomeB = b[0].toLowerCase();
    
              if (nomeA < nomeB) {
                return -1;
              } else if (nomeA > nomeB) {
                return 1;
              } else {
                return 0;
              }
            });
    
            console.log("Lembretes 'A fazer' ordenados por nome:");
            console.log(lembretesAFazer);
          } else {
            console.log("Não há lembretes com o estado 'A fazer'.");
          }
        }
    
        if (ordenaPorNomeOuData === 2) {
          let lembretesAFazer = listaDeLembretes.filter(function(lembrete) {
            return lembrete[2] === "A fazer";
          });
    
          if (lembretesAFazer.length > 0) {
            lembretesAFazer.sort(function(a, b) {
              let dataA = new Date(a[1]);
              let dataB = new Date(b[1]);
    
              return dataA - dataB;
            });
    
            console.log("Lembretes 'A fazer' ordenados por data:");
            console.log(lembretesAFazer);
          } else {
            console.log("Nao ha lembretes com o estado 'A fazer'.");
          }
        }
      }
    
      if (ordenarOuNao === 2) {
        let ordenaPorNomeOuData = Number(readlineSync.question("Insira 1 para ordenar lembretes 'Feito' por nome ou 2 para ordenar por data. "));
    
        if (ordenaPorNomeOuData === 1) {
          let lembretesFeitos = listaDeLembretes.filter(function(lembrete) {
            return lembrete[2] === "Feito";
          });
    
          if (lembretesFeitos.length > 0) {
            lembretesFeitos.sort(function(a, b) {
              let nomeA = a[0].toLowerCase();
              let nomeB = b[0].toLowerCase();
    
              if (nomeA < nomeB) {
                return -1;
              } else if (nomeA > nomeB) {
                return 1;
              } else {
                return 0;
              }
            });
    
            console.log("Lembretes 'Feito' ordenados por nome:");
            console.log(lembretesFeitos);
          } else {
            console.log("Nao ha lembretes com o estado 'Feito'.");
          }
        }
    
        if (ordenaPorNomeOuData === 2) {
          let lembretesFeitos = listaDeLembretes.filter(function(lembrete) {
            return lembrete[2] === "feito";
          });
    
          if (lembretesFeitos.length > 0) {
            lembretesFeitos.sort(function(a, b) {
              let dataA = new Date(a[1]);
              let dataB = new Date(b[1]);
    
              return dataA - dataB;
            });
    
            console.log("Lembretes 'Feito' ordenados por data:");
            console.log(lembretesFeitos);
          } else {
            console.log("Nao ha lembretes com o estado 'Feito'.");
          }
        }
      }
    
      if (ordenarOuNao === 3) {
        console.log("Voce escolheu seguir em frente.");
        break;
      }
    
      ordenarOuNao = Number(readlineSync.question("Insira 1 para ordenar lembretes com o estado 'A fazer', 2 para ordenar com 'Feito' ou 3 para seguir em frente. "));
    }
    
    console.log("Opcao invalida.");
  }
  
  
  function alterar() {
    let indiceDoLembrete = readlineSync.question("Insira o numero do lembrete que voce deseja alterar: ");
  
    if (isNaN(indiceDoLembrete) || indiceDoLembrete < 1 || indiceDoLembrete > listaDeLembretes.length) {
      console.log("Indice invalido. Por favor, insira um numero valido.");
      return;
    }
  
    let indice = parseInt(indiceDoLembrete) - 1;
    let lembreteSelecionado = listaDeLembretes[indice];
  
    console.log("Lembrete selecionado:");
    console.log(lembreteSelecionado);
  
    let novoNome = readlineSync.question("Insira o novo nome do lembrete: ");
    let novaData = readlineSync.question("Insira a nova data no formato DD/MM/AAAA: ");
  
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;
    while (!regex.test(novaData)) {
      console.log("Data invalida. Tente novamente.");
      novaData = readlineSync.question("Insira a nova data no formato DD/MM/AAAA: ");
    }
  
    let novaSituacao;
    while (true) {
      novaSituacao = Number(readlineSync.question("Para definir a nova situacao do lembrete, digite 1 para 'Feito' ou 2 para 'A fazer': "));
      if (novaSituacao === 1 || novaSituacao === 2) {
        break;
      } else {
        console.log("Opcao invalida. Por favor, digite 1 ou 2.");
      }
    }
  
    if (novaSituacao === 1) {
      novaSituacao = "Feito";
    }
  
    if (novaSituacao === 2) {
      novaSituacao = "A fazer";
    }
  
    let novasInformacoes = readlineSync.question("Insira as novas informacoes para o lembrete: ");
  
    listaDeLembretes[indice] = [novoNome, novaData, novaSituacao, novasInformacoes];
    console.log("Lembrete alterado com sucesso!");
  }
  
  //Foi feita uma alteração para que na hora de visualizar os lembretes apareça o número correspondente ao lembrete. (Matheus)
  function visualizarLembrete() {
      for (let i = 0; i < listaDeLembretes.length; i++) {
          console.log(`[${i + 1}] Titulo: ${listaDeLembretes[i][0]}`);
      }
  
      for (;;) {
          let numeroDoPrimeiroIndice = readlineSync.question("Insira o numero do lembrete que você pretende visualizar ou 'x' para sair da visualizacao de lembretes.");
  
          if (numeroDoPrimeiroIndice === "x" || numeroDoPrimeiroIndice === "X") {
              break;
          } else if (isNaN(numeroDoPrimeiroIndice) || numeroDoPrimeiroIndice < 1 || numeroDoPrimeiroIndice > listaDeLembretes.length) {
              console.log("Indice invAlido. Por favor, insira um numero valido.");
          } else {
              let lembreteSelecionado = listaDeLembretes[numeroDoPrimeiroIndice - 1];
              console.log(lembreteSelecionado);
          }
      }
  }
//Adicionada uma ordem de parada no momento em que um lembrete é excluído(Rodrigo)
  function excluirLembrete() {
      for (;;) {
          let indiceDoLembrete = readlineSync.question("Insira o numero do lembrete que voce pretende excluir ou 'x' para sair da aba de exclusao de lembretes.");
  
          if (indiceDoLembrete === "x" || indiceDoLembrete === "X") {
              break;
          } else if (isNaN(indiceDoLembrete) || indiceDoLembrete < 1 || indiceDoLembrete > listaDeLembretes.length) {
              console.log("Indice invalido. Por favor, insira um numero valido.");
          } else {
              let indice = parseInt(indiceDoLembrete) - 1;
              listaDeLembretes.splice(indice, 1);
              console.log('Lembrete excluido com sucesso!')
              break;
          }
      }
  }