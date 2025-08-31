import { useEffect, useRef } from 'react';
import './SimpleLogoLoop.css';

const SimpleLogoLoop = ({ logos, speed = 60 }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      const currentTransform = track.style.transform;
      const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)) || 0 : 0;
      const newX = currentX - speed / 60; // 60fps
      
      // Reset when fully scrolled
      if (Math.abs(newX) >= track.scrollWidth / 2) {
        track.style.transform = 'translateX(0px)';
      } else {
        track.style.transform = `translateX(${newX}px)`;
      }
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="simple-logo-loop">
      <div className="simple-logo-track" ref={trackRef}>
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <img
            key={`first-${index}`}
            src={logo.src}
            alt={logo.alt}
            title={logo.title}
            className="simple-logo-item"
          />
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`second-${index}`}
            src={logo.src}
            alt={logo.alt}
            title={logo.title}
            className="simple-logo-item"
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleLogoLoop;
