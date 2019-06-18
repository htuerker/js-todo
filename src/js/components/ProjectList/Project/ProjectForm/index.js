import Swal from 'sweetalert2';

export default function ProjectForm() {
  Swal.fire({
    html:
    '<input id="title" class="swal2-input" placeholder="Title">'
    ,
    focusConfirm: false,
    confirmButtonText: 'Add Project',
    preConfirm: () => {
      appendProject();
    }
  });
}

function appendProject() {
  const newProject = document.createElement("div");
  newProject.innerHTML = document.getElementById("title").value;
  newProject.className = "project-tab";
  const projects = document.getElementById('projects');
  projects.appendChild(newProject);
}
