import React from 'react'
import s from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref)  => {
  return (
    <input 
    {...props}
    className={s.myInput}
    ref={ref}/>
  )
})

export default MyInput;
