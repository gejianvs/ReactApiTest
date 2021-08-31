
// 模拟接口请求------异步数据
const getData = result =>{
  return new Promise((resolve)=>{
    setTimeout(()=>resolve({result}), 1000)
   
  })
}

// 同步action
export const changeName = payload =>{
  return {
    type: 'name',
    payload
  }
}

// 同步action
export const changeAge = payload =>{
  return {
    type: 'age',
    payload
  }
}

// 同步action
export const changeloading = payload=>{
  return {
    type: 'loading',
    payload
  }
}

// 同步action
export const successResult = payload=>{
  return {
    type: 'result',
    payload
  }
}


// 异步action----------结合redux-thunk 中间件改造store.dispatch 方法允许接受函数为action
export const fetchPosts = (value) => dispatch => {
  const start = Date.now()
  dispatch(changeloading({ loading: true }));
 
  return getData(value)
    .then(json => {console.log('time', json, Date.now() - start);  dispatch(successResult(json))});
};



