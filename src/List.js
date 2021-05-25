import React, {useState} from 'react';
import Form from './Form';
import {v4 as uuidv4} from 'uuid';

export default function List() {
    
    const [lists, setLists] = useState([
        {fname: 'Mario', lname:'fdhgr', city:'sdfg', id: 0},
        {fname: 'Shinchan', lname:'fds', city:'vsdf', id: 1}
    ])
    
    const [isUserClicked, setIsUserClicked] = useState(false)
    const [selectedUser, setSelectedUser] = useState({fname:'', lname:'', city:'', id:''})
    const [listIndex, setListIndex] = useState('')

    const handleClick = (list, index) => {
        console.log("Index", index)
        setIsUserClicked(true)
        setSelectedUser(list)
        setListIndex(index)
    }

    const addList = (name) => {
        setLists([...lists, {
            fname: name.fname, 
            lname: name.lname, 
            city: name.city, 
            id: uuidv4()
        }])
    }
    
    const updateList = (name) => {
        lists[listIndex] = name
        setLists([...lists])
    }

    let styles = {
        float:'right',
        margin: 100,
        padding: 20,
        textAlign: 'center',
        border: '2px solid purple',
        justifyContent: 'center',
    }

    let styles1 = {
        border: '4px solid lightblue',
        backgroundColor: 'lightblue',
        width: 300,
        color: 'black',
        textAlign: 'center',
        borderRadius: 20
    }
    return (
        <>
        <Form addList={addList} isUserClicked={isUserClicked} selectedUser={selectedUser} updateList={updateList} />
        <div style={styles}>
            <br />
            <br />
            <h2>Entered Items:</h2>
            <ol>
                {lists.map( (list, index) => {
                    return (
                    <div key={index} onClick={ () => handleClick(list, index) }>
                        <li style={styles1} key={list.id}>{list.fname}</li>
                        <br />
                    </div>
                    );
                })}
                <br />
            </ol>
        </div>
        </>
    )
}
