export default class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  render() {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-tab";
    todoDiv.id = "todo-" + this.id;
    todoDiv.innerHTML = this.title;
    const checkedButton = document.createElement('button');
    checkedButton.addEventListener('click', () => alert(this.id));
    todoDiv.appendChild(checkedButton);
    return todoDiv;
  }
}
