import React from 'react';
import Button from 'react-bootstrap/Button';

import './Person.css';

class Person extends React.Component {
  // THIS is how we setup state in a component
  constructor(props){
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
  


  render() {
    // proof of props
    // console.log(this.props);
    // proof of state
    // console.log(this.state);

    return (
      <article>
        <h3 onClick={this.handleWaves}>{this.props.name}</h3>
        <p>👋: {this.state.waves}</p>
        <img src={this.props.imageURL} alt={this.props.name} title={this.props.name}/>
        {/* wtf */}
        <p>{this.state.needsHelp ? 'I Need Help!' : ''}</p>

        <Button onClick={this.needsHelp}>
          I Need Help!
        </Button>
        <Button onClick={this.helpGiven} variant="success" className="right-button">
          Thanks for the Help!
        </Button>

      </article>
    );
  }
}

export default Person;
