import React from 'react'

const Square = (props) => {
  return (
    <>
        <button id="square" onClick={props.onClick}>{props.value}</button>
        
    </>
  )
}

export default Square