console.log("mentor.js carregado");

const mentorForm = document.querySelector("#mentorForm");
const mentorInput = document.querySelector("#mentorInput");
const mentorMessages = document.querySelector("#mentorMessages");
const clearMentorButton = document.querySelector("#clearMentorButton");

let mentorHistory = loadData("mentorbox:mentorHistory") || [];

function saveMentorHistory() {
  saveData("mentorbox:mentorHistory", mentorHistory);
}

function getMentorResponse(userMessage) {
  const message = userMessage.toLowerCase();

  if (message.includes("ansioso") || message.includes("ansiedade")) {
    return "Pare por 2 minutos. Respire fundo, solte devagar e escolha apenas uma tarefa pequena para começar.";
  }

  if (message.includes("estudar") || message.includes("estudo")) {
    return "Use um ciclo simples: 25 minutos de foco, 5 minutos de pausa. Depois registre o que aprendeu em uma frase.";
  }

  if (message.includes("meta") || message.includes("objetivo")) {
    return "Uma meta ruim é vaga. Transforme em algo mensurável: o que será feito, quando e por quanto tempo.";
  }

  if (message.includes("tarefa") || message.includes("organizar")) {
    return "Liste tudo que está pendente. Depois escolha só 3 prioridades para hoje. O resto é ruído.";
  }

  if (message.includes("dinheiro") || message.includes("finança") || message.includes("financas")) {
    return "Antes de cortar gastos, anote tudo que entra e sai. Sem medir, você só está chutando.";
  }

  if (message.includes("carreira") || message.includes("trabalho")) {
    return "Escolha uma habilidade principal, pratique todos os dias e monte pequenos projetos para provar que sabe fazer.";
  }

  return "Boa pergunta. Comece quebrando isso em uma ação pequena que você consegue executar hoje.";
}

function renderMentorMessages() {
  mentorMessages.innerHTML = "";

  if (mentorHistory.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Faça uma pergunta sobre estudos, tarefas, metas ou organização.";
    mentorMessages.appendChild(emptyMessage);
    return;
  }

 mentorHistory.forEach((message) => {
  const p = document.createElement("p");
  p.className = message.author === "user" ? "message message--user" : "message message--mentor";

  if (message.author === "user") {
    p.textContent = `Você: ${message.text}`;
  } else {
    p.textContent = `Mentor: ${message.text}`;
  }

  mentorMessages.appendChild(p);
});
}

function addMentorMessage(author, text) {
  const newMessage = {
    id: Date.now(),
    author: author,
    text: text,
  };

  mentorHistory.push(newMessage);
  saveMentorHistory();
  renderMentorMessages();
}

mentorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userMessage = mentorInput.value.trim();

  if (userMessage === "") {
    return;
  }

  addMentorMessage("user", userMessage);

  const mentorResponse = getMentorResponse(userMessage);
  addMentorMessage("mentor", mentorResponse);

  mentorInput.value = "";
  mentorInput.focus();
});

clearMentorButton.addEventListener("click", () => {
  mentorHistory = [];
  saveMentorHistory();
  renderMentorMessages();
});

renderMentorMessages();