import Swal from 'sweetalert2';
import Project from "./Project";

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
    const newProject = new Project(1212, "hello", []);
    
    const projectsDiv = document.getElementById('projects');
    projectsDiv.appendChild(newProject.render());
}
