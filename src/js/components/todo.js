import Swal from 'sweetalert2';

export default function newTodoForm() {
  Swal.fire({
    html:
    '<input id="title" class="swal2-input" placeholder="Title">'
    ,
    focusConfirm: false,
    confirmButtonText: 'Add To-do',
    preConfirm: () => {
      newTodo();
    }
  });
}

function newTodo() {
  const newTodo = document.createElement("div");
  newTodo.innerHTML = document.getElementById("title").value;
  newTodo.className = "to-do";
  const projects = document.getElementById('to-dos');
  projects.appendChild(newTodo);
}
