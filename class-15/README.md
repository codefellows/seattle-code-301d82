# Final Project Kick-off

## Freehand

- [Module 3 - Can of Books](https://ryangallaway792749.invisionapp.com/freehand/301d82----CanOfBooks---Module-Three-IPg8iMM5q?dsid_h=1eaed603b8b7a44a3f8fefe70d4700a1919ead9e50a550a5c2999406da2cb6ba&uid_h=cbbb57444f578b18334d6da7da4326ffef2a73ddf9d3e7cb64238df31b3b81d0)

## Overview

Today is the last day of formal lecture. It's time to add authentication to our app, so we know, with some level of confidence, who our users are.

You will be assigned your project teams. For the next week of this course, you will be working with your assigned project team to build out your final project. On the last day of class, your group will present your project.

## Daily Plan

- Authentication
- Code demo
- Lab preview
- Review [final project requirements](./project-guidelines.md)

## Learning Objectives

As a result of completing lecture 15 of Code 301, students will:

- Describe and Define
  - Authentication
  - Authorization
  - Auth0
- Understand Authentication - its uses and applications
- Understand the concept of OAuth
- Be able to implement authentication using Auth0 in their React application

## Notes

1. The difference between Authentication and Authorization is...
1. There are different types of authentication. Give an example of being authenticated using OAuth.
1. What is the difference between OAuth and Auth0?
1. What is Auth0? What are the requirements to use Auth0?
1. How does Auth0 make sure you are who you say you are?
1. LoginButton component:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LoginButton = (props) => {
     const { loginWithRedirect } = useAuth0();

     return <button onClick={() => loginWithRedirect()}>Log In</button>;
   };

   export default LoginButton;
   ```

1. LogOutButton component:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LogoutButton = () => {
     const { logout } = useAuth0();

     return (
       <button onClick={() => logout({ returnTo: window.location.origin })}>
         Log Out
       </button>
     );
   };

   export default LogoutButton;
   ```

1. IsLoadingAndError component - this should wrap everything

   ```javaScript
   import React from 'react';
   import { withAuth0 } from '@auth0/auth0-react';

   class IsLoadingAndError extends React.Component {
     render() {
       return(
         this.props.auth0.isLoading ?
           <div> Loading...</div>
           :
           this.props.auth0.error ?
           <div>Oops... {this.props.auth0.error.message}</div>
           :
           this.props.children
       )
     }
   }

   export default withAuth0(IsLoadingAndError);
   ```

1. Profile component - this will show the user's information. There is more that we can display. Details can be found in the docs.

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const Profile = () => {
     const { user, isAuthenticated, isLoading } = useAuth0();

     if (isLoading) {
       return <div>Loading ...</div>;
     }

     return (
       isAuthenticated && (
         <div>
           <img src={user.picture} alt={user.name} />
           <h2>{user.name}</h2>
           <p>{user.email}</p>
         </div>
       )
     );
   };

   export default Profile;

   ```

1. What are some good resources for doing my lab and learning more?

   - [auth0](https://auth0.com/docs/libraries/auth0-react)
