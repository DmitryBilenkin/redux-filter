import { ADD_ITEM_TO_LIST, EDIT_ITEM_LIST, DELETE_ITEM_LIST, CURRENT_ID } from "../actions";

const initialState = {
    list:[],
    currentId: null
}


function listReducer(state=initialState, action) {
    switch(action.type){
        case CURRENT_ID:
            return { ...state, currentId: action.payload} 
        case ADD_ITEM_TO_LIST:
            return {...state, list: [...state.list, action.payload]}
        case EDIT_ITEM_LIST:
            return {...state, list: state.list.map(listItem => listItem.id === action.payload.id ? listItem = action.payload : listItem )}
        case DELETE_ITEM_LIST:
            return {...state, list: state.list.filter(listItem => listItem.id !== action.payload)}
        default:
            return state
    }  
}

export default listReducer;

export const addItemToListAction = (payload) => ({type: ADD_ITEM_TO_LIST, payload})
export const editItemListAction = (payload) => ({type: EDIT_ITEM_LIST, payload})
export const deleteItemListAction = (payload) => ({type: DELETE_ITEM_LIST, payload})
export const currentIdAction = (payload) => ({type: CURRENT_ID, payload})
