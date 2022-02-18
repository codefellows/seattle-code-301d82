import React from 'react';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    };
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  };

  render() {
    console.log('app state: ', this.state)
    return (
      <>
        <form>
          <label>Pick a City!!!
            <input type="text" onInput={this.handleCityInput}/>
          </label>
          <button>Lets Go!</button>
        </form>
      </>
    );
  }
}

export default Main;
