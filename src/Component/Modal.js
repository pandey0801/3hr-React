
// import { useState } from 'react';
// import { createPortal } from 'react-dom';
// import ModalContent from './ModalContent.js';
// import BackDrop from './BackDrop.js';

// export default function Modal() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//     <div >
//       <button onClick={() => setShowModal(true)} >
//         Show modal using a portal
//       </button>
//       </div>

//       {showModal && createPortal(
//         <ModalContent onClose={() => setShowModal(false)} />,
//         // document.body
//         document.querySelector(".myPortal")
//       )}




//       {showModal && createPortal(
//         <BackDrop onClose={() => setShowModal(false)}> </BackDrop>,
//         document.querySelector(".back")
//       )
//       }

//     </>
//   );
// }


import React, { useState } from 'react';
import { createPortal } from 'react-dom';
// import ModalContent from './ModalContent';
import classes from './BackDrop.module.css'
// import classes from './ModalCantent.module.css'

// import classes from './ErrorModal.module.css'
// import './BackDrop.css'

// import BackDrop from './BackDrop';
// import './Modal.css';

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);


  const BackDrop = ({onClose})=>
  {
      return ( <div className={classes.back}  onClick={onClose} />);
  };


  const  ModalContent = ({ onClose })=>
  {

    const [name,setName] = useState("");
    const [monitor, setMonitor] = useState("Suresh");

    const nameHandler = (event) =>
    {
        setName(event.target.value);
    }

    const monitorHandler = (event)=>
    {
        setMonitor(event.target.value);
    }

    const submitHandler =(event)=>
    {
        event.preventDefault();

        // console.log("dd");

        const obj={
            name:name,
            monitor:monitor,
            key:Math.random()
        }
        props.onsave(obj)
    }

    return (
      <div className={classes.modal}>
        {/* <h1>Class Monitor Vote</h1> */}
        <form onSubmit={submitHandler}>
        <label> Name
        <input
        type="text"
        // value={name}
        onChange={nameHandler}
        />
        </label>

        <select value={monitor} onChange={monitorHandler}>
        <option value="Suresh">Suresh</option>
        <option value="Deepank">Deepank</option>
        <option value="Abhik">Abhik</option>
        </select>

        <button type="submit">Submit</button>
        
    
        <button onClick={onClose}>Close</button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)}>Add New Vote</button>
      </div>

      {/* {showModal &&
        createPortal(
          <BackDrop onClose={() => setShowModal(false)} />,
          document.querySelector('.back')
        )} */}

      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.querySelector('.myPortal')
        )}

     
    </>
  );
}