import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd'
import { store } from './index'

const Infomation = () =>{
  const [state, setState] = useState<any>({})

  // 订阅事件------就是在每次dispatch 数据更更新后同步数据到订阅数据的组件
  const upDateState = () =>{
    const state = store.getState()
    setState({ ...state.user, ...state.address, ...state.fetchdata})
  }

  useEffect(()=>{
    upDateState() // 首次进入页面获取初始数据
    const unSubscript = store.subscribe(upDateState); // 订阅数据
    return ()=>{
      unSubscript() // 取消订阅
    }
  }, [])
  const { name, age,result } = state || {}
  return (
    <> 
      <Descriptions column={1}>
        <Descriptions.Item label="姓名">{name}</Descriptions.Item>
        <Descriptions.Item label="年龄">{age}</Descriptions.Item>
        <Descriptions.Item label="异步">{result}</Descriptions.Item>
      </Descriptions>
    </>
  )
}
export default Infomation