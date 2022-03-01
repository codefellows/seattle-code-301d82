import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in */}
          <LoginButton loginHandler={this.props.loginHandler}/>
          {/* <Button variant="primary">Login</Button> */}
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
