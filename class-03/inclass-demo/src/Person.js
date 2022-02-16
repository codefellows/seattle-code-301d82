import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';


import './Person.css';

class Person extends React.Component {
  // THIS is how we setup state in a component
  constructor(props) {
    super(props);
    this.state = {
      waves: 0,
      needsHelp: false,
    }
  }

  handleWaves = () => {
    this.setState({
      waves: this.state.waves + 1,
      // we can add things to state with setState only, 
      // not just by initially adding to state in constuctor
      // someRandomThing: 'banana'
    });
  }

  needsHelp = () => {
    this.setState({
      needsHelp: true,
    });
    console.log('something else happened')
  }

  helpGiven = () => this.setState({
    needsHelp: false
  });

  handlePersonClick = () => {
    this.props.addHearts();
    this.props.handleShowModal(this.props.name);
  }


  render() {
    // proof of props
    // console.log(this.props);
    // proof of state
    // console.log(this.state);

    return (
      <Col>
        <Card>
          <Card.Title onClick={this.handleWaves}>{this.props.name}</Card.Title>
          <Card.Text>
            👋: {this.state.waves}
          </Card.Text>
          <Card.Img
            src={this.props.imageURL}
            alt={this.props.name}
            title={this.props.name}
            onClick={this.handlePersonClick}
          />
          {/* wtf */}
          <Card.Text>{this.state.needsHelp ? 'I Need Help!' : ''}</Card.Text>

          <Button onClick={this.needsHelp}>
            I Need Help!
          </Button>
          <Button onClick={this.helpGiven} variant="success" className="right-button">
            Thanks for the Help!
          </Button>
        </Card>
      </Col>
    );
  }
}

export default Person;
