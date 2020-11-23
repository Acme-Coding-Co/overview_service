import React from 'react';
import StarRatings from 'react-star-ratings';

const Rating = ({ ratings }) => (

    <div>

      <StarRatings
        rating={1}
        starDimension="18px"
        starSpacing="1px"
        starRatedColor="#f0ad4e"
      />
    </div>

);


export default Rating;