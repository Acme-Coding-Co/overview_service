import React from 'react';

const ProductInfo = ( {item} ) => (

  <div>
    {console.log({item})}
    <p className="text-muted">{item.category}</p>
    <h3>{item.name}</h3>
    <p>${item.default_price}</p>
  </div>

);

export default ProductInfo;