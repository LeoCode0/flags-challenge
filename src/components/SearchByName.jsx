import React, { useEffect, useState } from 'react'

import { CountryDetails } from "./CountryDetails";

export const SearchByName = () => {
  const [country, setCountry] = useState(null)
  const [name, setName] = useState(null)

  const fetchData = () => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then(response => response.json())
      .then(data => {
        setCountry(data[0])
      })
  }

  return (
    <div>
      <input type="text" placeholder='Write the name of a country' onChange={(e) => setName(e.target.value)} />
      <button type='button' onClick={fetchData} >Search</button>
      {country && <CountryDetails {...country} />}
    </div>
  )
}
