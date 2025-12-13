import React, { useState } from 'react'
import "../App.css"
import "../Index.css"
import Input from'./Input'
// import Select from './Select'
import Button from './Button'
// import {useNavigate } from 'react-router-dom';


const selectOptions = [
  {
      label: 'Choose Title',
      // value: 'Choose Title'
  },
  {
      label: 'Chief Fire Officer',
      value: 'Chief Fire Officer'
  },
  {
      label: 'Deputy Chief Fire Officer',
      value: 'Deputy Chief Fire Officer'
  },
  {
      label: 'Assistant Chief Fire Officer',
      value: 'Assistant Chief Fire Officer'
  },
  {
      label: 'Senior Airport Fire Officer',
      value: 'Senior Airport Fire Officer'
  },
  {
      label: 'Station Officer',
      value: 'Station Officer'
  },
  {
      label: 'Sub Officer',
      value: 'Sub Officer'
  },
  {
      label: 'Leading Firefighter',
      value: 'Leading Firefighter'
  },
  {
      label: 'Fire-Fighter',
      value: 'Fire-Fighter'
  }
]
const Form = (
    { title,  handleTitle, handleName, handleOpsNumber,  fullName,  opsNumber, handleSubmit, error}
    
    ) => {

  return (
    <div>
      <form htmlForm="id" className='addPersonnel '  onSubmit={handleSubmit}>
      <div className='select-container'>  
      <select
      className='p-3'
            onChange={handleTitle} 
            defaultValue={title.value}
        >
        {selectOptions.map((option, id)=> (
                    <> 
                    <option 
                    key={id}
                    value={option.value}
                    >
                        {option.label}
                    </option>
                    </>
                ))}
      </select>
      </div>
      {error && <p className='errMessage'>{error}</p>}
            <Input
                id="postTitle"
                type="text"
                placeholder='Full Name...'
                value={fullName}
                onChange={handleName}
                minLength="1" 
                required
                className="text-capitalize"
            />
            {error && <p className='errMessage'>{error}</p>}
            <Input
                id="opsNumber"
                type="number"
                placeholder='OPS...'
                value={opsNumber}
                onChange={handleOpsNumber} 
            />
             {error && <p className='errMessage'>{error}</p>}
                <Button
                label="Submit"
            />
           </form>
          
    </div>
  )
}

export default Form
