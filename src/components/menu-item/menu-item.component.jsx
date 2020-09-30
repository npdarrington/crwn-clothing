import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <article className={`${size} menu-item`}>
    <section className="background-image" 
      style={{ 
        backgroundImage: `url(${imageUrl})`
      }}>
    </section>
    <section className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </section>
  </article>
)


export default MenuItem