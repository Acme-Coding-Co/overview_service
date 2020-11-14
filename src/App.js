
import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Alert, Form, FormControl, Button } from 'react-bootstrap';
import dummyData from '../dummyData'
import Item from './Item';
import logo from './osirisLogo.svg';

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
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />{' '}
            Acme Clothing Co.
            </Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl type="text" placeholder="search..." className="mr-sm-2" onChange={this.handleChange} />
              <Button variant="outline-submit">Search</Button>
            </Form>
        </Navbar>
        <Container>
          <Row className="justify-content-md-center">
            <p>Welcome to the store</p>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8">

            </Col>
            <Col md="4">
              <div>
                {this.state.inventory &&
                  <Item item={this.state.selected} />
                }
              </div>
            </Col>
          </Row>
          <Row className="justify-content-lg-center">
            <Col lg="10">
              <p>{this.state.selected.description}</p>
              {console.log(this.state.selected.description)}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default hot(App);