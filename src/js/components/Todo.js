import { updateTodo } from '../LocalStorage';
import PriorityBullet from "./PriorityBullet";
import DoneCheckbox from "./DoneCheckbox";
import DescriptionTextarea from "./DescriptionTextarea";
import RemoveButton from "./RemoveButton";

export default class Todo {
  constructor(title, description, priority, project) {
    this.id = this.uniqueId();
    this.title = title;
    this.description = description;
    this.done = false;
    this.priority = priority;
    this.project = project;
  }

  toggleDone() {
    this.done = !this.done;
    updateTodo(this);
  }

  toggleContent() {
      const content = document.getElementById("todo-content-" + this.id);
    if (content.style.display == "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  }

  render() {
    const title = document.createElement("p");
    title.innerHTML = this.title;
    title.prepend(PriorityBullet(this));
    title.addEventListener('click', () => this.toggleContent());

    const header = document.createElement("div");
    header.className = "header";
    header.appendChild(title);
    header.appendChild(DoneCheckbox(this));

    const content = document.createElement("div");
    content.style.display = "none";
    content.id = "todo-content-" + this.id;
    content.appendChild(DescriptionTextarea(this));
    content.appendChild(RemoveButton(this));

    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-block";
    todoDiv.id = "todo-" + this.id;
    todoDiv.appendChild(header);
    todoDiv.appendChild(content);

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
