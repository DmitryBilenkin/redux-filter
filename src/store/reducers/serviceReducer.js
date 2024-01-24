import { SET_USER_PRICE, SET_USER_SERVICE_NAME, SET_USER_CANCEL, SET_USER_ID } from "../actions"

const initialState = {
    id: 0,
    nameOfService: '',
    price: 0,
    cancel: false
}

function serviceReducer(state=initialState, action) {
    switch(action.type){
        case SET_USER_ID:
            return {
                ...state,
                id: state.id + action.payload 
            }
  
        case SET_USER_PRICE:
            return {
                ...state,
                price: action.payload
            }

        case SET_USER_SERVICE_NAME:
            return {
                ...state,
                nameOfService: action.payload             
            }
        case SET_USER_CANCEL:
            return {
                ...state,
                cancel: action.payload
            }        
        default:
            return state
    }  
}

export default serviceReducer;

export const setUserIdAction = (payload) => ({type: SET_USER_ID, payload})
export const setUserPriceAction = (payload) => ({type: SET_USER_PRICE, payload})
export const setUserServiceNameAction = (payload) => ({type: SET_USER_SERVICE_NAME, payload})
export const setUserCancelAction = (payload) => ({type: SET_USER_CANCEL, payload})
