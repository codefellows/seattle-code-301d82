import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      name: 'Unknown Name'
    }
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '♥️'
    })
  }

  handleCloseModal  = () => {
    this.setState({
      showModal: false
    })
  }

  handleShowModal  = (person) => {
    this.setState({
      showModal: true,
      name: person
    })
  }


  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.name.split(' ')[0]} is  an  important part of this community!
          </Modal.Body>

        </Modal>

        <Main 
          data={data} 
          addHearts={this.addHearts}
          handleShowModal={this.handleShowModal}
        />
        <footer>
          &copy;CodeFellows 2022
        </footer>

      </>
    );
  }
}

export default App;
