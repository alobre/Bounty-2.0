import {SET_RBSHEET} from './actions'

const initialState = {
    current: ''
}

const RBSheetReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_RBSHEET:
            return {...state, current: action.payload}
        default:
            return state;
    }
}
export default RBSheetReducer;