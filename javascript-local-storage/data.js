/* exported todos */

let todos = [];

const previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
  const previousTodos = JSON.parse(previousTodosJSON);

  if (Array.isArray(previousTodos)) {
    todos.length = 0;

    for (const todo of previousTodos) {
      todos.push(todo);
    }
  }
}

window.addEventListener('beforeunload', function (event) {
  const todosJSON = JSON.stringify(todos);

  this.localStorage.setItem('javascript-local-storage', todosJSON);
});
