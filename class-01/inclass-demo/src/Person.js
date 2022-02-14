import React from 'react';

class Person extends React.Component {
  render() {
    console.log(this.props);
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos illum distinctio omnis numquam sint suscipit explicabo hic minima a.
        </p>
      </article>
    )
  }
}

export default Person;
