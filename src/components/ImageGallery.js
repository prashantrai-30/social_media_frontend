import React from 'react';

function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`User upload ${index + 1}`}
          className="w-full h-32 object-cover rounded"
        />
      ))}
    </div>
  );
}

export default ImageGallery;