import Project from './Project';
import Todo from './Todo';

export default function ProjectList() {
  const projects = retrieveProjects();
  return projects.map((project) => project.render());
}

function retrieveProjects() {
  return [  new Project('project 1', [new Todo('todo1', 'desc1'), new Todo('todo2', 'desc2')]),
            new Project('project 2', [new Todo('todo1', 'desc1'), new Todo('todo2', 'desc2')]),
            new Project('project 3', [new Todo('todo1', 'desc1'), new Todo('todo2', 'desc2')]),
            new Project('project 4', [new Todo('todo1', 'desc1'), new Todo('todo2', 'desc2')])];
}
