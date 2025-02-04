import React, { useState, useEffect } from "react";
import "../CSS/Carrusel.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simula una llamada al backend para obtener imágenes
  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = [
        "https://mercadofitness.com/wp-content/uploads/2019/11/Bio-Ritmo-abrio-Tonus-Gym-su-cuarto-micro-gimnasio.jpg",
        "https://www.discoverpuertorico.com/sites/default/files/styles/horizontal_narrow_800x600/public/2023-01/Exercise%20%281%29.JPEG?h=ec7ec082&itok=rp8qApxa",
        "https://img-us.didaudo.net/us-locations/ES/000/000/66/0vivagym-meridiana-gimnasio-en-barcelona.jpg?output=webp&fit=cover&w=800&h=600&q=70",
        "https://www.fit-maker.com/cdn/shop/articles/maquina_de_gimnasio_para_abdomen_800x.png?v=1675286781",
        "https://xuanlanyoga.com/wp-content/uploads/2014/10/IMG_4528-e1417533306525.jpg",
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
