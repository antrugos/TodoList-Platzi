import editIcon from '../../assets/icons/edit.svg';
import './style.css';

export default function (props) {
  const createTask = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={createTask}>
      <img src={editIcon} />
    </button>
  );
}
