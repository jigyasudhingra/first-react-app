import React, {useState} from 'react';
import Form from './Form';

import {useDispatch, useSelector} from 'react-redux'
import {addToList, listUpdate} from './Redux/actionCreator'

export default function List() {
    
    // const [lists, setLists] = useState([
    //     {fname: 'Mario', lname:'fdhgr', city:'sdfg', id: 0},
    //     {fname: 'Shinchan', lname:'fds', city:'vsdf', id: 1}
    // ])
    
    const [isListClicked, setIsListClicked] = useState(false)
    const [selectedList, setSelectedList] = useState({fname:'', lname:'', city:'', id:''})
    const [listIndex, setListIndex] = useState('')

    // --- Redux ---
    const dispatch = useDispatch()
    const listsRedux = useSelector(state => state.listsRedux)

    const handleClick = (list, index) => {
        console.log("Index", index)
        setIsListClicked(true)
        setSelectedList(list)
        setListIndex(index)
    }

    const addList = (name) => {

        // --- React ---
        // setLists([{
        //     fname: name.fname, 
        //     lname: name.lname, 
        //     city: name.city, 
        //     id: uuidv4()
        // }])

        /// --- Redux ---
        dispatch(addToList(name))
    }
    
    const updateList = (name) => {
        
        // --- React ---
        // lists[listIndex] = name
        // setLists([...lists])

        // --- Redux ---
        let updatedLists = [...listsRedux]
        updatedLists[listIndex] = {...updatedLists[listIndex], ...name}
        dispatch(listUpdate(updatedLists))
        setListIndex(null)
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
        <Form addList={addList} isListClicked={isListClicked} selectedList={selectedList} updateList={updateList} />
        <div style={styles}>
            <br />
            <br />
            <h2>Entered Items:</h2>
            <ol> 
                {/* Here, I directly use listsRedux to go through all list, rather than 'lists', which I used previously. */}
                {listsRedux.map( (list, index) => {
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
