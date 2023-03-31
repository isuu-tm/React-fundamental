import React from 'react'
import s from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  return (
    <button 
    className={s.myBtn}
    disabled={false}
    {...props}>
        {children}
    </button>
  )
}

export default MyButton;
