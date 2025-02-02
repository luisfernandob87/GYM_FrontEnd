import React, { useState, useEffect } from "react";
import "../CSS/Carrusel.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simula una llamada al backend para obtener imágenes
  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = [
        "https://picsum.photos/800/600?random=1",
        "https://picsum.photos/800/600?random=2",
        "https://picsum.photos/800/600?random=3",
        "https://picsum.photos/800/600?random=4",
        "https://picsum.photos/800/600?random=5",
      ];
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  // Cambia la imagen automáticamente cada 20 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 20 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  // Cambia a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Cambia a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Cambia a un índice específico
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
    <h2 className="mensajeBienvenida">Bienvenido</h2>
    <div className="carousel-container">
      {images.length > 0 ? (
        <>
          <button className="prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="carousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          </div>
          <button className="next-btn" onClick={nextSlide}>
            &#10095;
          </button>

          {/* Indicadores */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </>
      ) : (
        <p>Cargando imágenes...</p>
      )}
    </div>
    </>
  );
};

export default Carousel;
