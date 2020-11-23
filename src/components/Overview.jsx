import React from 'react';
import { Navbar, Banner, Product, Details, Desc, Gallery, StyleSelect, Rating, ButtonGroup, Sharing } from './index';

const Overview = ({ inventory, currentItem, currentStyles, imgUrl, ratings }) => (

  <div>
    {/* START OF CONTAINER */}
    <div className="container">

      {/* TOP ROW */}
      <div className="row">

        {/* TOP-LEFT COL */}
        <div className="col-md-7 d-flex flex-column justify-content-center">
          {/* GALLERY */}
          {inventory ?
            <Gallery imgUrl={imgUrl} /> :
            <div>nothing here</div>
          }
        </div>

        {/* TOP-RT COL */}
        <div className="col-md-5">

          {/* PRODUCT DETAILS */}
          {inventory ?
            <Details item={currentItem} /> :
            <div>nothing here</div>
          }

          {/* RATING */}
          <div className="row ml-1 mb-3">
            <Rating ratings={ratings} />
          </div>

          {/* STYLE SELECTOR */}
          <div className="row">
            <StyleSelect styles={currentStyles} />
          </div>

          {/* BUTTON GROUP */}
          <ButtonGroup />

        </div>

      </div>

      {/* BOTTOM ROW */}
      <div className="row mt-2">

          {/* BOT-LEFT COL */}
          <div className="col-md-7">
            {/* PRODUCT DESCRIPTION */}
            {inventory ?
              <Desc item={currentItem} /> :
              <div>nothing here</div>
            }
          </div>

          {/* BOT-RT COL */}
          <div className="col-md-5">
            {/* SHARING LINKS */}
            <Sharing />
          </div>

      </div>

    </div>
    {/* END OF CONTAINER */}

  </div>
)

export default Overview;