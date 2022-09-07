import React from 'react'
import './Blogs.css';
import { Article } from '../../components/exports';
import singleBlogImage from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';
const blogs = [
  {
    date: 'Sept 12, 2021',
    image: blog2
  },
  {
    date: 'Sept 11, 2021',
    image: blog3
  },
  {
    date: 'Sept 15, 2021',
    image: blog4
  },
  {
    date: 'Sept 15, 2021',
    image: blog5
  }
]
const Blogs = () => {
  return <div className="section-container section-padding" id='blogs'>
    <h1 className='blogs-title gradient-text'>A lot is happening, we are blogging about it</h1>
    <div className="blogs-container">
      <div className="single-blog">
        <Article date='Sept 11, 2022' title='GPT-3 and Open AI is the future. Let us explore how it is?' image={singleBlogImage} />
      </div>
      <div className="other-blogs">
        {
          blogs.map((blog, index) => <Article key={index} {...blog} title='GPT-3 and Open AI is the future. Let us explore how it is?' />)
        }
      </div>
    </div>
  </div>
}

export default Blogs