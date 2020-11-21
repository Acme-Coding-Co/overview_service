
import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { Navbar, Banner, Product, Details, Desc, Gallery, StyleSelect, Rating, ButtonGroup, Sharing } from './components/index';
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
        <Navbar bg={background} logo={logo} handleChange={this.handleChange} handleSearchSubmit={this.handleSearchSubmit} />

        {/* BANNER */}
        <Banner />

        {/* OVERVIEW MODULE STARTS HERE */}
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
                <Rating rating=''/>
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

        {/* END OF CONTAINER */}
        </div>
      </>
    );
  }
}

export default hot(App);