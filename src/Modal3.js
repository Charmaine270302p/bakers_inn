import React from 'react';
import ReactDOM  from 'react-dom';

const modalContainer ={
    backgroundColor: '#FFF',
    color:'#fff',
    position:'fixed',
     top: '50%',
    left: '50%', 
    transform:'translate(-50%,-50%)',
    padding:'10px',
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
    padding:'0px 15px 0px 15px',
    transform:'translate(1170%,-1%)', 
    fontSize:'35px',
  }


const Modal3 = ({open, children ,onClose}) => {


   if (!open) return null

    return ReactDOM.createPortal(
       

        <>
        <div style={overlay} />
            <div style={modalContainer}>
             <button onClick={onClose} style={closebtn}>X</button> 
           
            {children}
       </div>
       
        </>,
        document.getElementById('portal')        
    )
}

export default  Modal3;