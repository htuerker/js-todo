import Project from './components/Project';

const saveProject = (project) => {
  if (localStorage.projects) {
    const projects = JSON.parse(localStorage.projects);
    projects.unshift(project);
    localStorage.projects = JSON.stringify(projects);
  } else {
    localStorage.projects = JSON.stringify([project]);
  }
};

const retrieveProjects = () => {
  if (localStorage.projects) {
    return JSON.parse(localStorage.projects);
  }
  const defaultProject = new Project('Default');
  saveProject(defaultProject);
  return [defaultProject];
};

const updateProject = (project) => {
  if (localStorage.projects) {
    const projects = JSON.parse(localStorage.projects);
    const index = projects.findIndex(p => p.id === project.id);
    projects[index] = project;
    localStorage.projects = JSON.stringify(projects);
  }
};

const updateTodo = (todo) => {
  if (localStorage.projects) {
    const projects = JSON.parse(localStorage.projects);
    const pIndex = projects.findIndex(p => p.id === todo.project);
    const tIndex = projects[pIndex].todos.findIndex(t => t.id === todo.id);
    projects[pIndex].todos[tIndex] = todo;
    localStorage.projects = JSON.stringify(projects);
  }
};

const deleteTodo = (todo) => {
  if (localStorage.projects) {
    const projects = JSON.parse(localStorage.projects);
    const pIndex = projects.findIndex(p => p.id === todo.project);
    const tIndex = projects[pIndex].todos.findIndex(t => t.id === todo.id);
    projects[pIndex].todos.splice(tIndex, 1);
    localStorage.projects = JSON.stringify(projects);
  }
};

const deleteProject = (project) => {
  if (localStorage.projects) {
    const projects = JSON.parse(localStorage.projects);
    const index = projects.findIndex(p => p.id === project.id);
    projects.splice(index, 1);
    localStorage.projects = JSON.stringify(projects);
  }
};

export {
  saveProject,
  retrieveProjects,
  updateProject,
  updateTodo,
  deleteTodo,
  deleteProject,
};
