'use client';

import React, { useState, useEffect } from 'react';

// Import Swiper React Components 
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import SectionTitle from '../components/SectionTitle';
import EventsItem from '../components/EventsItem';

import './events.css';

export default function Events() {
    const [slides, setSlides] = useState<any[]>([]);

    const getEventsData = () => {
        fetch('http://localhost:3000/api/events')
        .then(res => res.json())
        .then(data => setSlides(data))
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getEventsData();
    }, []);

    return (
        <section id="events" className="events">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Events"
                    subtitle="We organize any events you want"
                />

                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        spaceBetween={0}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: 'swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        className="events-slider swiper-container"
                    >
                        {slides && slides.length > 0 && slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <EventsItem item={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}
