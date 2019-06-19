export default class Todo {
  constructor(title, description) {
    this.id = this.uniqueId();
    this.title = title;
    this.description = description;
    this.done = false;
  }

  toggleDone() {
    this.done = !this.done;
  }

  toggleDescription() {
      const description = document.getElementById("todo-description-" + this.id);
    if (description.style.display == "block") {
        description.setAttribute("style", "");
    } else {
        description.style.display = "block";
    }
  }

  render() {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-block";
    todoDiv.id = "todo-" + this.id;

    const header = document.createElement("div");
    header.className = "header"
    const todoTitle = document.createElement("p");
    todoTitle.innerHTML = this.title;
    todoTitle.addEventListener('click', () => this.toggleDescription());
    header.appendChild(todoTitle);

    const doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");
    doneCheckbox.addEventListener('change', () => this.toggleDone());
    header.appendChild(doneCheckbox);

    todoDiv.appendChild(header);

    const todoDescription = document.createElement("div");
    todoDescription.innerHTML = this.description;
    todoDescription.className = "todo-description";
    todoDescription.id = "todo-description-" + this.id;
    todoDiv.appendChild(todoDescription);

    return todoDiv;
  }

  uniqueId() {
    if(!localStorage['todo_id']) {
      localStorage['todo_id'] = 1;
    } else {
      localStorage['todo_id']++;
    }
    return localStorage['todo_id'];
  }
}
