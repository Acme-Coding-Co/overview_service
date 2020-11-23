import React from 'react';

  const StyleSelect = ( {styles} ) => (

    <div className="container-fluid">
      <div className="row">
        {styles &&
          styles.results.map( style => {
            let imgUrl = style.photos[0].thumbnail_url;
            return (
              <div className="col-md-4 col-3 my-2">
                <a className="thumbnail d-block" href="#">
                  <img src={imgUrl} alt={style.name} className="img-fluid shadow-lg"
                  style={{ 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '125px', 'height': '75px' }}/>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>

  )
export default StyleSelect;