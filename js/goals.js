console.log("goals.js carregado");

const goalForm = document.querySelector("#goalForm");
const goalInput = document.querySelector("#goalInput");
const goalList = document.querySelector("#goalList");
const goalSummary = document.querySelector("#goalSummary");

let goals = loadData("mentorbox:goals") || [];

function saveGoals() {
  saveData("mentorbox:goals", goals);
}

function updateGoalSummary() {
  const totalGoals = goals.length;

  if (totalGoals === 0) {
    goalSummary.textContent = "Nenhuma meta cadastrada ainda.";
    return;
  }

  goalSummary.textContent = `Você tem ${totalGoals} meta(s) cadastrada(s).`;
}

function renderGoals() {
  goalList.innerHTML = "";

  goals.forEach((goal) => {
    const li = document.createElement("li");
li.className = "list-item";

    const span = document.createElement("span");
span.className = "list-item__text";
span.textContent = goal.title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
deleteButton.type = "button";
deleteButton.className = "button button--danger";

    deleteButton.addEventListener("click", () => {
      deleteGoal(goal.id);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    goalList.appendChild(li);
  });

  updateGoalSummary();
}

function addGoal(title) {
  const newGoal = {
    id: Date.now(),
    title: title,
  };

  goals.push(newGoal);
  saveGoals();
  renderGoals();
}

function deleteGoal(goalId) {
  goals = goals.filter((goal) => goal.id !== goalId);

  saveGoals();
  renderGoals();
}

goalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = goalInput.value.trim();

  if (title === "") {
    return;
  }

  addGoal(title);

  goalInput.value = "";
  goalInput.focus();
});

renderGoals();