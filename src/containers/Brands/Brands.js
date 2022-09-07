import React from 'react'
import './Brands.css';
import { google, slack, atlassian, dropbox, shopify } from './exports';

const Brands = () => {
  return <section className="">
    <div className="brands-container">
      <article className="brand-img-container">
        <img src={atlassian} alt="atlassian" />
      </article>
      <article className="brand-img-container">
        <img src={dropbox} alt="dropbox" />
      </article>
      <article className="brand-img-container">
        <img src={google} alt="google" />
      </article>
      <article className="brand-img-container">
        <img src={slack} alt="slack" />
      </article>
      <article className="brand-img-container">
        <img src={shopify} alt="shopify" />
      </article>

    </div>
  </section>
}

export default Brands