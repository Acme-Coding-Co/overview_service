
import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { ProductInfo, ProductDesc, Gallery, StyleSelect } from './components/index';
import logo from './images/acme_logo.png';
import background from './images/clothes_rack.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      inventory: undefined,
      currentItem: undefined,
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
      .then(res => this.setState({ imgUrl: res.data.results[0].photos[0].url}))
  }

  handleSearchSubmit() {
    let query = this.state.search.toLowerCase();

    this.state.inventory.forEach( item => {
      let itemName = item.name.toLowerCase();

      if (itemName.includes(query)) {
        this.setState({ currentItem: item })
        axios.get(`http://52.26.193.201:3000/products/${item.id}/styles`)
          .then(res => this.setState({ imgUrl: res.data.results[0].photos[0].url }))
      }
    })

  }

  handleChange(e) {
    this.setState({ search: e.target.value}, function() {console.log(this.state.search)})
  }

  render() {

    const inventory = this.state.inventory;
    const currentItem = this.state.currentItem;
    const imgUrl = this.state.imgUrl;

    return (

      <>

        {/* {console.log('inventory:', inventory)} */}
        {/* {console.log('default:', defaultItem)} */}
        {/* {console.log('selected:', selected)} */}

        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center right' }}>

          <div className="container">

            {/* LOGO */}
            <a className="navbar-brand mb-1 pb-2" href="#"><img width="80px" height="36px" src={logo}></img></a>

            {/* TOGGLER */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse in navbar-collapse justify-content-between" id="nav-collapse">

              {/* LINKS */}
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a href="" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Men</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Women</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Youth</a>
                </li>
              </ul>

              {/* SEARCH */}
              <form className="form-inline">
                <div className="input-group">
                  <input type="search" className="form-control" placeholder="Search..." onChange={this.handleChange}/>
                  <div className="input-group-append">
                    <button className="btn btn-warning" id="search-btn" type="button" style={{ backgroundColor: '#F0A500' }} ><i class="fas fa-search" onClick={() => this.handleSearchSubmit()}></i></button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </nav>

        {/* BANNER */}
        <div className="container">
          <div className="text-center block my-3" id="banner"><h5>ANNOUNCEMENTS</h5></div>
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
              <div className="row border border-warning">RATING COMPONENT</div>

              {/* PRODUCT DETAILS */}
              <div className="row d-flex flex-column">
                {inventory ?
                  <ProductInfo item={currentItem} /> :
                  <div>nothing here</div>
                }
                {/* {selected ?
                  <ProductInfo item={selected} /> :
                  <ProductInfo item={defaultItem} />
                } */}
              </div>

              {/* STYLE SELECTOR */}
              <div className="row border border-success">
                <StyleSelect />
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
                <ProductDesc item={currentItem} /> :
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