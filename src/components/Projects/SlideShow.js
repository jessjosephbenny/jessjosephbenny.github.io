// ImageSlideshow.js
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight:'200px', maxHeight:'200px', margin:'8px'}}>
      <img src={images[currentImageIndex]} alt="" style={{ width: '100%', height: 'auto' }} />
      <Button
        variant="primary"
        onClick={handlePrevImage}
        style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      >
        <ArrowBackIos />
      </Button>
      <Button
        variant="primary"
        onClick={handleNextImage}
        style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      >
        <ArrowForwardIos />
      </Button>
    </div>
  );
};

export default Slideshow;