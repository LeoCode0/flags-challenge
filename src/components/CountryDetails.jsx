import React from 'react'

import "../styles/countryDetails.css"

export const CountryDetails = ({ name, flag, population, region, subregion }) => {
  return (
    <li className='country' >
      <img className='country--img' src={flag} alt={name} />
      <h2>{name}</h2>
      <p>Total population: {population}</p>
      <p>Region: {region}</p>
      <p>subregion: {subregion}</p>
    </li>
  )
}
