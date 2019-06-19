import Todo from "./Todo";
import TodoButton from "./TodoButton";

export default class Project {
  constructor(id, title, todos) {
    this.id = id;
    this.title = title;
    this.todos = [...todos];
    }

  render() {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-tab";
    projectDiv.setAttribute('id', 'project-' + this.id);

    const title = document.createElement("h2");
    title.innerHTML = this.title;
    projectDiv.appendChild(title);

    if (this.todos) {
        this.todos.forEach((todo) => projectDiv.appendChild(todo.render()));
    }

    projectDiv.appendChild(TodoButton(this.id));

    return projectDiv;
  }
}
