# 🛒 Lista de Compras Dinâmica

Um projeto web simples e interativo de uma **Lista de Compras**, desenvolvido com HTML, CSS e JavaScript puro (Vanilla JS). O objetivo é permitir que os utilizadores adicionem novos itens à lista, marquem-nos como concluídos (com texto riscado e estilo personalizado) e interajam dinamicamente com os elementos da página.

---

## 🚀 Funcionalidades

- **Adicionar Itens:** Insere novos produtos na lista de compras através de um campo de texto e um botão.
- **Marcar como Concluído (Check):** Permite assinalar caixas de seleção personalizadas (`checkbox`) para indicar que o item já foi comprado/selecionado.
- **Gestão de Eventos:** Utilização de escutas de eventos (`addEventListener`) para lidar com a interatividade dos elementos gerados dinamicamente.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página e dos componentes de input.
- **CSS3:** Estilização moderna, uso de variáveis, reset de aparência de inputs nativos (`appearance: none`) e classes de estado (`.inputCheckado`, `.riscado`).
- **JavaScript (ES6+):** Manipulação do DOM (`createElement`, `classList.toggle`, `append`) e gestão de eventos do utilizador.

---

## 📂 Estrutura do Projeto

```text
/
├── index.html       # Estrutura principal da página
├── style.css        # Estilos visuais e personalização dos componentes
└── scripts.js       # Lógica de manipulação do DOM e interatividade