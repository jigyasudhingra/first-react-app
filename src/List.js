import React, {useState} from 'react';
import Form from './Form';
import {v4 as uuidv4} from 'uuid';

export default function List() {
    
    const [lists, setLists] = useState([
        {fname: 'Jai', lname:'Dhingra', city:'Delhi', id: 1},
        {fname: 'Mario', lname:'fds', city:'Haryana', id: 2}
    ])

    const addList = (name) => {
        setLists([...lists, {
            fname: name.fname, 
            lname: name.lname, 
            city: name.city, 
            id: uuidv4()
        }])
    }
     
    return (
        <div>
            <Form addList={addList}/>
            <br />
            <hr />
            <br />
            <h2>Entered Items:</h2>
            <ul>
                {lists.map(list => {
                    return (
                    <div>
                        <li key={list.id}>{list.fname} <br /> {list.lname} <br /> {list.city}</li>
                        <br />
                    </div>
                    );
                })}
                <br />
            </ul>
        </div>
        
    )
}
