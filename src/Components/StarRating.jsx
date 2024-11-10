import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    if (rating === index + 1) {
        setRating(0);
      } else {
        setRating(index + 1);
      }
  };

  return (
    <div className="rating flex gap-3 w-full pb-6">
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={index}
          className={`cursor-pointer text-yellow-500 fa-2xl ${
            index < rating ? 'fa-solid ' : 'fa-regular '
          } fa-star`}
          onClick={() => handleRating(index)}
        ></i>
      ))}
    </div>
  );
};

export default StarRating;
