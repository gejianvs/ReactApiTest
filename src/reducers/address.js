const defaultState = {
  province: 'test',
  city: 'test'
}

const consumer = (state=defaultState, action) =>{
  const { type, payload } = action
  switch(type){
    case 'province':
      return{
        ...state,
        province: payload.province
      };
     case 'city':
      return{
        ...state,
        city: payload.city
      };
    default:
      return state
  }
}

export default consumer