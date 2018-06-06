export default function(state = {}, action) {
  switch(action.type) {
    case 'NOTIFY':
      return Object.assign(state, action.payload)
    default:
      return state;
  }
}
