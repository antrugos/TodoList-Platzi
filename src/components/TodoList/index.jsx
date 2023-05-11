import React from 'react';
import './style.css';

export default function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}
