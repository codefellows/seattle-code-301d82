import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: [],
      city: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  handlePokemon = async (e) => {
    e.preventDefault();
    // fist axios call.  this is an asychronous call
    try {
      let pokemonData = await axios.get('https://pokeapi.co/api/v2/pokemon');

      // prrof of life that we are in fact getting the data we want
      // console.log(pokemonData.data.results);
      this.setState({
        pokemonData: pokemonData.data.results
      })
    } catch (error) {
      console.log('error:', error)
      console.log('error.response', error.response)
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data}`
      })
    }
  }

  handleCityInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  };

  getCityData = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityData = await axios.get(url);

    console.log(cityData.data[0])

  }


  render() {
    // proof that state is what we expect
    console.log('app state:', this.state)

    // example of img URL:
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6,-122.3&zoom=12`

    let pokemonListItems = this.state.pokemonData.map((pokemon, index) => (
      <li key={index}>{pokemon.name}</li>
    ))

    return (
      <>
        <h1>Pokemon and Map Examples</h1>
        <form>
          <button onClick={this.handlePokemon}>Display Pokemon</button>
        </form>

        <form onSubmit={this.getCityData}>
          <label>Pick a City!!!
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <button type="submit">Lets Go!</button>
        </form>

        {
          this.state.error
            ?
            <p>{this.state.errorMessage}</p>
            :
            <ul>
              {pokemonListItems}
            </ul>
        }

        {/* if conditional rendering WERE necessary, this is how we would do it  */}
        {/* {
        this.state.pokemonData.length > 0 &&
        <ul>
          {pokemonListItems}
        </ul>
      } */}
      </>

    );
  }
}

export default App;
