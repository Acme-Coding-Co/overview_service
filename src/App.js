
import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from '../dummyData'
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import logo from './Acme-Logo-01.png';
import background from './clothes-rack.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      inventory: dummyData,
      selected: dummyData[0],
      search: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({ isShown: !this.state.isShown})
  }

  handleChange(e) {
    this.setState({ search: e.target.value}, function() {console.log(this.state.search)})
  }

  render() {

    return (

      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center right' }}>
          <div className="container">
            <a className="navbar-brand mb-1 pb-2" href="#"><img width="80px" height="36px" src={logo}></img></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse in navbar-collapse justify-content-between" id="nav-collapse">
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

              <form className="form-inline">
                <div className="input-group">
                  <input type="search" className="form-control" placeholder="Search..." onChange={this.handleChange}/>
                  <div className="input-group-append">
                    <button className="btn btn-warning" id="search-btn" type="button" style={{ backgroundColor: '#F0A500' }} ><i class="fas fa-search"></i></button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </nav>

        <div className="container">
          <div className="text-center block my-3" id="banner"><h5>ANNOUNCEMENTS</h5></div>
        </div>


        <div className="container border rounded">
          <div className="row">
            <div className="col-md-8 border  border-primary">img gallery</div>
            <div className="col-md-4 border border-primary">
              <div className="row border border-warning">rating
              </div>
              <div className="row border border-warning d-flex flex-column">
                <ProductInfo item={this.state.selected} />
              </div>
              <div className="row border border-warning">style select
              </div>
              <div className="row border border-warning">
                <div className="btn btn-outline-dark col-md-9">size select</div>
                <div className="btn btn-outline-dark col-md-3">qty</div>
                <div className="btn btn-outline-dark col-md-10">add to bag</div>
                <div className="btn btn-outline-dark col-md-2">{/* make this conditional depending on whether it's been saved - filled/not filled*/}<i class="far fa-heart"></i></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 border-right border-danger">
              <ProductDescription item={this.state.selected} />
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center">
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default hot(App);