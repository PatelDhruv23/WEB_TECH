let addTaskBtn = document.getElementById("add-task-btn");
let taskInput = document.getElementById("task-input");

addTaskBtn.addEventListener("click", todo);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    todo();
  }
});

function todo() {
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter task first");
  } else {
    let taskItem = document.createElement("div");

    taskItem.className = "task-item";

    let span = document.createElement("span");
    span.className = "list-item";
    span.textContent = taskValue;

    let removeTaskBtn = document.createElement("button");
    removeTaskBtn.className = "delete-btn";
    removeTaskBtn.textContent = "Delete Task";

    let taskList = document.getElementById("task-list");

    taskList.appendChild(taskItem);
    taskItem.appendChild(span);
    taskItem.appendChild(removeTaskBtn);

    removeTaskBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskInput.value = "";
  }
}