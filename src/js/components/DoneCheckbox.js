export default function DoneCheckbox(todo) {
    const doneCheckboxDiv = document.createElement("div");
    const checkbox = document.createElement('input');
    checkbox.id = 'check-' + todo.id;
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.addEventListener('change', () => todo.toggleDone());
    const label = document.createElement('label');
    label.setAttribute('for', 'check-' + todo.id);
    const span = document.createElement('span');
    label.appendChild(span);
    doneCheckboxDiv.appendChild(checkbox);
    doneCheckboxDiv.appendChild(label);

    return doneCheckboxDiv;
}
