import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { useTodo } from '../hooks';

export const TodosApp = () => {
  const {
    todos,
    pendingTodosCount,
    countTodos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  } = useTodo();
  return (
    <>
      <h2>
        TodosApp {countTodos} <small>pendientes: {pendingTodosCount} </small>{' '}
      </h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
