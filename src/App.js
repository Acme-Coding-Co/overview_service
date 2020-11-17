
import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from '../dummyData'
import Item from './Item';
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
            <a className="navbar-brand" href="#"><img width="80px" height="36px" src={logo}></img></a>

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

              <form className="form-inline mx-1">
                <input type="search" className="form-control mr-sm-2" placeholder="Search" onChange={this.handleChange}/>
                <button className="btn btn-outline-light"><i class="fas fa-search"></i></button>
              </form>

            </div>
          </div>
        </nav>

        <div className="container">
          <div className="text-center block my-3" id="banner"><h5>ANNOUNCEMENTS</h5></div>
        </div>


        <div className="container border rounded">
          <Item item={this.state.selected} />
        </div>
        
      </>
    );
  }
}

export default hot(App);