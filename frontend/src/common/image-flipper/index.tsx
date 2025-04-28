import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';


interface IFlipCardProps {
  frontImage: string;
  backDescription: string;
  cardClassName: string;
  altText: string;
}

const FlipCard: React.FC<IFlipCardProps> = ({
  frontImage,
  backDescription,
  cardClassName,
  altText
}) => {

  const card_content_class = 'w-full h-full rounded-xl hover:border-2'
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={twMerge(
        cardClassName,
        'cursor-pointer'
      )}
      onClick={handleFlip}
    >
      
      {/* Front */}
      <img
        className={twMerge(
          card_content_class,
          isFlipped ? 'hidden' : ''
        )}
        src={frontImage}
        alt={altText}
      />

      {/* Back */}
      <div 
        className={twMerge(
          card_content_class,
          isFlipped ? '' : 'hidden'
        )}
      >
        <div className='m-6 text-justify bg-red-200'>
          {backDescription} aray ko!
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds
          adsadsaddasd dasdsa dasdas dasdas dasdsds

        </div>
      </div>

    </div> 
  );
};

export default FlipCard;