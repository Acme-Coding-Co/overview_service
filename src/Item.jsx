import React from 'react';

const Item = ( {item} ) => (

  <div>
    {/* {console.log({item})} */}
    <h2>{item.name}</h2>
    {/* <p>{item.description}</p> */}
    <p>${item.default_price}</p>
    <br></br>
  </div>

)

export default Item;