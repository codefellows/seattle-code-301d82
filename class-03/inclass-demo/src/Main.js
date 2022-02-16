import React from 'react';
import Person from './Person';
import Row from 'react-bootstrap/Row';

import './Main.css';

class Main extends React.Component {


  render() {
    // proof that data is being passed successfully from App.js
    console.log(this.props)

    let people = this.props.data.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          imageURL={person.image}
          addHearts={this.props.addHearts}
          handleShowModal={this.props.handleShowModal}
        />
    ));

    return (
      <main>
        <Row xs={1} sm={2} md={3} lg={4}>
          {people}
        </Row>
      </main>
    );
  }
}

export default Main;
