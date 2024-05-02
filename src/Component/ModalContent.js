import classes from './ModalCantent.module.css'

// import classes from './ErrorModal.module.css'
// import './ModalCantent.css';
// import './App.css';

export default function ModalContent({ onClose }) {
    return (
      <div className={classes.modal}>
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }