import React, { useEffect, useState } from 'react'

import "../styles/country.css"
import { CountryDetails } from "./CountryDetails";

const API = "https://restcountries.com/v2/all"

export const Countries = () => {
  const [flags, setFlags] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setFlags(data)
        setLoading(false)
      })
  }, [])  

  if(loading){
    return <h1>Loading... wait a moment</h1>
  }

  return (
    <div>
      <ul className='countries' >
        {flags.map(flag => <CountryDetails {...flag} />)}
      </ul>
    </div>
  )
}

