import { useContext } from 'react';
import TodoCounter from '../TodoCounter';
import CreateTodoButton from '../CreateTodoButton';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import { TodoContext } from '../TodoContext';
import Modal from '../Modal';
import TodosError from '../TodosError';
import TodosLoading from '../TodosLoading';

import './App.css';
import EmptyTodos from '../EmptyTodos';

export default function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    toggleDeleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <div className="TodoPage">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleteTask={() => toggleCompleteTodo(todo.text)}
            onDeleteTask={() => toggleDeleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} openModal={openModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  );
}
