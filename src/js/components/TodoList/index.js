// import { retrieveTodos } from '../localStorage';
import Todo from './Todo'

export default function TodoList() {
  const todos = retrieveTodos();
  return todos.map((todo) => todo.render());
}

function retrieveTodos() {
  return [new Todo('todo 1'), new Todo('todo 2'), new Todo('todo 3')];
}
