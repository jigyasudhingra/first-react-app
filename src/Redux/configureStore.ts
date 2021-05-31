import {createStore} from 'redux'
import listReducer from './reducer'

export function configureStore() {

    const store = createStore(listReducer)
	return store;
    // const store = createStore(listReducer)
	// return store;

}
const store = configureStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch