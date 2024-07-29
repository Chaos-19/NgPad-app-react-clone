import React, { useState, useEffect } from 'react';

interface DynamicImageProps {
  imagePath: string;
  alt?: string;
}

const DynamicImage = ({ imagePath, alt = 'icon' }: DynamicImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        console.log(imageSrc);
        const imageModule = await import(`../${imagePath}`);

        setImageSrc(imageModule.default);
      } catch (error) {
        console.error('Error importing image:', error);
      }
    };

    importImage();
  }, [imagePath]);

  if (!imageSrc) {
    return <p>Loading image...</p>;
  }

  return <img src={imageSrc} alt="Dynamically imported" />;
};

export default DynamicImage;
