import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageBanner.css';

const ImageBanner = ({ images = [], autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="banner-container">
        <div className="banner-placeholder">
          <p>Aguardando imagens...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        {/* Images */}
        <div className="banner-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="banner-image"
              />
              {image.caption && (
                <div className="banner-caption">
                  <h3>{image.title}</h3>
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="banner-nav banner-nav-prev"
              onClick={goToPrevious}
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="banner-nav banner-nav-next"
              onClick={goToNext}
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="banner-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`banner-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageBanner;
