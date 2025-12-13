import React, { useEffect, useState } from 'react'
import App from '../App'
import '../index.css'
import  { useLoaderData } from "react-router-dom"
import { countriesCached } from "../cache/countries"
import CardData from './CardData'


 export async function  loader() {
    if (countriesCached.all) {
      return countriesCached.all
    }
    const response = await fetch("https://restcountries.com/v3.1/name/Gambia")
    const countries = await response.json()
    {countries}
    countriesCached.all = countries
    return countries
  }
  
const Card = () => {
  const countries = useLoaderData()
  const [filteredCountries, setFilteredCountries] = useState([...countries])
 
  return (
    <App>
      <>  
       {filteredCountries ? filteredCountries.map((country, index) => {
          return <CardData country={country}  key={index} />
        }): "No Countries "}
        </>
    </App>
  )
}
export default Card