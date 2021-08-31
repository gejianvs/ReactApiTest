const defaultState = {
  name: 'test',
  age: 'test'
}

const user = (state=defaultState, action) =>{
  const { type, payload } = action
  switch(type){
    case 'name':
      return{
        ...state,
        name: payload.name
      };
     case 'age':
      return{
        ...state,
        age: payload.age
      };
    default:
      return state
  }
}

export default user