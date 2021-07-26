import React from 'react';
import starship from '../img/starships.png';
export default function PeopleComponent({name, model}) {
  return (
    <div className="col-lg-4 col-md-6 card--item">
      <div className="card--item__inner shadow">
        <img className="no-filter" src={starship} alt="characters" />
        <div className="card--item__inner-infos">
          <h5>{name}</h5>
          <small>{model}</small>
          <a href={`https://www.google.com/search?q=star%20wars%20${name}`} target="_blank" rel="noreferrer">Search on Google!</a>
        </div>
      </div>
    </div>
  )
}