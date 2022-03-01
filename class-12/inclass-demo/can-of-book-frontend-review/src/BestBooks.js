import axios from "axios";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bookImg from './booky-book.jpg';

let SERVER = process.env.REACT_APP_SERVER_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    let url = `${SERVER}/books?email=${this.props.user.email}`;
    // console.log(url);
    try {
      let results = await axios.get(url);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    // console.log("best books state:", this.state);

    // bookComponents = this.state.books.map((book, idx) => (
    //   <Carousel.Item className="h-100">
    //     <Carousel.Caption key={idx} />
    //   </Carousel.Item>
    // ));

    /* DONE: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item className="h-100"
                key={idx}>
                <img
                  className="d-block w-100 h-50"
                  src={bookImg}
                  alt={book.name}
                />
                <Carousel.Caption>
                  <h1>{book.title}</h1>
                  <h3>{book.description}</h3>
                </Carousel.Caption>
              </Carousel.Item>))}
          </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
