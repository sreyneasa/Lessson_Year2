let tasks = [
  { description: "Task 1", priority: 1 },
  { description: "Task 2", priority: 0 },
  { description: "Task 3", priority: 1 },
];
function displayArray(array) {
  let div1 = document.createElement("div");
  div1.classList.add("container");
  for (let value of array) {
    let div2 = document.createElement("div");
    div2.classList.add("item")
    div2.textContent = value.description;

    let color = "red";
    if (value.priority === 0) {
      color = 'gray';
    }
    div2.style.background = color;
    div1.appendChild(div2);
  }
  document.body.appendChild(div1);
}

displayArray(tasks);
