const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  span.textContent = text;
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete";

  checkbox.addEventListener("change", () => {
    span.classList.toggle("done");
  });

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
