import React, { useEffect, useState } from 'react'
import App from '../App'
import '../index.css'
import  { Link} from "react-router-dom"


const CardData = ({country}) => {

  return (
        <div className="country-card">
          <div className="card-header">
            <Link to="">
              <img className="flag" src={country.flags.svg} alt="The Gambia Flag" />
            </Link>
          </div>
          <div className="card-body">
            <h2>Gambia</h2>
            <ul className="country-info">
              <li className="contry-info-content-wrapper">
                <strong className="country-info-label">Population:</strong>
                <span>{country.population}</span>
              </li>
              <li className="contry-info-content-wrapper">
                <strong className="country-info-label">Region:</strong>
                <span>{country.region}</span>
              </li>
              <li className="contry-info-content-wrapper">
                <strong className="country-info-label">Capital: {""} </strong>
                <span>{country.capital}</span>
              </li>
              <li>
                <Link to="/" style={{color: "black"}}> Back to Home</Link>
            </li>
            </ul>
          </div>
        </div>
  )
}
export default CardData