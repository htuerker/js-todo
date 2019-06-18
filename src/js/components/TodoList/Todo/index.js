export default class Todo {
  constructor(title) {
    this.title = title;
  }

  render() {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-tab";
    todoDiv.innerHTML = this.title;
    return todoDiv;
  }
}
