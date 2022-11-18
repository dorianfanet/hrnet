import { createStore } from 'redux' 
import produce from 'immer'

const initialState = []

export const setNewEmployee = (data) => ({
  type: 'setNewEmployee',
  payload: data
})

function reducer(state = initialState, action) {
  if(action.type === 'setNewEmployee'){
    return produce(state, (draft) => {
      draft.push({
        ...action.payload,
        id: state.length + 1
      }) 
    })
  }
}

export const store = createStore(reducer)