import ReactDOM from 'react-dom';
import './style.css';

export default function Modal({ children }) {
  return ReactDOM.createPortal(
    <section className="ModalBackground">{children}</section>,
    document.getElementById('modal')
  );
}
