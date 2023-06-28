import {useState} from 'react';
/*  
export default function ()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

return  (
<form>
	<label>Input Value:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label>
	<p>Input Value: {inputValue}</p>
</form>
)}; */


const ControlledComponent = () => {

    const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

    return(
<form>
	<label>Input Value:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label>
	<p>Input Value: {inputValue}</p>
</form>
        
    );
}

export default  ControlledComponent;