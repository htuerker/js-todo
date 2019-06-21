import Swal from 'sweetalert2';
import Project from "./Project";
import { saveProject } from '../LocalStorage';

export default function NewProjectButton() {
    const newProjectButton = document.createElement('button');
    newProjectButton.innerHTML = 'New Project';
    newProjectButton.className = "new-project-btn"
    newProjectButton.addEventListener('click', () => ProjectForm());

    return newProjectButton;
}

function ProjectForm() {
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
  const newProject = new Project(document.getElementById('title').value);
  const projectsDiv = document.querySelector('.projects');
  projectsDiv.scrollLeft = 0;
  projectsDiv.prepend(newProject.render());
  saveProject(newProject);
}
