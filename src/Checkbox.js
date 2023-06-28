/* import {useState} from 'react';

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className="checkbox-wrapper">
        <label>
          <input type="checkbox" checked={isChecked} />
          <span>{label}</span>
        </label>
      </div>
    );
  };
  export default Checkbox; */

  import {useState} from 'react';

  const txtcolor ={
    color:  '#261B6C',
    fontSize: '14px',
    position:'relative',
    left: '30px',
    width: '92%',
  }

  const BOX1 ={
    position:'relative',
    top: '30px',
    width: '92%',
 
  }


  const Checkbox = ({ label }) => {
   const [isChecked, setIsChecked] = useState(false); 
    
    return (
      <div className="checkbox-wrapper">
        <label style={BOX1}>
          <input
            type="checkbox" checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
           
          {/*   <span style={txtcolor} >{label}</span> */}
          {/* ... */}
        </label>
        <h6 style={txtcolor} >{label}</h6>
       {/*  <p>{isChecked ? "Selected" : "Unchecked"}</p> */}

       
      </div>
    );
  };
  export default Checkbox;







/*   <select id="ff" name="ff">
  <option value="australia">Do You Want To Be Contacted By Phone</option>
  <option value="canada">Canada</option>
  <option value="usa">USA</option>
</select>  */