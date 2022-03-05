import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
// import Profile from './Profile';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Auth0 Demo</h1>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {/* {this.props.auth0.isAuthenticated? <Profile /> : <h2>Please Log In</h2>} */}
        {this.props.auth0.isAuthenticated? <Content /> : <h2>Please Log In</h2>}

      </>
    );
  }
}

export default withAuth0(App);
