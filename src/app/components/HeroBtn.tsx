import React from 'react';
import './heroBtn.css';

export default function HeroBtn({ name, target }: { name: string; target: string }) {
  const handleScrollTo = (target: string) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${name.includes('book') ? 'ms-4' : undefined}`}
    >
      {name}
    </a>
  );
}
