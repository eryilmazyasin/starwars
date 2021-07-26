import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Loading from '../components/Loading';
import Error from '../components/Error';
import StarshipsComponent from '../components/StarshipsComponent';
import { pageNames } from '../common/PageNames';

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const title = pageNames[2].title;

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        if (response.status === 200) {
          return response.data.results
        }
      })
      .then(data => {
        setStarships(data);
      })
      .catch(error => {
        console.error('Error: ', error)
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  
  return (
    <section>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h3>{title}</h3>
      <div className="row">
        {starships.map((starship, index) => {
          return (
            <StarshipsComponent key={ index } name={starship.name} model={starship.model} />
          )
        })}
      </div>

      {loading &&
        <Loading />
      }

      {error &&
        <Error />
      }
    </section>
  )
}