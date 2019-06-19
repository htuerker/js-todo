export default class Todo {
  constructor(title) {
    this.id = this.uniqueId();
    this.title = title;
  }

  render() {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-tab";
    todoDiv.id = "todo-" + this.id;
    todoDiv.innerHTML = this.title;
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
