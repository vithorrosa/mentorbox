# MentorBox
## Projeto online

Acesse: https://vithorrosa.github.io/mentorbox/

MentorBox é uma aplicação web simples para organizar tarefas, metas e receber orientações simuladas de um mentor digital.

## Versão

v1.0.0 — MVP funcional com tarefas, metas, mentor simulado, persistência local e testes manuais documentados.

## Objetivo

Este projeto foi criado para praticar fundamentos de front-end com HTML, CSS e JavaScript puro, incluindo manipulação de DOM, eventos, estado da aplicação e persistência com localStorage.

## Funcionalidades

- Criar tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Criar metas
- Excluir metas
- Ver resumo no dashboard
- Conversar com um mentor simulado 
- Persistir dados no navegador com localStorage
- Limpar histórico do mentor
- - Acompanhar progresso das metas com atual/alvo e porcentagem

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript
- localStorage

## Estrutura de pastas

````text
mentorbox/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── storage.js
│   ├── tasks.js
│   ├── goals.js
│   ├── mentor.js
│   └── main.js
└── assets/
    └── .gitkeep

````

## Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

- Estruturação de uma aplicação web com HTML, CSS e JavaScript puro
- Manipulação do DOM com `querySelector`, `createElement` e `appendChild`
- Eventos de formulário com `addEventListener`
- Prevenção do comportamento padrão com `event.preventDefault()`
- Criação, atualização e exclusão de dados em arrays
- Persistência de dados no navegador usando `localStorage`
- Serialização e desserialização com `JSON.stringify()` e `JSON.parse()`
- Organização de código em arquivos separados por responsabilidade
- Uso de Git para versionamento
- Publicação do projeto com GitHub Pages

## Próximas melhorias

- Melhorar o design responsivo para celulares
- Adicionar filtros para tarefas pendentes e concluídas
- Criar progresso percentual para metas
- Adicionar tema claro/escuro
- Melhorar o mentor simulado com mais categorias de respostas
- Refatorar o código para reduzir duplicação


## Parte visual 

- Interface responsiva com layout em cards
- Dashboard visual para tarefas e metas
- Link para o repositório no GitHub


## Qualidade e testes

O projeto possui um plano de testes manuais documentado em [`TESTES.md`](./TESTES.md).

Os testes cobrem tarefas, metas, mentor simulado, persistência com localStorage e responsividade básica.