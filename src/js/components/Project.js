import Todo from './Todo';
import NewTodoButton from './NewTodoButton';

export default class Project {
  constructor(title, todos) {
    this.id = this.uniqueId();
    this.title = title;
    this.todos = todos;
  }

  render() {
    const title = document.createElement("h2");
    title.innerHTML = this.title;

    const header = document.createElement("div");
    header.className = "header";
    header.appendChild(title);
    header.appendChild(NewTodoButton(this.id));

    const projectDiv = document.createElement("div");
    projectDiv.className = "project-card";
    projectDiv.setAttribute('id', 'project-' + this.id);
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
