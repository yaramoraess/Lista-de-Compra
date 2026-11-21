const inputAdd = document.querySelector(".inputAdicionarItem");
const botaoAdd = document.querySelector(".botaoAdicionarItem");
const divContainer = document.querySelector(".containerCheck");

// Pegar o svg da lixeira e o elemento que será excluida
const lixeiras = document.querySelectorAll(".excluirItem");

// Para adicionar itens na lista
botaoAdd.addEventListener("click", () => {
  const valor_input = inputAdd.value;

  // Validação opcional: não criar item vazio
  if (valor_input === "")
     return;
// Criando o novo item na página
    // 1. Cria a div principal
  const caixa_novo_item = document.createElement("div");
  caixa_novo_item.classList.add("caixaCheck");
    // 2. Cria o input checkbox
  const input_novo_item = document.createElement("input");
  input_novo_item.setAttribute("type", "checkbox");
  input_novo_item.setAttribute("class", "botaocheckbox");
    // 3. Cria o label
  const label_novo_item = document.createElement("label");
  label_novo_item.classList.add("conteudoCheck");
  label_novo_item.setAttribute("for", "itemListaDeCompras");

    // Criando uma div que vai ter o svg inteiro. O innerHtml serve para pegar o Html puro e colocar no aplicação sem precisar ficar criando.
  const svgContainer = document.createElement("div");
  
  svgContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="excluirItem" viewBox="0 0 24 24" width="24" height="24" color="#374151" fill="none" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18.8516 16.3743L19.5 6H4.5L5.14839 16.3743C5.315 19.0401 5.39831 20.373 6.26426 21.1865C7.13021 22 8.46571 22 11.1367 22H12.8633C15.5343 22 16.8698 22 17.7357 21.1865C18.6017 20.373 18.685 19.0401 18.8516 16.3743Z"></path>
      <path d="M15.5 6H21M15.5 6L15.3721 4.97683C15.1595 3.2762 13.7139 2 12 2C10.2861 2 8.84047 3.2762 8.6279 4.97683L8.5 6M15.5 6H8.5M3 6H8.5"></path>
      <path d="M9.5 11V17M14.5 11V17"></path>
    </svg>
  `;
  // Variavel para acessar o svg. Usamos o firstElementChild porque o comando anterior colocou o SVG dentro de uma div temporária que servio apenas de embrulho.
  const svgElement = svgContainer.firstElementChild;

  //Coloca na div o label e o elemento svg
  caixa_novo_item.append(label_novo_item, svgElement);
  //Coloca dentro do label o input com o valor do input
  label_novo_item.append(input_novo_item, valor_input);

  //   coloca os elementos dentro de um elemento pai no html
  divContainer.appendChild(caixa_novo_item);
  
  // Para garantir que o value vai voltar limpo
  inputAdd.value = "";
  // 3. Você chama a função logo após o elemento entrar na tela, passando a nova lixeira (`svgElement`)
  ativarLixeira(svgElement);
});

// Quando a lixeira for clicada o item ser removido
// ForEach é um laço de repetição que passa por cada uma das lixeiras e cria a "variavel" lixeira
function ativarLixeira(lixeira){
  lixeira.addEventListener("click", () => {
    let caixasItem = lixeira.closest(".caixaCheck");

    if (caixasItem) {
      caixasItem.remove();
    }

    // construindo alert

    const item_removido = document.createElement("div");
    item_removido.classList.add("itemExcluido");
    item_removido.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    color="#ffffff"
    fill="none"
    stroke="#ffffff"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round" 
    >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 8V12"></path>
    <path
    d="M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z"
    ></path>
    </svg>
    <span>O item do removido da lista</span>
    <svg  xmlns="http://www.w3.org/2000/svg" width="16"
    height="16" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"></path>
</svg>`;

    divContainer.appendChild(item_removido);
    // Alert sumir apos 3 segundos
    setTimeout(() => {
      item_removido.remove();
    }, 3000);
  });
};

// / 2. Ativa nas lixeiras que já estavam no HTML ao carregar a página
document.querySelectorAll(".excluirItem").forEach((lixeira) => {
  ativarLixeira(lixeira);
});
