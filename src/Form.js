import React, {useState, useEffect} from 'react';

function Form({addList, isUserClicked, selectedUser, updateList}) {
    
    const [name, setName] = useState({fname:'', lname:'', city: ''})
    //const [updateName, setUpdateName] = useState({})
    // const [showForm, setShowForm] = useState(false)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        addList(name);
    }

    const handleUpdate = (e) => {
        console.log('Update button clicked.')
        updateList(name)
    }

    useEffect(()=>{
		if(isUserClicked){
			setName(selectedUser)
		}
	})

    // isUserClicked ? handleClick() : console.log('Nothing')

    let styles = {
        float:'left',
        height: 350,
        width: 300,
        margin: 100,
        padding: 50,
        text: 'center',
        justifyContent: 'center',
        border: '2px solid purple'
    }

    return (
        <div >
            <form style={styles} >
                <h1>Form </h1>
                
                <p>Enter First Name: </p>
                <input type='text' name='fname' value={name.fname} required onChange={(e)=>setName({...name, fname: e.target.value})}></input>
                <p>Enter Last Name: </p>
                <input type='text' name='lname' value={name.lname} required onChange={(e)=>setName({...name, lname:  e.target.value})}></input>
                <p>Enter City: </p>
                <input type='text' name='city' value={name.city} required onChange={(e)=>setName({...name, city: e.target.value})}></input>
                <br />
                <br />

                { isUserClicked 
                ?
                <button onClick={(e) => handleUpdate(e)}>Update</button>
                : 
				<input type='submit' value='Submit' onClick={(e) => handleSubmit(e)}></input>
                }
                <br />
                <br />
                
                
            </form>
        </div>

    );
};

export default Form;