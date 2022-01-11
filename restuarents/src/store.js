import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from './reducers/restaurantReducer'


const reducers = combineReducers({
    restaurantReducer:restaurantListReducer
})

const initialState = {};
const middleware = [thunk];


const store = createStore(reducers, initialState, applyMiddleware(...middleware))


export default store


//redux- it is a state management tool.
//why redux- inorder to avoid props drilling.
//redux consist of 3 basic blocks- store,action,reducers.
