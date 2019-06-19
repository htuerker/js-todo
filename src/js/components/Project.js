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
    projectDiv.className = "project-tab";
    projectDiv.setAttribute('id', 'project-' + this.id);

    const title = document.createElement("h2");
    title.innerHTML = this.title;
    projectDiv.appendChild(title);

    const button = TodoButton(this.id);
    projectDiv.appendChild(button);

    if (this.todos) {
      this.todos.forEach((todo) => {
        todo.prototype = Todo.prototype;
        console.log(todo);
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

