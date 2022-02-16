import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header>
        <h1>People of 301d82 {this.props.hearts}</h1>
      </header>
    );
  }
}

export default Header;
