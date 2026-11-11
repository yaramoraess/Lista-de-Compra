const inputAdd = document.querySelector(".inputAdicionarItem");
const botaoAdd = document.querySelector(".botaoAdicionarItem");
const divContainer = document.querySelector(".containerCheck");

botaoAdd.addEventListener("click", () => {
  const valor_input = inputAdd.value;

  // Validação opcional: não criar item vazio
  if (valor_input === "") return;
  // 1. Cria a div principal
  const caixa_novo_item = document.createElement("div");
  caixa_novo_item.classList.add("caixaCheck");
  // 2. Cria o input checkbox
  const input_novo_item = document.createElement("input");
  input_novo_item.setAttribute("type", "checkbox");

  // 3. Cria o label
  const label_novo_item = document.createElement("label");
  label_novo_item.classList.add("conteudoCheck");
  label_novo_item.setAttribute("for", "itemListaDeCompras");

// Criando uma div que vai ter o svg inteiro. O innerHtml serve para pegar o Html puro e colocar no aplicação sem precisar ficar criando.
  const svgContainer = document.createElement("div");
  svgContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#374151" fill="none" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18.8516 16.3743L19.5 6H4.5L5.14839 16.3743C5.315 19.0401 5.39831 20.373 6.26426 21.1865C7.13021 22 8.46571 22 11.1367 22H12.8633C15.5343 22 16.8698 22 17.7357 21.1865C18.6017 20.373 18.685 19.0401 18.8516 16.3743Z"></path>
      <path d="M15.5 6H21M15.5 6L15.3721 4.97683C15.1595 3.2762 13.7139 2 12 2C10.2861 2 8.84047 3.2762 8.6279 4.97683L8.5 6M15.5 6H8.5M3 6H8.5"></path>
      <path d="M9.5 11V17M14.5 11V17"></path>
    </svg>
  `;
// Variavel para acessar o svg. Usamos o firstElementChild porque o comando anterior colocou o SVG dentro de uma div temporária que servio apenas de embrulho.
  const svgElement = svgContainer.firstElementChild;

//coloca na div o label e o elemento svg
  caixa_novo_item.append(label_novo_item, svgElement);
//   coloca dentro do label o input com o valor do input
  label_novo_item.append(input_novo_item, valor_input);

//   coloca os elementos dentro de um elemento pai no html
  divContainer.appendChild(caixa_novo_item);
  inputAdd.value = "";
});
