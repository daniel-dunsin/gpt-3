import React from 'react';
import './App.css';
import { Navbar, Header, Brands, WhatGPT3, Features, Possibilities, CTA, Blogs, Footer } from './containers/exports'
function App() {
  return <main className='container'>
    <section className="gradient-bg">
      <Navbar />
      <Header />
    </section>
    <Brands />
    <WhatGPT3 />
    <Features />
    <Possibilities />
    <CTA />
    <Blogs />
    <Footer />
  </main>
}

export default App;
