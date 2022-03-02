import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

class UpdateCatForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    let catToUpdate = {
      name: e.target.name.value || this.props.cat.name,
      location: e.target.location.value || this.props.cat.location,
      color: e.target.color.value || this.props.cat.color,
      hasClaws: e.target.hasClaws.checked || this.props.cat.hasClaws,
      _id: this.props.cat._id,
      __v: this.props.cat.__v
    }
    console.log(catToUpdate);
    this.props.updateCat(catToUpdate);
  }
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.name}/>
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.color}/>
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.location}/>
            </Form.Group>
            <Form.Group controlId="hasClaws">
              <Form.Check type="checkbox" label="has-claws" />
            </Form.Group>
            <Button type="submit">Update Cat</Button>
          </Form>

        </Container>
      </>
    );
  }
}

export default UpdateCatForm;
