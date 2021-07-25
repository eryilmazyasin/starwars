import React from 'react';
import avatar from '../img/unknown.jpeg';

export default function PeopleComponent({name, gender}) {
  return (
    <div className="col-lg-4 col-md-6 card--item">
      <div className="card--item__inner shadow">
        <img src={avatar} alt="characters" />
        <div className="card--item__inner-infos">
          <h5>{name}</h5>
          <small>{gender === 'n/a' ? 'unknown' : gender}</small>
          <a href={`https://www.google.com/search?q=${name}`} target="_blank" rel="noreferrer">Search on Google!</a>
        </div>
      </div>
    </div>
  )
}