import React from 'react';
import { Feature } from '../../components/exports'
import './Features.css';

const featuresData = [
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime numquam et minima sequi delectus accusamus quas. Saepe, aperiam.', title: 'Improving ends distrust instantly'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime numquam et minima sequi delectus accusamus quas. Saepe, aperiam.', title: 'Become the tended active'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime numquam et minima sequi delectus accusamus quas. Saepe, aperiam.', title: 'Message or am nothin'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime numquam et minima sequi delectus accusamus quas. Saepe, aperiam.', title: 'Really boy law country'
  }
]




const Features = () => {
  return <section className="section-container section-padding" id='features'>
    <div className="features-container">
      <div className="features-title">
        <h1 className='gradient-text'>The Future is Now and you just need to Realize it. Step into the Future Today & make it happen.</h1>
        <p className='gradient-text'>Request early access to get started</p>
      </div>
      <div className="features-content">
        {
          featuresData.map((feature, index) => <Feature key={index} {...feature} />)
        }
      </div>
    </div>
  </section>
}

export default Features