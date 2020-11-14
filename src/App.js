
import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col, Alert } from 'react-bootstrap';
import dummyData from '../dummyData'
import Item from './Item';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      inventory: dummyData
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isShown: !this.state.isShown})
  }

  render() {

    return (

      <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Acme Coding Co.</Navbar.Brand>
        </Navbar>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="6">
              <button type="button" class="btn btn-primary" onClick={() => this.handleClick()}>
                This is a bootstrap button
              </button>
              {this.state.isShown ?
                <div>
                  <Alert variant="success">
                    <Alert.Heading>Button success</Alert.Heading>
                    <p>Looks like you clicked that button. Wonder what'll happen if you do it again?</p>
                  </Alert>
                  <div>
                    {/* {console.log(this.state.inventory)} */}
                    {this.state.inventory &&
                      this.state.inventory.map( item => <Item item={item} /> )
                    }
                  </div>
                </div> :
                <Alert variant="danger">
                  <Alert.Heading>OH NOOOOOOO</Alert.Heading>
                </Alert>
              }
            </Col>
          </Row>
          {/* <Row>
            <Col><h2>1 of 2</h2></Col>
            <Col><h2>2 of 2</h2></Col>
          </Row>
          <Row>
            <Col><h2>1 of 3</h2></Col>
            <Col><h2>2 of 3</h2></Col>
            <Col><h2>3 of 3</h2></Col>
          </Row> */}
        </Container>

      </>
    );
  }
}

export default hot(App);