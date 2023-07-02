const prompt = require('readline-sync');

//lembretes criados para teste
let listaDeLembretes = [
    ["Comprar mantimentos", "01/07/2023", "A fazer", "Lembre-se de comprar leite, pão e ovos."],
    ["Enviar relatório", "05/07/2023", "A fazer", "Enviar relatório de vendas do mês anterior."],
    ["Fazer exercícios", "02/07/2023", "Feito", "Realizar 30 minutos de exercícios aeróbicos."],
    ["Marcar consulta médica", "08/07/2023", "A fazer", "Agendar consulta com o médico de família."],
    ["Pagar contas", "03/07/2023", "Feito", "Realizar o pagamento das contas de água, luz e telefone."],
    ["Estudar para o exame", "07/07/2023", "A fazer", "Revisar os principais tópicos para o exame de história."],
    ["Fazer caminhada", "12/07/2023", "A fazer", "Realizar uma caminhada de 1 hora no parque."],
    ["Ligar para o cliente", "10/07/2023", "A fazer", "Entrar em contato para discutir detalhes do projeto."],
    ["Organizar armário", "06/07/2023", "Feito", "Arrumar roupas e objetos no armário."],
  ];

//Função feita para exibir um Menu de opções. (Matheus)
function exibirMenu(){
    console.log('********** MENU *********')
    console.log('1 - Adicionar Lembrete')
    console.log('2 - Visualizar Lembretes')
    console.log('3 - Ordenar Lembretes')
    console.log('4 - Alterar Lembretes')
    console.log('5 - Excluir Lembrete')
    console.log('0 - Sair')
    return Number(prompt.question('Insira o número da opção desejada:'))
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

//Função para adicionar lembrete e para cancelar operação de adição de novos lembretes(Rodrigo)
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
        situacao = prompt.question("Digite a situação do lembrete (1 para 'Feito', 2 para 'A fazer', ou 0 para não adicionar lembrete): ");
        if (situacao === '0' || situacao === '1' || situacao === '2') {
          break;
        } else {
          console.log("Opção inválida. Por favor, digite 0, 1 ou 2.");
        }
      }
      if (situacao === '1'){
        situacao = 'Feito'
      }else if (situacao === '2'){
        situacao === 'A fazer'
      }else {
        console.log('Operação cancelada. Não foi adicionado nenhum lembrete.')
        return
      }
       
      let informacoes = prompt.question("Insira aqui as informações que pretende adicionar ao lembrete. ");
  
      let novoLembrete = [nome, data, situacao, informacoes];
      listaDeLembretes.push(novoLembrete);
  }
  
  function ordenar() {
    let ordenarOuNao = Number(prompt.question("Insira 1 para ordenar lembretes com o estado 'A fazer', 2 para ordenar com 'Feito' ou 3 para seguir em frente. "));
    
    while (ordenarOuNao >= 1 && ordenarOuNao <= 3) {
      if (ordenarOuNao === 1) {
        let ordenaPorNomeOuData = Number(prompt.question("Insira 1 para ordenar lembretes 'A fazer' por nome ou 2 para ordenar por data. "));
    
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
            console.log("Não há lembretes com o estado 'A fazer'.");
          }
        }
      }
    
      if (ordenarOuNao === 2) {
        let ordenaPorNomeOuData = Number(prompt.question("Insira 1 para ordenar lembretes 'Feito' por nome ou 2 para ordenar por data. "));
    
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
            console.log("Não há lembretes com o estado 'Feito'.");
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
            console.log("Não há lembretes com o estado 'Feito'.");
          }
        }
      }
    
      if (ordenarOuNao === 3) {
        console.log("Você escolheu seguir em frente.");
        break;
      }
    
      ordenarOuNao = Number(prompt.question("Insira 1 para ordenar lembretes com o estado 'A fazer', 2 para ordenar com 'Feito' ou 3 para seguir em frente. "));
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
      novaSituacao = Number(prompt.question("Para definir a nova situação do lembrete, digite 1 para 'Feito' ou 2 para 'A fazer': "));
      if (novaSituacao === 1 || novaSituacao === 2) {
        break;
      } else {
        console.log("Opção inválida. Por favor, digite 1 ou 2.");
      }
    }
  
    if (novaSituacao === 1) {
      novaSituacao = "Feito";
    }
  
    if (novaSituacao === 2) {
      novaSituacao = "A fazer";
    }
  
    let novasInformacoes = prompt.question("Insira as novas informações para o lembrete: ");
  
    listaDeLembretes[indice] = [novoNome, novaData, novaSituacao, novasInformacoes];
    console.log("Lembrete alterado com sucesso!");
  }
  
  //Foi feita uma alteração para que na hora de visualizar os lembretes apareça o número correspondente ao lembrete. (Matheus)
  function visualizarLembrete() {
      for (let i = 0; i < listaDeLembretes.length; i++) {
          console.log(`[${i + 1}] Título: ${listaDeLembretes[i][0]}`);
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
//Adicionada uma ordem de parada no momento em que um lembrete é excluído(Rodrigo)
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
              console.log('Lembrete excluído com sucesso!')
              break;
          }
      }
  }
