// import React from 'react'
// import './BackDrop.css'

// export default function BackDrop({onClose}) {
//   return (
//     <>
//     <div className='back' onClick={onClose}  > </div>
//     </>
//   )
// }



import React from 'react';
import './BackDrop.css';

export default function BackDrop({ onClose }) {
  return <div className="back" onClick={onClose}></div>;
}
