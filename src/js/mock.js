import Todo from './components/Todo';
import Project from './components/Project';

let count = 1;
const counter= () => { return count += 1 };

const createTodo = (title) => {
  return new Todo(counter(), title);
};

const todos = [ createTodo('todo1'), createTodo('todo2') ];
const projects = [ new Project(1, 'todo1')];

export { projects, todos, createTodo }
