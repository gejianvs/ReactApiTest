import React, { useState }  from "react";
import { Button } from "antd";
import { ThemeButtonFn, ThemeButtonFnNoUseContext, ThemeButtonClass } from './ThemeButton'
import { ThemeContext, themes } from './context'

const ChangeTheme = props =>{
  const { ChangeThemeFn } = props
  return (
    <Button onClick={ChangeThemeFn}>改变主题</Button>
  )
}

const TestContext = () =>{
  const [theme, setTheme] = useState(themes.light)

  const ChangeThemeFn = () =>{
    const getTheme = theme === themes.light ? themes.dark : themes.light
    setTheme(getTheme)
  }
  
  return(
    <ThemeContext.Provider value={theme}>
      <ThemeButtonFn />
      <ThemeButtonFnNoUseContext />
      <ThemeButtonClass />
      <ChangeTheme ChangeThemeFn={ChangeThemeFn}/>
    </ThemeContext.Provider>
  )
}

export default TestContext