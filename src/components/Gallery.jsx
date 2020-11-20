import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    const imgUrl = this.props.imgUrl;

    return (

      <div>

        {/* {console.log(this.props)} */}
        <div className="row" id="gallery" data-toggle="modal" data-target="#photoModal">
          <div className="col-12">
            <img className="img-fluid shadow-lg" src={imgUrl} alt="product photo" data-target="#photoCarousel" data-slide-to="0"/>
          </div>
        </div>

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

      </div>

    )
  }
}

export default Gallery;