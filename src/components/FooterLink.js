import React from 'react'
//导入NavLink
import { NavLink } from 'react-router-dom'
const FooterLink = ({ children, path }) => (
  <NavLink exact to={'/' + path}>
    {children}
  </NavLink>
)

//导出组件
export default FooterLink
