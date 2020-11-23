import React from 'react';
import StarRatings from 'react-star-ratings';
import getScore from './getScore'

const Rating = ({ ratings }) => (

    <div>
      {/* {console.log({ ratings })} */}
      {/* {console.log(getScore({ratings}))} */}
      {getScore({ratings}) ?
        <StarRatings
          rating={getScore({ratings})}
          starDimension="18px"
          starSpacing="1px"
          starRatedColor="#f0ad4e"
        /> :
        <StarRatings
          rating={0}
          starDimension="18px"
          starSpacing="1px"
          starRatedColor="#f0ad4e"
        />
      }
    </div>

);


export default Rating;