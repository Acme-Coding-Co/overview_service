import React from 'react';

  const StyleSelect = ( {styles} ) => (

    <div className="container">
      <div className="row">
      {/* STYLE SELECTION COMPONENT */}
      {styles &&
        styles.results.map( (style) => {
          let imgUrl = style.photos[0].thumbnail_url;
          return (
            <div class="col-md-3 col-3 my-2 justify-content">
              <a class="thumbnail" href="#">
                {/* <div className="rounded" style={{ backgroundImage: `url(${imgUrl})`, backgroundPosition: 'center bottom', 'height': '100px', 'width': '100px' }}>test</div> */}
                <img src={style.photos[0].thumbnail_url} alt={style.name} className="img-fluid rounded shadow-lg"
                style={{ 'position': 'bottom', 'objectFit': 'cover', 'width': '100px', 'height': '50px' }}/>
              </a>
            </div>
          )
        })
      }
      </div>
    </div>

  )
export default StyleSelect;