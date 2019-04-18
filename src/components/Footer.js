import React from 'react'
//导入组件
import FooterLink from './FooterLink'
//导入样式
import '../styles/footer.css'

//创建Footer展示组件
const Footer = () => {
  return (
    <div>
      Show:
      <FooterLink path="">All</FooterLink>{' '}
      <FooterLink path="active">Active</FooterLink>{' '}
      <FooterLink path="completed">Completed</FooterLink>
    </div>
  )
}

//导入Footer组件
export default Footer
