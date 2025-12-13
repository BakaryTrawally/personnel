import React from 'react'

const Input = ({type, id, value, onChange, placeholder}) => {
  return (
    <form htmlform="id" action="">
        <div>
          <input 
          type={type} 
          id={id} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder}
          min="1"
          />   
      </div>
    </form>
  )
}
export default Input
