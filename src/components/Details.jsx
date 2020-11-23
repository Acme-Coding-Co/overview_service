import React from 'react';

const Details = ( {item} ) => (

  <div>
    <small className="text-muted">{item.category}</small>
    <p className="h3">{item.name}</p>
    <p>${item.default_price}</p>
  </div>

);

export default Details;