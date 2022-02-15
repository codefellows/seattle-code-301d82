import React from 'react';
import Person from './Person';

import './Main.css';

class Main extends React.Component {


  render() {
    // proof that data is being passed successfully from App.js
    // console.log(this.props.data)

    let people = [];
    this.props.data.forEach((person, index) => {
      people.push(
        <Person
          key={index}
          name={person.name}
          imageURL={person.image}
        />
      )
    })
    return (
      <main>
        {people}
      </main>
    );
  }
}

export default Main;
