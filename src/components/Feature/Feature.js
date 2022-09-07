import React from 'react';
import './Feature.css';

const Feature = ({text, title}) => {
  return <article className="feature-container">
    <div className="feature-heading">
      <div />
      <h3>{title}</h3>
    </div>
    <p>{text}</p>
  </article>
}

export default Feature