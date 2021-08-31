const defaultState = {
  loading: false,
  result: 'test'
}

const fetchData = (state=defaultState, action) =>{
  const { type, payload } = action
  debugger
  switch(type){
    case 'loading':
      return{
        ...state,
        loading: payload.loading
      };
     case 'result':
      return{
        ...state,
        result: payload.result
      };
    default:
      return state
  }
}

export default fetchData