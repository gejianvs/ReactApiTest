import React from 'react';
import {  Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import createLogger  from 'redux-logger'
import MyButtom from './MyButtom';
import Infomation from './Infomation';
import reducers  from '../../reducers';
import { createStore, applyMiddleware } from 'redux'
// import { createStore, applyMiddleware } from './redux/src/index'

// const logger = createLogger();

export const store = createStore(reducers, applyMiddleware(createLogger, ReduxThunk ))
function App() {

  return (
    <Provider store={store}>
      <div>
        <MyButtom />
        <br />
        <Infomation />
      </div>
    </Provider>
    
  );
}

export default App;
