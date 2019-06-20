import Todo from "./Todo";

export default function DescriptionTextarea(todo) {
    const todoDescription = document.createElement("textarea");
    todoDescription.innerHTML = todo.description;
    todoDescription.className = "todo-description";
    todoDescription.id = "todo-description-" + todo.id;

    return todoDescription;
}
