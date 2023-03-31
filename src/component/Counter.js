import React, { useState } from 'react'


const sher = function() {
  let spire = () => {
    let splice = () => {}
    let splpie = () => {
      
    }
  }
}

const Counter = (props) => {
    let [count, setCount] = useState(0)
    function increment() {
        setCount( value => value + 1)
      }
      function decrement() {
        setCount( value => value - 1)
      }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement </button>
        </>
    )
}

export default Counter;