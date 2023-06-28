import React from 'react';
import ReactDOM  from 'react-dom';

const modalContainer ={
    backgroundColor: '#FFF',
    color:'#fff',
    position:'fixed',
     top: '50%',
    left: '50%', 
    transform:'translate(-50%,-50%)',
    padding:'60px',
    zIndex: 1000,
  }

const overlay ={
    backgroundColor:'rgba(0,0,0, .7)',
    position:'fixed',
    left: 0,
    bottom:0,
    top: 0,
    right:0,
    zIndex: 1000,
  }

  const closebtn={
    backgroundColor: 'rgb(45, 1, 111)',
    color:'white',
    display:'flex',
    borderRadius: '100%',
    padding:'0px 20px 0px 20px',
    transform:'translate(1200%,-50%)', 
    fontSize:'50px',
  }

/*   const input =  {
    width: '100%',
    backgroundColor: '#B2904C',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } */


const Modal = ({open, children ,onClose}) => {


   if (!open) return null

    return ReactDOM.createPortal(
       

        <>
        <div style={overlay} />
            <div style={modalContainer}>
            <button onClick={onClose} style={closebtn}>X</button>
           
            {children}
           {/*  <input style={input }value="SUBMIT"/>   */}
       </div>
       
        </>,
        document.getElementById('portal')        
    )
}

export default  Modal;