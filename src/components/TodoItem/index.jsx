import React from 'react';
import iconCheck from '../../assets/icons/check_circle.svg';
import iconClose from '../../assets/icons/delete.svg';
import './style.css';

export default function TodoItem(props) {
  return (
    <li className="TodoItem">
      <button
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onCompleteTask}
      >
        <img src={iconCheck} alt="check" style={{ width: '20px' }} />
      </button>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

      <button className="Icon Icon-delete" onClick={props.onDeleteTask}>
        <img src={iconClose} alt="close" style={{ width: '20px' }} />
      </button>
    </li>
  );
}
