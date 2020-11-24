import React from 'react';

const Details = ({ item, style }) => (

  <div>
  {style &&
    <div>
      <small className="text-muted">{item.category}</small>
      <p className="h3">{item.name}</p>
      <p>${style.original_price}</p>
    </div>
  }
  </div>
);

export default Details;