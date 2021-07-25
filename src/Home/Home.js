import React from 'react';
import { Helmet } from 'react-helmet';
import meme from '../meme.jpeg';
import { pageNames } from '../common/PageNames';

export default function Home() {
  const title = pageNames[0].title;
  
  return(
    <section className="row">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <img src={ meme } alt="meme"/>
    </section>
  )
}