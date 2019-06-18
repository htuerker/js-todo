// import { retrieveProjects } from '../localStorage';
import Project from './Project';
import Todo from '../TodoList/Todo';

export default function ProjectList() {
  const projects = retrieveProjects();
  return projects.map((project) => project.render());
}

function retrieveProjects() {
  return [new Project('project 1', [new Todo("dinky winky"), new Todo("lala")]), new Project('project 2'), new Project('project 3')];
}
