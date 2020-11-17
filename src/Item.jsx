import React from 'react';

const Item = ( {item} ) => (

  <div>
    <div className="row justify-content-center">
      <div className="col-8">
        <img src="https://i1.adis.ws/i/boohooamplience/mzz12456_grey_xl?$product_image_main_mobile$"
        style={{ height: '50%'}}>
        </img>
      </div>
      <div className="col-4">
        <h2>{item.name}</h2>
        {/* <p>{item.description}</p> */}
        <p>${item.default_price}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-8">
        <p>{item.description}</p>
        {/* {console.log(this.state.selected.description)} */}
      </div>
    </div>
  </div>

)

export default Item;