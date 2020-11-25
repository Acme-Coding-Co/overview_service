import React from 'react';

const ButtonGroup = ({ addToBag }) => (

  <div>
    <form>

      {/* SIZES*/}
      <div className="form-group">
        <select className="form-control" id="size">
          <option value="" disabled selected hidden>Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* QTY */}
      <div className="form-group">
        <select className="form-control" id="qty">
          <option value="" disabled selected hidden>Qty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      {/* CART/SAVE */}
      <div className="d-flex justify-content-between">
        <div className="btn btn-warning form-control col-9 shadow-lg" type="submit" onClick={() => addToBag()}>Add To Bag</div>
        <div className="btn btn-warning form-control col-2 shadow-lg">{/* make this conditional depending on whether it's been saved - filled/not filled*/}<i class="far fa-heart"></i></div>
      </div>

    </form>
  </div>
)

export default ButtonGroup;