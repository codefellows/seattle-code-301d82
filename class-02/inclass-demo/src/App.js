import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';


class App extends React.Component {
  render() {
    return (
      <>
      <Header />
        <Main data={data}/>
        <footer>
          &copy;CodeFellows 2022
        </footer>

      </>
    );
  }
}

export default App;
