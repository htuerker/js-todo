export default function DescriptionTextarea(todo) {
    const todoDescription = document.createElement("textarea");
    todoDescription.innerHTML = todo.description;

    return todoDescription;
}
