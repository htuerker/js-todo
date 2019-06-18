import Todo from "../../TodoList/Todo";
import TodoButton from "../../TodoList/TodoButton";

export default class Project {
  constructor(title, todos) {
    this.title = title;
    this.todos = todos;
  }

  render() {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-tab";

    const title = document.createElement("h2");
    title.innerHTML = this.title;
    projectDiv.appendChild(title);

    if (this.todos) {
        this.todos.forEach((todo) => projectDiv.appendChild(todo.render()));
    }

    projectDiv.appendChild(TodoButton());

    return projectDiv;
  }
}
