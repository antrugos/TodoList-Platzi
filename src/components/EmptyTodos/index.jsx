import inspireIcon from '../../assets/icons/inspire.png';
import './style.css';

export default function () {
  return (
    <section className="EmptyTodo">
      <img src={inspireIcon} className="EmptyTodo__image" />
      <div className="EmptyTodo__label">
        <h1>VAYA!! No tienes Tareas pendientes</h1>
        <h3>Crea tu primer tarea</h3>
      </div>
    </section>
  );
}
