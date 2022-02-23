import axios from 'axios';
import React from 'react';
import { Container, Form, Button, Carousel } from 'react-bootstrap';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photoData: [],
    }
  }

  handleInput = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  };

  getPhotos = async (e) => {
    e.preventDefault();

    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.searchQuery}`)
      this.setState({
        photoData: results.data,
        showImages: true,
        photoError: false,
        photoErrorMessage: ''
      })
    } catch (error) {
      this.setState({
        photoError: true,
        photoErrorMessage: `A Photo Error Occurred: ${error.response.status}, ${error.response.data}`
  
      })
    }
  }

  render() {
    let carouselItems = this.state.photoData.map((pic, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={pic.src}
          alt={pic.alt}
        />
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>Photo by: {pic.photographer}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))
    return (
      <>
        <h1>View Some Great Photos</h1>

        <Container>
          <Form onSubmit={this.getPhotos} style={{ width: 'max-content', margin: 'auto' }}>

            <Form.Group controlId="searchQuery">
              <Form.Label>Photos You NEED!</Form.Label>
              <Form.Control type="text" onInput={this.handleInput} />
            </Form.Group>
            <Button type="submit">Get Them Now!</Button>
          </Form>
        </Container>

        {
          this.state.showImages &&
          <Container>
            <Carousel>
              {carouselItems}
            </Carousel>
          </Container>
        }

        <h2>{this.state.photoErrorMessage}</h2>
      </>
    );
  }
}

export default App;
