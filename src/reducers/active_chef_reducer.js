//State is just the state this reducer is handling
export default function(state = null, action){
  switch(action.type){
    case 'CHEF_SELECTED':
    return action.payload;
  }
  return state;
}