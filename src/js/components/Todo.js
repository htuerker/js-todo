import { updateTodo } from '../LocalStorage';
import PriorityBullet from "./PriorityBullet";
import DoneCheckbox from "./DoneCheckbox";
import DescriptionTextarea from "./DescriptionTextarea";

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
    updateTodo(this);
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
    const title = document.createElement("p");
    title.innerHTML = this.title;
    title.prepend(PriorityBullet(this));
    title.addEventListener('click', () => this.toggleDescription());

    const header = document.createElement("div");
    header.className = "header"
    header.appendChild(title);
    header.appendChild(DoneCheckbox(this));

    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-block";
    todoDiv.id = "todo-" + this.id;
    todoDiv.appendChild(header);
    todoDiv.appendChild(DescriptionTextarea(this));

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
