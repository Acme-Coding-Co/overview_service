import React from 'react';
import axios from 'axios';

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item,
      photoUrl: undefined
    }
  }

  componentDidMount() {
    axios.get(`http://52.26.193.201:3000/products/${this.props.item.id}/styles`)
      .then(res => {
        this.setState({ photoUrl: res.data.results[0].photos[0].url }, function() { console.log( res.data.results[0].photos[0].url )})
      })
  }

  render() {

    return (

      <div>
      {/* {console.log('gallery:', this.state.photoUrl.results[0].photos[0].url)} */}
        <img src={this.state.photoUrl} alt="product photo" width="100%"/>
      </div>

    )
  }
}

export default Gallery;