import React from 'react';
import loading from '../rocket.gif';

export default function Loading() {
  return(
    <div className="d-flex justify-content-center align-items-center flex-column fw-light p-5 m-5">
      <img src={ loading } className="mb-3" width="50" alt="loading" />
      Loading...
    </div>
  )
}