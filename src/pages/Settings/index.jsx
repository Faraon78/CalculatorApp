import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themes } from '../../constants/themes'
import { switchTheme } from '../../store/reducers/selectedThemeSlice'
import { H2, H3, Select, Option } from './styled'

function SettingPage() {
  const selectedTheme = useSelector((state) => state.selectedTheme)
  const dispatch = useDispatch()
  const handlerTheme = (event) => {
    dispatch(switchTheme(event.target.value))
  }
  const themeNames = Object.keys(themes)
  const theme = selectedTheme.selectedTheme || Object.keys(themes)[0]
  const options = themeNames.map((item) => (
    <Option key={item} value={item}>
      {item}
    </Option>
  ))
  return (
    <>
      <H2>Settings</H2>
      <H3>Switch theme</H3>
      <Select onChange={handlerTheme} value={theme}>
        {options}
      </Select>
    </>
  )
}

export default SettingPage
