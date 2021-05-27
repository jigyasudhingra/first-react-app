import { LIST_CREATION, UPDATE_LIST, ADD_TO_LIST } from "./actionConstants";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    listDetails:{
        fname: '',
        lname: '',
        city: '',
        id: uuidv4(),
    },
    listsRedux: []
}

export default function listReducer(state=initialState, {type, payload})
{
    switch(type) {
        case LIST_CREATION:
        return {
            ...state,
            listDetails:{...payload}
        }

        case UPDATE_LIST:
        return {
            ...state,
            listsRedux:[...payload]
        }
        case ADD_TO_LIST:
        return {
            ...state,
            listsRedux:[...state.listsRedux, payload]
        }
        
        default:{
			return state;
		}
    }
}