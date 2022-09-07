import React from 'react'
import Feature from '../../components/Feature/Feature';
import './WhatGPT3.css';


const featuresData = [
  { title: 'Chatbots', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil animi quidem.' },
  { title: 'Knowledgebase', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sequi repellat deserunt quo aut mollitia distinctio quaerat facere laborum laboriosam.' },
  { title: 'Education', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sequi repellat deserunt quo aut mollitia distinctio quaerat facere laborum laboriosam.' }


]

const WhatGPT3 = () => {
  return <section className="section-container" id='wgpt3'>
    <div className="section-margin what-gpt3-container gradient-bg">
      <div className="what-gpt3-feature-title">
        <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda vel, dolore qui maxime dignissimos, sunt id et odio molestiae voluptate magnam aliquid rerum suscipit sint molestias laborum cupiditate nobis ad nostrum cum! Ducimus illum architecto labore praesentium maxime distinctio.' />
      </div>
      <div className="what-gpt3-text gradient-text">
        <h1>The possibilities are beyound your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="what-gpt3-features">
        {featuresData.map((feature, index) => <Feature key={index} {...feature} />)}
      </div>
    </div>
  </section>
}


export default WhatGPT3;