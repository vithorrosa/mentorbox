# Plano de Testes Manuais — MentorBox

Este documento descreve os testes manuais realizados no projeto MentorBox.

O objetivo é validar as principais funcionalidades da aplicação e reduzir risco de regressão após alterações.

## Ambiente de teste

- Navegador: Google Chrome
- Execução local: Live Server
- Deploy: GitHub Pages
- Armazenamento: localStorage

## Checklist geral

- [ ] Aplicação abre sem erro no console
- [ ] Layout principal carrega corretamente
- [ ] Dashboard aparece
- [ ] Seção de tarefas aparece
- [ ] Seção de metas aparece
- [ ] Seção do mentor aparece

---

## Testes de tarefas

### CT-001 — Criar tarefa

**Passos:**

1. Digitar uma tarefa no campo de tarefas.
2. Clicar em "Adicionar".

**Resultado esperado:**

- A tarefa deve aparecer na lista.
- O campo deve ser limpo após adicionar.
- O dashboard deve atualizar o resumo de tarefas.

---

### CT-002 — Impedir tarefa vazia

**Passos:**

1. Deixar o campo de tarefa vazio.
2. Clicar em "Adicionar".

**Resultado esperado:**

- Nenhuma tarefa vazia deve ser criada.

---

### CT-003 — Concluir tarefa

**Passos:**

1. Criar uma tarefa.
2. Marcar o checkbox da tarefa.

**Resultado esperado:**

- A tarefa deve aparecer como concluída.
- O dashboard deve atualizar tarefas concluídas e pendentes.

---

### CT-004 — Excluir tarefa

**Passos:**

1. Criar uma tarefa.
2. Clicar em "Excluir".

**Resultado esperado:**

- A tarefa deve ser removida da lista.
- O dashboard deve ser atualizado.

---

### CT-005 — Filtrar tarefas

**Passos:**

1. Criar três tarefas.
2. Marcar uma como concluída.
3. Clicar em "Todas".
4. Clicar em "Pendentes".
5. Clicar em "Concluídas".

**Resultado esperado:**

- "Todas" deve mostrar todas as tarefas.
- "Pendentes" deve mostrar apenas tarefas não concluídas.
- "Concluídas" deve mostrar apenas tarefas concluídas.

---

### CT-006 — Persistência de tarefas

**Passos:**

1. Criar tarefas.
2. Concluir uma tarefa.
3. Recarregar a página com F5.

**Resultado esperado:**

- As tarefas devem continuar na tela.
- O estado concluído deve ser mantido.

---

## Testes de metas

### CM-001 — Criar meta com alvo

**Passos:**

1. Digitar o nome da meta.
2. Digitar um alvo numérico.
3. Clicar em "Adicionar meta".

**Resultado esperado:**

- A meta deve aparecer na lista.
- O progresso deve iniciar em 0/alvo.
- A porcentagem deve iniciar em 0%.

---

### CM-002 — Impedir meta inválida

**Passos:**

1. Deixar o nome da meta vazio ou alvo inválido.
2. Tentar adicionar.

**Resultado esperado:**

- A meta não deve ser criada.

---

### CM-003 — Avançar progresso da meta

**Passos:**

1. Criar uma meta com alvo 10.
2. Clicar no botão "+1".

**Resultado esperado:**

- O progresso deve ir para 1/10.
- A porcentagem deve mostrar 10%.

---

### CM-004 — Impedir progresso acima do alvo

**Passos:**

1. Criar uma meta com alvo 3.
2. Clicar em "+1" várias vezes.

**Resultado esperado:**

- O progresso máximo deve ser 3/3.
- O progresso não deve passar do alvo.

---

### CM-005 — Excluir meta

**Passos:**

1. Criar uma meta.
2. Clicar em "Excluir".

**Resultado esperado:**

- A meta deve ser removida da lista.
- O dashboard deve ser atualizado.

---

### CM-006 — Persistência de metas

**Passos:**

1. Criar uma meta.
2. Avançar o progresso.
3. Recarregar a página com F5.

**Resultado esperado:**

- A meta deve continuar na tela.
- O progresso deve ser mantido.

---

## Testes do mentor

### CMENT-001 — Enviar mensagem ao mentor

**Passos:**

1. Digitar uma mensagem no campo do mentor.
2. Clicar em "Enviar".

**Resultado esperado:**

- A mensagem do usuário deve aparecer.
- Uma resposta do mentor deve aparecer.

---

### CMENT-002 — Resposta por palavra-chave: estudo

**Mensagem:**

```text
Como posso estudar melhor?