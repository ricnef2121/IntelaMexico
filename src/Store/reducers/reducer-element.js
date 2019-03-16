import { ADD_ELEMENT, DELETE_ELEMENT, SELECTED_ELEMENT, UPDATE_ELEMENT } from '../consts/const-element'

const initialState = {
  elements: [],
  elementSelected: {}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
    //return {...state,elements:action.payload}
     return Object.assign({}, state, {
        elements: state.elements.concat(action.payload)
      });
    case DELETE_ELEMENT:
      return Object.assign({}, state, {
        elements: state.elements.filter(element => element.id !== action.id)
      });
    case SELECTED_ELEMENT:
      return Object.assign({}, state, {
        elementSelected: state.elements.filter((element) => element.id === action.id)
      });
    case UPDATE_ELEMENT:
      return Object.assign({}, state, {
        elements : state.elements.map(element=> element.id === action.id ?
           {...element,
            id:action.payload.id,
            name:action.payload.name,
            description:action.payload.description}
            :element)
       
      });

    default:
      return state
  }

}

export default rootReducer; 