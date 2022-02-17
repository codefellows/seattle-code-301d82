import React from 'react';
import { Form, ListGroup, Container } from 'react-bootstrap';

import './App.css';
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      word: '',
      nums: nums
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleWord = (event) => {
    this.setState({
      word: event.target.value
    })
  }

  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === 'even') {
      let newNums = nums.filter(num => num % 2 === 0);
      this.setState({ nums: newNums })
    } else if (selected === 'odd') {
      let newNums = nums.filter(num => num % 2 !== 0);
      this.setState({ nums: newNums })
    } else {
      this.setState({ nums: nums })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    let name = event.target.name.value;
    let word = event.target.word.value;
    let selected = event.target.selected.value;

    console.log(name, word, selected);

    this.setState({
      submitName: event.target.name.value,
      submitWord: event.target.word.value,
      submitSelected: event.target.selected.value
    })

    console.log('state forrm event handler', this.state)

  }



  render() {
    console.log(this.state)
    let listItems = this.state.nums.map((listItem, idx) => (
      <ListGroup.Item key={idx}>{listItem}</ListGroup.Item>
    ))

    return (
      <>
        <h1>In-FORM-Ed {this.state.name}</h1>
        <h3>{this.state.word ? this.state.word + 'is the word' : ''}</h3>

        {/* <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Deep Ponderings</legend>

            <label>Name
              <input name="name" type="text" onInput={this.handleName}/>
            </label>

            <label htmlFor="word">Word</label>
            <input name="word" id="word" type="text" onChange={this.handleWord}/>

            <select name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select>
            <button type="submit">Submit</button>

          </fieldset>
        </form> */}
        <Container>
          <Form onSubmit={this.handleSubmit} style={{ width: 'max-content', margin: 'auto' }}>
            {/* <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onInput={this.handleName} />
            </Form.Group>

            <Form.Group controlId="word">
              <Form.Label>handleWord</Form.Label>
              <Form.Control type="text" onChange={this.handleWord} />
            </Form.Group> */}

            <Form.Group controlId="selected">
              <Form.Select onChange={this.handleSelect}>
                <option value="all">All</option>
                <option value="even">Even</option>
                <option value="odd">Odd</option>
              </Form.Select>
            </Form.Group>
            {/* <Button type="submit">Submit</Button> */}
          </Form>
        </Container>

        <Container>
          <ListGroup>
            {listItems}
          </ListGroup>
        </Container>

      </>
    );
  }
}

export default App;
