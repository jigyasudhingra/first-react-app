import { LIST_CREATION, UPDATE_LIST, ADD_TO_LIST } from "./actionConstants";

const initialState = {
    listDetails:{
        fname: '',
        lname: '',
        city: ''
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