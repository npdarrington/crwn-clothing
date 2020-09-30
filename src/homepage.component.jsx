import React from 'react';

import './homepage.styles.scss'

const HomePage = () => (
  <section className="homepage">
    <section className="directory-menu">
      <article className="menu-item">
        <section className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </section>
      </article>
      <article className="menu-item">
        <section className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </section>
      </article>
      <article className="menu-item">
        <section className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </section>
      </article>
      <article className="menu-item">
        <section className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </section>
      </article>
      <article className="menu-item">
        <section className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </section>
      </article>
    </section>
  </section>
);

export default HomePage;