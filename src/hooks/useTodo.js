import { useEffect, useReducer } from 'react';
import { todoReducer } from '../reducer/todoReducer';

const initialState = [];
const getTodo = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, getTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add todo',
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: 'Delete todo',
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: 'Toggle todo',
      payload: id,
    });
  };
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  const countTodos = todos.length;
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodosCount,
    countTodos,
  };
};
