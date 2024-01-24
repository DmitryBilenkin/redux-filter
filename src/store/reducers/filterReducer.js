import { ADD_FILTER } from "../actions";

const initialState = {
    filterValue: ''
}

function filterReducer(state=initialState, action) {
  switch(action.type){
    case ADD_FILTER:
        return { ...state, filterValue: action.payload }
    default:
        return state
  }

}

export default filterReducer;

export const addFilterAction = (payload) => ({type: ADD_FILTER, payload})
