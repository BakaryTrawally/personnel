import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button type='submit'
      className='ml-auto m-auto w-[50%]'
      >{props.label}</button>
    </div>
  )
}

export default Button
