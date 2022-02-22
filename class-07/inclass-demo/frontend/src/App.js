import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: '',
      petData: {}
    }
  }



  handleInput = (event) => {
    this.setState({
      species: event.target.value
    })
  }

  handlePet = async (event) => {
    event.preventDefault();

    try {
      let petData = await axios.get(`${process.env.REACT_APP_SERVER}/pet?species=${this.state.species}`);
      console.log(petData.data);
      this.setState({
        petData: petData.data,
        showPet: true
      })
    }catch(error){
      console.error(error);
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h1>App Component Lives</h1>
        <form onSubmit={this.handlePet}>
          <input type="text" onInput={this.handleInput} />
          <button >Display Pet</button>
        </form>
        {
          this.state.showPet &&  <p>{this.state.petData.name} is a {this.state.petData.breed}</p>
        }
      </>

    );
  }
}
export default App;
