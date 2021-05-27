import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux'
import {addToList, listCreation, updateList} from './Redux/actionCreator'

function Form({addList, isUserClicked, selectedUser, updateList}) {
    
    const [name, setName] = useState({fname:'', lname:'', city: ''})

    //For Use Of Redux
    const dispatch = useDispatch()
    const {listDetails} = useSelector(state => state.listDetails)
    const usersRedux = useSelector(state => state.listsRedux)
    
    const handleSubmit = (e) => {

        e.preventDefault();
        
        // ---- REACT ----
        // console.log(name, 'Value Inserted');
        // addList(name);
        // setName({fname:'', lname:'', city: ''})

        // ---- REDUX ----
        dispatch(addToList(name))
        console.log(name)
        setName({fname:'', lname:'', city: ''})

    }

    const handleUpdate = (e, name) => {
        e.preventDefault()
        console.log('Update button clicked.')
        console.log(name)
        updateList(name)
        console.log('Update Finished...')
        setName({fname:'', lname:'', city: ''})
    }

    useEffect(()=>{
		if(isUserClicked){
			setName(selectedUser)
		}
	},[isUserClicked, selectedUser])

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

                <button value='update' type='update' onClick={ (e) => handleUpdate(e, name)}>Update</button>
				<button type='submit' value='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
                
                <br />
                <br />
                
                
            </form>
        </div>

    );
};

export default Form;