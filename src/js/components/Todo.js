const priorityColors = ['LightBlue', 'khaki', 'LightCoral'];

export default class Todo {
  constructor(title, description, priority) {
    this.id = this.uniqueId();
    this.title = title;
    this.description = description;
    this.done = false;
    this.priority = priority;
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

    const priorityBullet = document.createElement('span');
    priorityBullet.innerHTML = '•';
    priorityBullet.className = 'priority-bullet';
    priorityBullet.style.color = priorityColors[this.priority];
    todoTitle.prepend(priorityBullet);
    todoTitle.addEventListener('click', () => this.toggleDescription());
    header.appendChild(todoTitle);

    // To-Do extract it into another component
    const doneCheckboxDiv = document.createElement("div");
    const checkbox = document.createElement('input');
    checkbox.id = 'check-' + this.id;
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => this.toggleDone());
    const label = document.createElement('label');
    label.setAttribute('for', 'check-' + this.id);
    const span = document.createElement('span');
    label.appendChild(span);
    doneCheckboxDiv.appendChild(checkbox);
    doneCheckboxDiv.appendChild(label);

    header.appendChild(doneCheckboxDiv);
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
