import React, { useContext, Component }  from "react"
import { Button } from "antd"
import { ThemeContext } from './context' // 定义的context
import '../../App.css'


export const ThemeButtonFn = props =>{ // 使用useContext
  const Theme = useContext(ThemeContext)
  return(
    <Button style={{color: Theme.background}}>ThemeButton</Button>
  )
}


export class ThemeButtonClass extends Component{ 
  // 使用 class 组件 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。此属性能让你使用 this.context 来消费最近 Context 上的那个值。
  static contextType = ThemeContext // 静态属性， 非实例属性 
  render(){
    const Theme = this.context
    return(
      <Button style={{color: Theme.background}}>ThemeButton</Button>
    )
  }
}

export const ThemeButtonFnNoUseContext = props =>{ // 函数式组件 不使用 useContext， 通过ThemeContext.Consumer
  return(
    <ThemeContext.Consumer>
      {
        Theme => <Button style={{color: Theme.background}}>ThemeButton</Button>
      }
    </ThemeContext.Consumer>
    
  )
}