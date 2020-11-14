import React from 'react';

const Item = ( {item} ) => (

  <div>
    {console.log({item})}
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <h4>${item.default_price}</h4>
    <br></br>
  </div>

)

export default Item;