import Swal from 'sweetalert2';

export default function newProjectForm() {
    Swal.fire({
        html:
        '<input id="title" class="swal2-input" placeholder="Title">'
        ,
        focusConfirm: false,
        confirmButtonText: 'Add Project',
        preConfirm: () => {
          newProject();
        }
    });
}

function newProject() {
    const newProject = document.createElement("div");
    newProject.innerHTML = document.getElementById("title").value;
    newProject.className = "project-tab";
    const projects = document.getElementById('projects');
    projects.appendChild(newProject);
}
