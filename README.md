# DevConnect - Gerenciador de Tarefas

Um sistema dinâmico, responsivo e moderno para gerenciamento de tarefas cotidianas, desenvolvido como parte da avaliação do curso sobre Front-End. O projeto foi estruturado utilizando boas práticas de HTML5 semântico, estilização com Bootstrap 5 e manipulação dinâmica do DOM com JavaScript.

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página.
* **CSS3:** Customizações visuais específicas de cores.
* **Bootstrap 5.3:** Framework de estilização, utilizando o sistema de grid responsivo e componentes de interface (cards, badges, list-groups).
* **Bootstrap Icons:** Ícones modernos integrados aos campos e botões.
* **JavaScript (ES6):** Lógica e manipulação do DOM.

## Critérios 

* **HTML Semântico:** Uso obrigatório e correto das tags `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`.
* **Responsividade:** Tela dividida proporcionalmente no computador (5 colunas para o formulário e 7 para a lista) que se adapta e se empilha automaticamente em telas de celulares.
* **Captura e Validação de Dados:** O sistema captura as entradas, limpa espaços em branco nas extremidades com `.trim()` e valida se o campo está vazio, aplicando a classe `is-invalid` do Bootstrap para feedback visual instantâneo.
* **Manipulação Dinâmica do DOM:** Adição de novos itens à lista em tempo de execução através do método `appendChild()`, sem recarregamento da página (`preventDefault()`).
* **Remoção de Elementos:** Cada tarefa é gerada com um botão de exclusão exclusivo (`remove()`), que apaga apenas o elemento correspondente ao clique.

## 📂 Estrutura do Projeto

```text
├── CSS/
│   └── style.css        # Estilizações customizadas e classes de cor
├── js/
│   └── app.js           # Lógica, validações e manipulação do DOM
├── index.html           # Estrutura principal do sistema
└── README.md            # Documentação do projeto