
import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { Navbar, Banner, Overview } from './components/index';
import logo from './images/acme_logo.png';
import background from './images/clothes_rack.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: undefined,
      currentItem: undefined,
      currentStyles: undefined,
      ratings: undefined,
      search: ''
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://52.26.193.201:3000/products/list/?count=10')
      .then(res => this.setState({ inventory: res.data, currentItem: res.data[4] }))
      .then(res => {
        return axios.get(`http://52.26.193.201:3000/products/${this.state.currentItem.id}/styles`)
      })
      .then(res => this.setState({ currentStyles: res.data, imgUrl: res.data.results[0].photos[0].url }))
      .then(res => {
        return axios.get(`http://52.26.193.201:3000/reviews/${this.state.currentItem.id}/meta`)
      })
      .then(res => this.setState({ ratings: res.data.ratings }))
  }

  handleSearchSubmit() {
    let query = this.state.search.toLowerCase();

    this.state.inventory.forEach( item => {
      let itemName = item.name.toLowerCase();

      if (itemName.includes(query)) {
        this.setState({ currentItem: item })
        axios.get(`http://52.26.193.201:3000/products/${item.id}/styles`)
          .then(res => this.setState({ currentStyles: res.data, imgUrl: res.data.results[0].photos[0].url }))
          .then(res => {
            return axios.get(`http://52.26.193.201:3000/reviews/${item.id}/meta`)
          })
          .then(res => {
            for (let score in res.data.ratings) {
              console.log(score)
            }
          })
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
    const ratings = this.state.ratings;

    return (

      <>

        {/* NAVBAR */}
        <Navbar bg={background} logo={logo} handleChange={this.handleChange} handleSearchSubmit={this.handleSearchSubmit} />

        {/* BANNER */}
        <Banner />

        {/* OVERVIEW MODULE */}
        <Overview inventory={inventory} currentItem={currentItem} currentStyles={currentStyles} imgUrl={imgUrl} ratings={ratings} />

      </>
    );
  }
}

export default hot(App);