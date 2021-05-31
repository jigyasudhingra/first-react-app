import React, {useState, useEffect} from 'react';

interface Props {
    addList: (name: any) => void,
    isListClicked: boolean,
    selectedList: {fname: string, lname: string, city: string},
    updateList: (name: any) => void,
}

const Form: React.FC <Props> = ({addList, isListClicked, selectedList, updateList}) => {
    
    const [name, setName] = useState<{fname: string, lname: string, city: string}>({fname:'', lname:'', city: ''})

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: { fname: string; lname: string; city: string; }) => {

        e.preventDefault();
        console.log('Value Inserted', name);
        addList(name);
        setName({fname:'', lname:'', city: ''})

    }

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: { fname: string; lname: string; city: string; }) => {

        e.preventDefault()
        console.log('Update button clicked.')
        console.log(name)
        updateList(name)
        console.log('Update Finished...')
        setName({fname:'', lname:'', city: ''})
    }

    useEffect(()=>{
		if(isListClicked){
			setName(selectedList)
		}
	},[isListClicked, selectedList])

    let styles: React.CSSProperties = {
        float:'left',
        height: 350,
        width: 300,
        margin: 100,
        padding: 50,
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

                <button value='update' onClick={ (e) => handleUpdate(e, name)}>Update</button>
				<button type='submit' value='submit' onClick={(e) => handleSubmit(e, name)}>Submit</button>
                
                <br />
                <br />
                
                
            </form>
        </div>

    );
};

export default Form;