'use client';

import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css'; // Ensure GLightbox CSS is imported
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
  useEffect(() => {
    GLightbox({
      selector: '.glightbox',
    });
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>Tellis Catering</span>
            </h1>
            <h2>Serving Exceptional Cuisine and Unmatched Hospitality Since 1998</h2>

            <div className="btns">
              <HeroBtn name="Our Menu" target="menu" />
              <HeroBtn name="Book Us" target="book-a-table" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a 
              href="https://www.youtube.com/watch?v=J5N5OWKRyuc&list=LL&index=3&t=354s"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
