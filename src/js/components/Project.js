import Todo from './Todo';
import NewTodoButton from './NewTodoButton';
import RemoveButton from './RemoveButton';

function uniqueId() {
  if (!localStorage.project_id) {
    localStorage.project_id = 1;
  } else {
    localStorage.project_id = parseInt(localStorage.project_id, 10) + 1;
  }
  return localStorage.project_id;
}

export default class Project {
  constructor(title, todos = []) {
    this.id = uniqueId();
    this.title = title;
    this.todos = todos;
  }

  render() {
    const title = document.createElement('h2');
    title.innerHTML = this.title;

    const header = document.createElement('div');
    header.className = 'header';
    header.appendChild(title);
    header.appendChild(NewTodoButton(this));
    header.appendChild(RemoveButton(this));

    const content = document.createElement('div');
    content.className = 'content';
    if (this.todos) {
      this.todos.forEach((todo) => {
        Object.setPrototypeOf(todo, Todo.prototype);
        content.appendChild(todo.render());
      });
    }

    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-card';
    projectDiv.setAttribute('id', `project-${this.id}`);
    projectDiv.appendChild(header);
    projectDiv.appendChild(content);

    return projectDiv;
  }
}
