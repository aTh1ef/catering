
'use client';
import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Preloader from '../components/Preloader';
import GalleryItem from '../components/GalleryItem';

interface ImageData {
  id: number;
  image: string;
}

const fetchGalleryData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/gallery');
      const data = await response.json();
      return data;
    } catch (e: any) { // Explicitly define the type of 'e' as 'any'
      console.log(e.message);
    }
  };

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGalleryData();
      if (data) {
        setImages(data);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Gallery" subtitle="Some photos of Our Events" />
      </div>
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {images.length === 0 ? (
            <Preloader />
          ) : (
            images.map((image) => <GalleryItem key={image.id} item={image} />)
          )}
        </div>
      </div>
    </section>
  );
}

