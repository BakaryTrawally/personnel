import React from 'react'
import "../App.css"
import "../Index.css"

const Footer = () => {
    const date = new Date();
    const theDate = (`${date.getDate()}Th ${date.getMonth()+1}  ${date.getFullYear()}`)
    // console.log(theDate)
  return (
    <div className='footer-container'>
        <h1>&copy; Nansa Tra. {theDate}</h1>
    </div>
  )
}

export default Footer