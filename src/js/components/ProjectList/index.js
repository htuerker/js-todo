// import { retrieveProjects } from '../localStorage';
import Project from './Project';
import Todo from '../TodoList/Todo';
import { projects } from '../../mock';

export default function ProjectList() {
  const projects = retrieveProjects();
  return projects.map((project) => project.render());
}

function retrieveProjects() {
  return projects;
}
