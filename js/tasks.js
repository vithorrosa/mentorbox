console.log("tasks.js carregado");

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const taskSummary = document.querySelector("#taskSummary");
const filterButtons = document.querySelectorAll(".filter-button");

let tasks = loadData("mentorbox:tasks", []);
let currentFilter = "all";

function saveTasks() {
  saveData("mentorbox:tasks", tasks);
}

function updateTaskSummary() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  if (totalTasks === 0) {
    taskSummary.textContent = "Nenhuma tarefa cadastrada ainda.";
    return;
  }

  taskSummary.textContent = `Você tem ${totalTasks} tarefa(s): ${completedTasks} concluída(s) e ${pendingTasks} pendente(s).`;
}

function getFilteredTasks() {
  if (currentFilter === "pending") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = getFilteredTasks();

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "list-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.className = "list-item__text";
    span.textContent = task.title;

    if (task.completed) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";
    deleteButton.className = "button button--danger";

    checkbox.addEventListener("change", () => {
      toggleTask(task.id);
    });

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });

  updateTaskSummary();
}

function addTask(title) {
  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

function toggleTask(taskId) {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed,
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);

  saveTasks();
  renderTasks();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (title === "") {
    return;
  }

  addTask(title);

  taskInput.value = "";
  taskInput.focus();
});

renderTasks();