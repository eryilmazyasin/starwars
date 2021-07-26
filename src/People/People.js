import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PeopleComponent from '../components/PeopleComponent';
import { pageNames } from '../common/PageNames';


export default function People(props) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const title = pageNames[1].title;

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        if (response.status === 200) {
          return response.data.results
        }
      })
      .then(data => {
        setPeople(data);
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
        {people.map((people, index) => {
          return (
            <PeopleComponent key={ index } name={people.name} gender={people.gender} />
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