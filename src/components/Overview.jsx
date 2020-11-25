import React from 'react';
import {Navbar,
        Banner,
        Details,
        Desc,
        Gallery,
        StyleSelect,
        Rating,
        ButtonGroup,
        Sharing} from './index';

const Overview = ({ inventory, currentItem, styles, currentStyle, images, ratings, addToBag }) => (

  <div>

    {/* START OF CONTAINER */}
    <div className="container">

      {/* TOP ROW */}
      <div className="row">

        {/* TOP-LEFT COL */}
        <div className="col-md-7 d-flex flex-column justify-content-center">

          {/* GALLERY */}
          {inventory ?
            <Gallery images={images} /> :
            <div>nothing here</div>
          }

        </div>

        {/* TOP-RT COL */}
        <div className="col-md-5">

          {/* PRODUCT DETAILS */}
          {inventory ?
            <Details item={currentItem} style={currentStyle} /> :
            <div>nothing here</div>
          }

          {/* RATING */}
          <div className="row ml-1 mb-3">
            <Rating ratings={ratings} />
          </div>

          {/* STYLE SELECTOR */}
          <div className="row">
            <StyleSelect styles={styles} />
          </div>

          {/* BUTTON GROUP */}
          <ButtonGroup addToBag={addToBag}/>

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