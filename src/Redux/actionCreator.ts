import {LIST_CREATION, UPDATE_LIST, ADD_TO_LIST} from './actionConstants';

export const listCreation = (details: object) => {
    return {
        type: LIST_CREATION,
        payload: details
    }
}

export const listUpdate = (details: object) => {
    return { 
        type: UPDATE_LIST,
        payload: details
    }
}

export const addToList = (details: object) => {
    return { 
        type: ADD_TO_LIST,
        payload: details
    }
}