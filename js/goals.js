console.log("goals.js carregado");

const goalForm = document.querySelector("#goalForm");
const goalInput = document.querySelector("#goalInput");
const goalList = document.querySelector("#goalList");
const goalSummary = document.querySelector("#goalSummary");
const goalTargetInput = document.querySelector("#goalTargetInput");

let goals = loadData("mentorbox:goals", []);

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

function calculateGoalProgress(goal) {
  if (!goal.target || goal.target <= 0) {
    return 0;
  }

  return Math.round((goal.current / goal.target) * 100);
}

function normalizeGoal(goal) {
  return {
    id: goal.id,
    title: goal.title,
    current: goal.current || 0,
    target: goal.target || 1,
  };
}

function renderGoals() {
  goalList.innerHTML = "";

  goals = goals.map(normalizeGoal);

  goals.forEach((goal) => {
    const li = document.createElement("li");
    li.className = "list-item";

    const span = document.createElement("span");
    span.className = "list-item__text";

    const progress = calculateGoalProgress(goal);

    span.textContent = `${goal.title} — ${goal.current}/${goal.target} (${progress}%)`;

    const progressButton = document.createElement("button");
    progressButton.textContent = "+1";
    progressButton.type = "button";
    progressButton.className = "button";

    progressButton.addEventListener("click", () => {
      incrementGoal(goal.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";
    deleteButton.className = "button button--danger";

    deleteButton.addEventListener("click", () => {
      deleteGoal(goal.id);
    });

    li.appendChild(span);
    li.appendChild(progressButton);
    li.appendChild(deleteButton);

    goalList.appendChild(li);
  });

  saveGoals();
  updateGoalSummary();
}

function addGoal(title, target) {
  const newGoal = {
    id: Date.now(),
    title: title,
    current: 0,
    target: target,
  };

  goals.push(newGoal);
  saveGoals();
  renderGoals();
}

function incrementGoal(goalId) {
  goals = goals.map((goal) => {
    if (goal.id === goalId) {
      const nextCurrent = Math.min(goal.current + 1, goal.target);

      return {
        ...goal,
        current: nextCurrent,
      };
    }

    return goal;
  });

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
  const target = Number(goalTargetInput.value);

  if (title === "" || target <= 0) {
    return;
  }

  addGoal(title, target);

  goalInput.value = "";
  goalTargetInput.value = "";
  goalInput.focus();
});

renderGoals();