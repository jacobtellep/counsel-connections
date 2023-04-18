// components/ExtendedImage.js
import React from 'react';
import Image from 'next/image';

const Image = ({
  src,
  alt,
  width,
  height,
  layout,
  placeholder = 'blur',
  blurDataURL,
  customClass = '',
  objectFit = 'cover',
  objectPosition = '50% 50%',
  ...rest
}) => {
  const defaultAltText = 'Image description not available';

  // Use the provided alt text or fallback to the default
  const altText = alt || defaultAltText;

  return (
    <Image
      src={src}
      alt={altText}
      width={width}
      height={height}
      layout={layout}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={customClass}
      objectFit={objectFit}
      objectPosition={objectPosition}
      {...rest}
    />
  );
};

export default Image;
