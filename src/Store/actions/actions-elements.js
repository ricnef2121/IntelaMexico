import { ADD_ELEMENT, DELETE_ELEMENT,SELECTED_ELEMENT,UPDATE_ELEMENT } from '../consts/const-element'

//estas funciones(actions) son las que utilizara react para despachar cada reducer

//AGREGA  un nuevo elemnto al store
export function addElement(payload) {
  return { type: ADD_ELEMENT, payload }
};

//ELIMINA un elemento del store a traves del id que recibe
export function deleteElement(id) {
  return { type: DELETE_ELEMENT, id }
};

//SELECCIONA un elemento del store a traves del id que recibe
export function selectElement(id) {
  return { type: SELECTED_ELEMENT, id }
}; 
//this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
//this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
//ACTUALIZA un elemento del store a traves del id que recibe
export function updateElement(id,payload) {
  return { type: UPDATE_ELEMENT, id, payload }
}; 