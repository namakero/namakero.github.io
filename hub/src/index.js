//toDolist

let toDo = () => {
  let taskArray = [];
  let id = 0;

  const enter = document.getElementById("enter");
  enter.addEventListener("click", () => {
    const inputText = document.getElementById("inputText");
    const content = inputText.value;
    inputText.value = "";
    const task = {
      content: content,
      id: id,
    };
    id++;
    taskArray.push(task);
    update();
  });

  let update = () => {
    const taskList = document.getElementById("list1");
    while (taskList.firstChild !== null) {
      taskList.removeChild(taskList.firstChild);
    }
    for (let i = 0; i < taskArray.length; i++) {
      const task = taskArray[i];


      const taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.append(task.content);

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.textContent = "削除";
      deleteButton.addEventListener("click", () => {
        taskArray = taskArray.filter((t) => t.id !== task.id);
        update();
      });
      taskDiv.append(deleteButton);
      taskList.append(taskDiv);
    }
  }
}

//counter

let counter = () => {
  let count = 0;
  const countUp = document.getElementById("countUp");
  const countDi = document.getElementById("countDi");
  const countDo = document.getElementById("countDo");
  const countRe = document.getElementById("countRe");

  countUp.addEventListener("click", function () {
    count += 1;
    if (count > 99999) {
      count = 0;
    }
    countDi.innerHTML = count;
  })

  countDo.addEventListener("click", function () {
    count -= 1;
    if (count < 0) {
      count = 0;
    }
    countDi.innerText = count;
  })

  countRe.addEventListener("click", function () {
    count = 0;
    countDi.innerText = count;
  })
}

counter()
toDo()