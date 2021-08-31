import React from 'react';
import { Input, InputNumber, Button } from 'antd'
import { store } from './index'
import {  changeAge, fetchPosts } from '../../Action'
import '../../App.css';

const MyButtom = (props: any) =>{
  return (
    <> 
      {/* 异步数据 */}
      <div style={{ display: 'flex', flexDirection: 'row'}}>name: <Input onChange={(value)=>{store.dispatch(fetchPosts(value.target.value) as any)}}/></div> 
      {/* 同步数据 */}
      <div style={{ display: 'flex', flexDirection: 'row'}}>age: <InputNumber onChange={value=> store.dispatch(changeAge({ age: value }))}/></div>
      
    </>
  )
}

export default MyButtom