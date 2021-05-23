import React, {useState} from 'react';

function Form({addList}) {
    
    const [name, setName] = useState({fname:'', lname:'', city: ''})
    // const [phone, setPhone] = useState('')
    // const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        addList(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Form </h1>

                <p>Enter First Name: </p>
                <input type='text' name='fname' value={name.fname} required onChange={(e)=>setName({...name, fname: e.target.value})}></input>
                <p>Enter Last Name: </p>
                <input type='text' name='lname' value={name.lname} required onChange={(e)=>setName({...name, lname:  e.target.value})}></input>
                <p>Enter City: </p>
                <input type='text' name='city' value={name.city} required onChange={(e)=>setName({...name, city: e.target.value})}></input>
                <br />
                <br />
                <input type='submit' value='Add To List' ></input>
                <br />
                <br />
                
            </form>
        </div>

    );
};

export default Form;