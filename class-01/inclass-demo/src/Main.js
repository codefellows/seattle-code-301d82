import React from 'react';
import Person from './Person';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Person 
          name="Ryan" 
          age="47" 
          hairColor="brown"
        />
        <Person name="Dan"/>
        <Person name="Andres"/>
        <Person name="Micha"/>

      </main>
    );
  }
}

export default Main;
