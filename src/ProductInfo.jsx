import React from 'react';

const ProductInfo = ( {item} ) => (

  <div>
    {console.log({item})}
    <small className="text-muted">{item.category}</small>
    <p className="h3">{item.name}</p>
    <p>${item.default_price}</p>
  </div>

);

export default ProductInfo;