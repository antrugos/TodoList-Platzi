import { TodoContext } from '../TodoContext';
import React, { useContext, useState } from 'react';
import './style.css';

export default function () {
  const { addTodo, setOpenModal, openModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(!openModal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(!openModal);
  };

  return (
    <form onSubmit={onSubmit} className="Modal">
      <header className="Modal__header">
        <label className="Modal__title">Escribe la nueva tarea</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder=""
          className="Modal__textArea"
        ></textarea>
      </header>
      <footer className="Modal__buttons">
        <button type="button" onClick={onCancel} className="Modal__cancelButton">
          Cancelar
        </button>
        <button type="submit" className="Modal__submitButton">
          Añadir
        </button>
      </footer>
    </form>
  );
}
