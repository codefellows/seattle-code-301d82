import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
