import Project from './components/Project';

const retrieveProjects = () => {
  let projects = localStorage['projects'];
  if(projects) {
    return JSON.parse(projects);
  } else {
    return [new Project('Default')];
  }
}

const saveProject = (project) => {
  let projects = localStorage['projects'];
  if(projects) {
    projects = JSON.parse(localStorage['projects']);
    projects.push(project);
    localStorage['projects'] = JSON.stringify(projects);
  } else {
    localStorage['projects'] = JSON.stringify([project]);
  }
}

const updateProject = (project) => {
  let projects = localStorage['projects'];
  if(projects) {
    projects = JSON.parse(localStorage['projects']);
    let index = projects.findIndex((p) => p.id == project.id);
    projects[index] = project;
    localStorage['projects'] = JSON.stringify(projects);
  }
}

const updateTodo = (todo) => {
  let projects = localStorage['projects'];
  if(projects) {
    projects = JSON.parse(localStorage['projects']);
    let todoIndex;
    let projectIndex = projects.findIndex((project) => {
      todoIndex = project.todos.findIndex((t) => t.id == todo.id);
      return todoIndex >= 0;
    });
    projects[projectIndex].todos[todoIndex] = todo;
    localStorage['projects'] = JSON.stringify(projects);
  }
}

export { saveProject, retrieveProjects, updateProject, updateTodo };
