import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface IImageFlipper {
  front: React.ReactNode;
  back: React.ReactNode;
  flipDirection?: 'horizontal' | 'vertical';
}

const ImageFlipper: React.FC<IImageFlipper> = ({
  front,
  back,
  flipDirection = 'horizontal',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleFlip}
      className="cursor-pointer max-w-full overflow-hidden relative z-0" // Prevent overflow and set z-index for layering
      style={{ marginTop: '60px' }} // Adjust this based on your top bar height (60px is just an example)
    >
      <ReactCardFlip
        containerClassName="relative overflow-hidden w-full h-[350px]" // Ensure it doesn't overflow
        cardZIndex="0" // Set z-index to 0 to prevent overlap with the sticky top bar
        isFlipped={isFlipped}
        flipDirection={flipDirection}
      >
        <div key="front" className="w-full h-full">
          {front}
        </div>
        <div key="back" className="w-full h-full">
          {back}
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ImageFlipper;
