// Cria uma lista vazia pra guardar os itens
let GerenciadorLista = [];

// Loop infinito pra ficar perguntando até o usuario decidir sair
while (true) 
  {
  /* 
  Mostra o menu e guarda a escolha do usuario
  variaveis ja definidas como prompt pra deixar o processo mais rapido e facil
  */
  let acao = prompt(
    "Escolha uma ação:\n1 - Adicionar item\n2 - Remover item\n3 - Remover último item\n4 - Ver lista\n0 - Sair"
  );


  // Se digitar "0" ou fechar o prompt, a gente sai do loop
  if (acao === "0" || acao === null) {
    alert("Encerrando o gerenciador. Até mais!");
    break;
  }

  // Aqui a gente vê o que o usuario escolheu (feito baseado na aula dos dias da semana)
  switch (acao) {
    case "1":
      // Pede o nome do item pra adicionar
      let novoItem = prompt("Digite o nome do item para adicionar:");

      // se o novo item for diferente de nada então esse item vai ser adicionado
      // se o usuario digitar nada o item nao vai ser adicionado
      if (novoItem !== "" && novoItem !== null) {
        GerenciadorLista[GerenciadorLista.length] = novoItem;
        alert('Item "' + novoItem + '" adicionado à lista.');
      } else {
        alert("Item inválido.");
      }
      break;

    case "2":
      // Pede o nome do item que o usuário quer remover
      let itemRemover = prompt("Digite o nome exato do item para remover:");
      let encontrado = false;

      // utiliza o laço for para percorrer toda a lista pra procurar o item 
      for (let i = 0; i < GerenciadorLista.length; i++) {
        if (GerenciadorLista[i] === itemRemover) {
          // Se achou, remove com splice e marca como encontrado
          /*
          .splice() serve pra remover, adicionar ou trocar elementos dentro de um array. 
          No seu caso, a gente usou ele pra remover um item específico da lista
          */
          GerenciadorLista.splice(i, 1);
          alert('Item "' + itemRemover + '" removido.');
          encontrado = true;
          break;
        }
      }

      // Se não achou, manda o aviso
      if (!encontrado) {
        alert('Item "' + itemRemover + '" não encontrado.');
      }
      break;

    case "3":
      // Remove o ultimo item da lista (tipo uma pilha)
      if (GerenciadorLista.length > 0) {
        let removido = GerenciadorLista.pop();
        alert('Último item removido: "' + removido + '"');
      } else {
        alert("A lista está vazia.");
      }
      break;

    case "4":
      // Mostra todos os itens da lista
      if (GerenciadorLista.length > 0) {
        let texto = "";
        for (let i = 0; i < GerenciadorLista.length; i++) {
          texto += GerenciadorLista[i] + "\n";
        }
        alert("Lista atual:\n" + texto);
      } else {
        alert("A lista está vazia.");
      }
      break;

    default:
      // Se digitar algo que não tá no menu, um aviso vai aparecer
      alert("Opção inválida. Tente novamente.");
  }
}
