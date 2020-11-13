
import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isShown: !this.state.isShown})
  }

  render() {

    const { name } = this.props;

    return (

      <div>
        <h1>
          Hello, there.
        </h1>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <button type="button" class="btn btn-primary" onClick={() => this.handleClick()}>
                This is a bootstrap button
              </button>
              {this.state.isShown &&
                <h3>Click</h3>
              }
            </Col>
          </Row>
          <Row>
            <Col><h2>1 of 2</h2></Col>
            <Col><h2>2 of 2</h2></Col>
          </Row>
          <Row>
            <Col><h2>1 of 3</h2></Col>
            <Col><h2>2 of 3</h2></Col>
            <Col><h2>3 of 3</h2></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default hot(App);