import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    if(this.props.auth0.isAuthenticated){
      // get token 
      
      const res = await this.props.auth0.getIdTokenClaims();
      // MUST use double underscore
      const jwt = res.__raw;
      // console.log(jwt);

      /////////////// get tot this point, below not required///////////

      //as per axios docs, we can send an config object to make our call as well
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books',
        headers: {"Authorization": `Bearer ${jwt}`}
      }

      console.log('config', config)


      const bookReults = await axios(config);
      console.log(bookReults.data)
    }
  }





  componentDidMount(){
    this.getBooks();
  }

  render() {
    console.log(this.props.auth0.user)
    return (
      <>
        <h1>Books We Hope</h1>
      </>
    );
  }
}

export default withAuth0(Content);
