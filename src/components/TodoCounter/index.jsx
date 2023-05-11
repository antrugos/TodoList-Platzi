import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './style.css';

export default function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <header className="TodoCounter">
      <h1 className="Title">TODO LIST</h1>
      <h2 className="Subtitle">
        Has completado {completedTodos} de {totalTodos} tareas
      </h2>
    </header>
  );
}
