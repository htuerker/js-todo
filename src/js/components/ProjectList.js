import Project from './Project';
import Todo from './Todo';

export default function ProjectList() {
  const projects = retrieveProjects();
  return projects.map((project) => project.render());
}

function retrieveProjects() {
  return [ new Project('project 1')];
}
