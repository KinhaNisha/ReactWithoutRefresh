import React from 'react';

const Image = ({ imageUrl, altText }) => {
  return (
    <img src={imageUrl} alt={altText} className="img-fluid" />
  );
};

export default Image;
