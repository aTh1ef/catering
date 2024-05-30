import React from 'react';
import aboutImage from '../../../public/assets/images/about.jpg';
import './about.css';
import Image from 'next/image';
export default function About() {
  return (
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div
                className="col-lg-6 order-1 order-lg-2"
                dta-aos="zoom-in"
                data-aos-delay="100"
                >
                    <div className="about-img">
                        <   Image src={aboutImage} alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>
                            random stuff to be entered here
                        </h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dignissimos, reiciendis soluta ducimus voluptatem blanditiis labore quam consectetur, dolorum optio, nihil autem laborum velit repudiandae dolor eveniet ratione modi harum.
                        </p>
                </div>
            </div>
        </div>
    </section>


  );
  
}
