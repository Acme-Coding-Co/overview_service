import React from 'react';

const Gallery = ({ images }) => (

  <div>

    {/* CAROUSEL */}
    <div id="productCarousel" className="carousel slide carousel-fade mb-2" data-ride="carousel" data-interval="10000">
      <div className="carousel-inner">
        {images &&
          <div className="carousel-item active">
            <img className="d-block w-100" src={images[0].url} alt="" style={{ 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '500', 'height': '500px' }}/>
          </div>
        }
        {images &&
          images.slice(1).map( image => {
          return (
            <div className="carousel-item">
              <img className="d-block w-100" src={image.url} alt="" style={{ 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '500', 'height': '500px' }}/>
            </div>
          )
          })
        }
      </div>
      <a class="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    {/* MODAL VIEW */}
    {/* <div class="modal fade" id="photoModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div class="modal-body">
            <div id="carouselExample" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={imgUrl} />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    </div> */}

    {/* THUMBNAIL GALLERY */}
    <div className="d-flex justify-content-around">
      {images &&
          images.map( image => {
            let thumbNail = image.thumbnail_url;
            return (
              <div className="mr-2">
                <a className="thumbnail" href="#">
                  <img src={thumbNail} alt="" className="img-fluid shadow-lg"
                  style={{ 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '100px', 'height': '50px' }}/>
                </a>
              </div>
            )
          })
        }
    </div>

  </div>

)

export default Gallery;