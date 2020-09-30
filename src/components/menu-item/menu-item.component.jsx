import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <article className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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


export default withRouter(MenuItem);