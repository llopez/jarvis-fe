const reduceItem = (item, payload) => {
  if(item.id !== payload.id) return item
  return Object.assign({}, item, payload)
}

export default function(state = [], action) {
  switch(action.type) {
    case 'FETCH_ITEMS':
      return Object.assign(state, action.payload)
    case 'UPDATE_ITEM':
      return Object.assign(
        state,
        state.map(item => reduceItem(item, action.payload))
      ) 
    default:
      return state;
  }
}
