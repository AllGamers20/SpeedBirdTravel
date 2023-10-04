import React from 'react'

const Button = ({link,text}:{link:any,text:any}) => {
  return (
    <a href={link} className='btn'>{text}</a>
  )
}

export default Button