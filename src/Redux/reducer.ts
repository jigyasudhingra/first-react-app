import { LIST_CREATION, UPDATE_LIST, ADD_TO_LIST } from "./actionConstants";

interface initialise {
    fname: string,
    lname:string,
    city: string,
}

const initialState = {
    listDetails: <initialise>{
        fname: '',
        lname: '',
        city: ''
    },
    listsRedux: [ {fname: 'Mario', lname: 'fsdef', city: 'er'}, {fname: 'Shinchan', lname: 'dsf', city: 'cc'}]
}

const listReducer = (state: any, {type, payload}: any) =>
{
    state=initialState
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
            ...state, listsRedux:[...state.listsRedux, payload]
        }
        
        default:{
			return state;
		}
    }
}

export default listReducer