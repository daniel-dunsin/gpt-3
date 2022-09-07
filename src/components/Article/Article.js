import React from 'react'
import './Article.css';
const Article = ({date, title, image}) => {
  return <div className="article-container">
    <div className="article-img">
      <img src={image} alt="" />
    </div>
    <div className="article-info">
      <div>
        <p className="date">{date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
}

export default Article