import React from 'react';
import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: []
    }
  }

  getCats = async () => {
    try {
      // remember we can grab with a  parameter as well 
      // let results = await axios(`${SERVER}/cats?location=Bremerton`);
      let results = await axios(`${SERVER}/cats`);
      this.setState({
        cats: results.data
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  // net effect, when the site loads (has all it needs), the data will be displayed
  componentDidMount(){
    this.getCats();
  }

  render() {

    let cats = this.state.cats.map(cat => (
      <p key={cat._id} >{cat.name} is {cat.color}</p>
    ))
    return (
      <>
        <h1>Cool Cats</h1>

        {
          this.state.cats.length > 0 &&
          <>
            {cats}
          </>
        }

      </>
    );
  }
}

export default App;
