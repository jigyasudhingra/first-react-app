import {LIST_CREATION, UPDATE_LIST, ADD_TO_LIST} from './actionConstants';

export const listCreation = (details) => {
    return {
        type: LIST_CREATION,
        payload: details
    }
}

export const updateList = (details) => {
    return { 
        type: UPDATE_LIST,
        payload: details
    }
}

export const addToList = (details) => {
    return { 
        type: ADD_TO_LIST,
        payload: details
    }
}