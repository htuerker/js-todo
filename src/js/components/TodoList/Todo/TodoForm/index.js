import Swal from 'sweetalert2';

export default function TodoForm() {
  Swal.fire({
    html:
    '<input id="title" class="swal2-input" placeholder="Title">'
    ,
    focusConfirm: false,
    confirmButtonText: 'Add To-do',
    preConfirm: () => {
      appendTodo();
    }
  });
}

function appendTodo() {
  alert('hello')
}
