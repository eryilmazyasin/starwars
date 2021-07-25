import React from 'react';
import { Helmet } from 'react-helmet';
import { pageNames } from '../common/PageNames';

export default function Starships() {
  const title = pageNames[2].title;
  
  return (
    <section>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h3>{title}</h3>
    </section>
  )
}