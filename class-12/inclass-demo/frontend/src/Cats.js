import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';


class Cats extends React.Component {

  render() {
    let cats = this.props.cats.map(cat => (
      <Cat cat={cat} key={cat._id} deleteCat={this.props.deleteCat}/>
    ));

    return (
      <Container>
        <ListGroup>
          {cats}
        </ListGroup>
      </Container>
    );
  }
}

class Cat extends React.Component{
  
  render(){
    return(
      <ListGroup.Item >
        {this.props.cat.name} is {this.props.cat.color} 
        <Button onClick={() => this.props.deleteCat(this.props.cat._id)}>Delete Cat</Button>
        </ListGroup.Item>
    )
  }
}



export default Cats;
