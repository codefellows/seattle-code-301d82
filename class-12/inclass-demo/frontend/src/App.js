import React from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import Cats from './Cats';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      location: '',
    }
  }

  getCats = async () => {
    try {
      // remember we can grab with a  parameter as well 
      // let results = await axios(`${SERVER}/cats?location=Bremerton`);
      let url = `${SERVER}/cats`;
      if (this.state.location) {
        url = `${SERVER}/cats?location=${this.state.location}`
      }
      let results = await axios(url);
      this.setState({
        cats: results.data
      })
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }

  postCat = async (newCat) => {
    try {
      let url = `${SERVER}/cats`;
      let createdCat = await axios.post(url, newCat);
      console.log(createdCat.data);
      // we could do this...
      // this.getCats();
      this.setState({
        cats: [...this.state.cats, createdCat.data]
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  deleteCat = async (id) => {
    try {
      // maybe validate the id of this "book" has a correct email address????
      let url = `${SERVER}/cats/${id}`;
      await axios.delete(url)
      const updatedCats = this.state.cats.filter(cat => cat._id !== id);
      this.setState({cats: updatedCats})
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  // net effect, when the site loads (has all it needs), the data will be displayed
  componentDidMount() {
    this.getCats();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getCats();
  }

  handleCatSubmit = (e) => {
    e.preventDefault();

    let newCat = {
      name: e.target.name.value,
      location: e.target.location.value,
      color: e.target.color.value,
      hasClaws: e.target.hasClaws.checked
    }

    this.postCat(newCat);

  }

  render() {
    console.log('app.state', this.state);

    return (
      <>
        <h1 className="text-center">Cool Cats</h1>

        <Form className="w-50 mx-auto" onSubmit={this.handleSubmit}>
          <Form.Group controlId="location" className="text-center">
            <Form.Label >Enter Location</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => this.setState({ location: e.target.value })}
            />
          </Form.Group>
          <Button className="mx-auto d-block"> Show me cats on location!</Button>
        </Form>

        {
          this.state.cats.length > 0 &&
          <Cats cats={this.state.cats} deleteCat={this.deleteCat}/>

        }


        <Container>
          <Form onSubmit={this.handleCatSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="hasClaws">
              <Form.Check type="checkbox" label="has-claws" />
            </Form.Group>
            <Button type="submit">Add Cat</Button>
          </Form>

        </Container>
      </>
    );
  }
}

export default App;
