import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <article style={{ 
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
  >
    <section className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </section>
  </article>
)


export default MenuItem