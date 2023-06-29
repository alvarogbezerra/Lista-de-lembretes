/*Dados para executar mais fácil:

cd "C:\Users\alvar\REPOSITÓRIO PRINCIPAL\projeto-equipe-alvaro"
node main.js

MELHORIAS:
1- acrescentar opção de não acrescentar lembrete
2- acrescentar opção de menu no final que dê para chamar as funções ao final com base nas opções apresentadas

*/

const prompt = require('readline-sync');

//lembretes criados para teste
let listaDeLembretes = [
    ["Comprar mantimentos", "01/07/2023", "a fazer", "Lembre-se de comprar leite, pão e ovos."],
    ["Enviar relatório", "05/07/2023", "a fazer", "Enviar relatório de vendas do mês anterior."],
    ["Fazer exercícios", "02/07/2023", "feito", "Realizar 30 minutos de exercícios aeróbicos."],
    ["Marcar consulta médica", "08/07/2023", "a fazer", "Agendar consulta com o médico de família."],
    ["Pagar contas", "03/07/2023", "feito", "Realizar o pagamento das contas de água, luz e telefone."],
    ["Estudar para o exame", "07/07/2023", "a fazer", "Revisar os principais tópicos para o exame de história."],
    ["Fazer caminhada", "12/07/2023", "a fazer", "Realizar uma caminhada de 1 hora no parque."],
    ["Ligar para o cliente", "10/07/2023", "a fazer", "Entrar em contato para discutir detalhes do projeto."],
    ["Organizar armário", "06/07/2023", "feito", "Arrumar roupas e objetos no armário."],
  ];
  
  let interruptor = prompt.question("Insira 1 para iniciar o app lembretes ou 2 para encerrar");
  
  while (interruptor === "1") {
      adicionarLembrete();
      visualizarLembrete();
      ordenar();
      alterar();
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
      let situacao;
      while (true) {
        situacao = Number(prompt.question("Para definir a situação do lembrete, digite 1 para 'feito' ou 2 para 'a fazer': "));
        if (situacao === 1 || situacao === 2) {
          break;
        } else {
          console.log("Opção inválida. Por favor, digite 1 ou 2.");
        }
      }
      
      if (situacao === 1) {
        situacao = "feito";
      }
      
      if (situacao === 2) {
        situacao = "a fazer";
      }
      let informacoes = prompt.question("Insira aqui as informações que pretende adicionar ao lembrete. ");
  
      let novoLembrete = [nome, data, situacao, informacoes];
      listaDeLembretes.push(novoLembrete);
  }
  
  function ordenar() {
    let ordenarOuNao = Number(prompt.question("Insira 1 para ordenar lembretes com o estado 'a fazer', 2 para ordenar com 'feito' ou 3 para seguir em frente. "));
    
    while (ordenarOuNao >= 1 && ordenarOuNao <= 3) {
      if (ordenarOuNao === 1) {
        let ordenaPorNomeOuData = Number(prompt.question("Insira 1 para ordenar lembretes 'a fazer' por nome ou 2 para ordenar por data. "));
    
        if (ordenaPorNomeOuData === 1) {
          let lembretesAFazer = listaDeLembretes.filter(function(lembrete) {
            return lembrete[2] === "a fazer";
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
    
            console.log("Lembretes 'a fazer' ordenados por nome:");
            console.log(lembretesAFazer);
          } else {
            console.log("Não há lembretes com o estado 'a fazer'.");
          }
        }
    
        if (ordenaPorNomeOuData === 2) {
          let lembretesAFazer = listaDeLembretes.filter(function(lembrete) {
            return lembrete[2] === "a fazer";
          });
    
          if (lembretesAFazer.length > 0) {
            lembretesAFazer.sort(function(a, b) {
              let dataA = new Date(a[1]);
              let dataB = new Date(b[1]);
    
              return dataA - dataB;
            });
    
            console.log("Lembretes 'a fazer' ordenados por data:");
            console.log(lembretesAFazer);
          } else {
            console.log("Não há lembretes com o estado 'a fazer'.");
          }
        }
      }
    
      if (ordenarOuNao === 2) {
        let ordenaPorNomeOuData = Number(prompt.question("Insira 1 para ordenar lembretes 'feito' por nome ou 2 para ordenar por data. "));
    
        if (ordenaPorNomeOuData === 1) {
          let lembretesFeitos = listaDeLembretes.filter(function(lembrete) {
            return lembrete[2] === "feito";
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
    
            console.log("Lembretes 'feito' ordenados por nome:");
            console.log(lembretesFeitos);
          } else {
            console.log("Não há lembretes com o estado 'feito'.");
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
    
            console.log("Lembretes 'feito' ordenados por data:");
            console.log(lembretesFeitos);
          } else {
            console.log("Não há lembretes com o estado 'feito'.");
          }
        }
      }
    
      if (ordenarOuNao === 3) {
        console.log("Você escolheu seguir em frente.");
        break;
      }
    
      ordenarOuNao = Number(prompt.question("Insira 1 para ordenar lembretes com o estado 'a fazer', 2 para ordenar com 'feito' ou 3 para seguir em frente. "));
    }
    
    console.log("Opção inválida.");
  }
  
  
  function alterar() {
    let indiceDoLembrete = prompt.question("Insira o número do lembrete que você deseja alterar: ");
  
    if (isNaN(indiceDoLembrete) || indiceDoLembrete < 1 || indiceDoLembrete > listaDeLembretes.length) {
      console.log("Índice inválido. Por favor, insira um número válido.");
      return;
    }
  
    let indice = parseInt(indiceDoLembrete) - 1;
    let lembreteSelecionado = listaDeLembretes[indice];
  
    console.log("Lembrete selecionado:");
    console.log(lembreteSelecionado);
  
    let novoNome = prompt.question("Insira o novo nome do lembrete: ");
    let novaData = prompt.question("Insira a nova data no formato DD/MM/AAAA: ");
  
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;
    while (!regex.test(novaData)) {
      console.log("Data inválida. Tente novamente.");
      novaData = prompt.question("Insira a nova data no formato DD/MM/AAAA: ");
    }
  
    let novaSituacao;
    while (true) {
      novaSituacao = Number(prompt.question("Para definir a nova situação do lembrete, digite 1 para 'feito' ou 2 para 'a fazer': "));
      if (novaSituacao === 1 || novaSituacao === 2) {
        break;
      } else {
        console.log("Opção inválida. Por favor, digite 1 ou 2.");
      }
    }
  
    if (novaSituacao === 1) {
      novaSituacao = "feito";
    }
  
    if (novaSituacao === 2) {
      novaSituacao = "a fazer";
    }
  
    let novasInformacoes = prompt.question("Insira as novas informações para o lembrete: ");
  
    listaDeLembretes[indice] = [novoNome, novaData, novaSituacao, novasInformacoes];
    console.log("Lembrete alterado com sucesso!");
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