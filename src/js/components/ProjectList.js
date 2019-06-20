import { retrieveProjects } from '../LocalStorage';
import Project from './Project';
import Todo from './Todo';

export default function ProjectList() {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    const projects = retrieveProjects();
    const projectsDiv = document.createElement('div');
    projectsDiv.className = 'projects';
    projectsDiv.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - projectsDiv.offsetLeft;
        scrollLeft = projectsDiv.scrollLeft;
    });
    projectsDiv.addEventListener('mouseleave', () => {
        isDown = false;
    });
    projectsDiv.addEventListener('mouseup', () => {
        isDown = false;
    });
    projectsDiv.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - projectsDiv.offsetLeft;
        const walk = (x - startX) * 1;
        projectsDiv.scrollLeft = scrollLeft - walk;
    });

    projects.forEach((project) => {
        Object.setPrototypeOf(project, Project.prototype)
        projectsDiv.appendChild(project.render());
    });

    const nextButton = document.createElement('i');
    nextButton.className = "fas fa-arrow-right"
    nextButton.id = 'next-btn';
    nextButton.addEventListener('click', () => plusSlider(1));

    const prevButton = document.createElement('i');
    prevButton.className = "fas fa-arrow-left"
    prevButton.id = 'prev-btn';
    prevButton.addEventListener('click', () => plusSlider(-1));

    projectsDiv.prepend(nextButton);
    projectsDiv.prepend(prevButton);

    return projectsDiv;
}

function plusSlider(n) {
    let x = document.querySelector(".projects");
    let target = x.scrollLeft + 342 * n;

    let prev = 0;
    var id = setInterval(frame, 3);
    function frame() {
        if(n > 0) {
            if (x.scrollLeft >= target || x.scrollLeft == x.scrollWidth) {
                clearInterval(id);
            }
        } else {
            if (x.scrollLeft <= target || x.scrollLeft == 0) {
                clearInterval(id);
            }
        }

        let current = x.scrollLeft;
        x.scrollLeft += (9 * n);
        if(x.scrollLeft == prev) {
            clearInterval(id);
        } else {
            prev = current;
        }
    }
}
