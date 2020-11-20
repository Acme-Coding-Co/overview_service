
import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { Navbar, Product, Details, Desc, Gallery, StyleSelect, Rating } from './components/index';
import logo from './images/acme_logo.png';
import background from './images/clothes_rack.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      inventory: undefined,
      currentItem: undefined,
      currentStyles: undefined,
      search: ''
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://52.26.193.201:3000/products/list/?count=10')
      .then(res => this.setState({ inventory: res.data, currentItem: res.data[7] }))
      .then(res => {
        return axios.get(`http://52.26.193.201:3000/products/${this.state.currentItem.id}/styles`)
      })
      .then(res => this.setState({ currentStyles: res.data, imgUrl: res.data.results[0].photos[0].url}))
  }

  handleSearchSubmit() {
    let query = this.state.search.toLowerCase();

    this.state.inventory.forEach( item => {
      let itemName = item.name.toLowerCase();

      if (itemName.includes(query)) {
        this.setState({ currentItem: item })
        axios.get(`http://52.26.193.201:3000/products/${item.id}/styles`)
          .then(res => this.setState({ currentStyles: res.data, imgUrl: res.data.results[0].photos[0].url }))
      }
    })

  }

  handleChange(e) {
    this.setState({ search: e.target.value}, function() {console.log(this.state.search)})
  }

  render() {

    const inventory = this.state.inventory;
    const currentItem = this.state.currentItem;
    const currentStyles = this.state.currentStyles;
    const imgUrl = this.state.imgUrl;

    return (

      <>

        {/* {console.log('inventory:', inventory)} */}
        {/* {console.log('current:', currentItem)} */}
        {/* {console.log('selected:', selected)} */}

        {/* NAVBAR */}
        <Navbar bg={background} logo={logo} handleChange={this.handleChange} handleSearchSubmit={this.handleSearchSubmi} />

        {/* BANNER */}
        <marquee className="mt-3" behavior="scroll-text" direction="left"><p>|| <strong>SALE</strong> on all out-of-style footwear and accessories || get last year's style at next year's prices ||</p></marquee>

        <div className="container">
          {/* <div className="text-center block my-3" id="banner"><h5>ANNOUNCEMENTS</h5></div> */}
        </div>

        {/* OVERVIEW MODULE STARTS HERE */}
        <div className="container">

          {/* TOP ROW */}
          <div className="row">

            {/* LEFT COL */}
            <div className="col-md-7 bg-light">

              {/* GALLERY */}
                {inventory ?
                  <Gallery imgUrl={imgUrl} /> :
                  <div>nothing here</div>
                }

              </div>

            {/* RIGHT COL */}
            <div className="col-md-4 ml-auto">

              {/* RATING */}
              <div className="row border border-warning">
                <Rating />
              </div>

              {/* PRODUCT DETAILS */}
              <div className="row d-flex flex-column">
                {inventory ?
                  <Details item={currentItem} /> :
                  <div>nothing here</div>
                }
                {/* {selected ?
                  <ProductInfo item={selected} /> :
                  <ProductInfo item={defaultItem} />
                } */}
              </div>

              {/* STYLE SELECTOR */}
                <div className="row">
                  <StyleSelect styles={currentStyles} />
                </div>

              {/* BUTTON GROUP */}
              <div className="row mt-2 form-group">

                {/* SIZES*/}
                <select className="form-control mb-2">
                  <option value="" disabled selected hidden>Select Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>

                {/* QTY */}
                <select className="form-control mb-2">
                  <option value="" disabled selected hidden>Qty</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                {/* CART/SAVE */}
                <button className="btn btn-warning form-control col-md-9 mb-2  shadow-lg" type="submit">Add To Bag</button>
                <div className="btn btn-warning form-control col-md-2 ml-md-auto shadow-lg">{/* make this conditional depending on whether it's been saved - filled/not filled*/}<i class="far fa-heart"></i></div>

                </div>
              </div>
            </div>

          {/* BOTTOM ROW */}
          <div className="row mt-3">

            {/* LEFT COL */}
            <div className="col-lg-7">

              {/* PRODUCT DESCRIPTION */}
              {inventory ?
                <Desc item={currentItem} /> :
                <div>nothing here</div>
              }

            </div>

            {/* RIGHT COL */}
            <div className="col-lg-4 ml-auto justify-content-center">

              {/* SHARING LINKS */}
              Share to
              <ul>
                <li>
                  <button className="btn btn-sm btn-primary mb-2"><i class="fab fa-facebook"></i></button>
                </li>
                <li>
                  <button className="btn btn-sm btn-warning mb-2"><i class="fab fa-twitter"></i></button>
                </li>
                <li>
                  <button className="btn btn-sm btn-danger mb-2"><i class="fab fa-instagram"></i></button>
                </li>
                <li>
                  <button className="btn btn-sm btn-info">email</button>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </>
    );
  }
}

export default hot(App);