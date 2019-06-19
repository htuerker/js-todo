import Todo from './Todo';
import TodoButton from './TodoButton';

export default class Project {
  constructor(title, todos) {
    this.id = this.uniqueId();
    this.title = title;
    this.todos = todos;
  }

  render() {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-card";
    projectDiv.setAttribute('id', 'project-' + this.id);

    const header = document.createElement("div");
    header.className = "header";
    const title = document.createElement("h2");
    title.innerHTML = this.title;
    header.appendChild(title);
    const button = TodoButton(this.id);
    header.appendChild(button);

    projectDiv.appendChild(header);

    if (this.todos) {
      this.todos.forEach((todo) => {
        todo.prototype = Todo.prototype;
        projectDiv.appendChild(todo.render());
      });
    }

    return projectDiv;
  }

  uniqueId() {
    if(!localStorage['project_id']) {
      localStorage['project_id'] = 1;
    } else {
      localStorage['project_id']++;
    }
    return localStorage['project_id'];
  }
}
