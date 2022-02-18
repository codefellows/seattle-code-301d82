# Class 5: Putting it all together

## Freehand

- [WRRC and City Explorer preview](https://ryangallaway792749.invisionapp.com/freehand/Module-2---City-Explorer-TcGCZzyX6?dsid_h=3f238faa944539650123d35e007b810ceb08e3c419e9612ba9c479351bb1f387&uid_h=cbbb57444f578b18334d6da7da4326ffef2a73ddf9d3e7cb64238df31b3b81d0)

## Repl

- [Reduce Array Method](https://replit.com/@rkgallaway/301d82-reduce#index.js)

## Overview

Today we will use the skills we learned over the week to build a new application: city explorer! Your lab will be to take React starter code and turn it into a beautiful portfolio.

## Daily Plan

- Warm-up exercise
- Introduction of today's code challenge topic
- Build City Explorer (React)
- Lab Preview

## Learning Objectives

As a result of completing lecture 5 of Code 301, students will:

- Describe and Define: 
  - Conditional Rendering
  - Ternary Statements
  - Browser Router
- Be able to build a React app that passes props from parent component to child component
- Hold state in the application
- Use forms in React
- Conditionally render data

## Notes

1. What is conditional rendering?

1. What is Browser Router?

1. A ternary statement:
  ```javaScript
  // regular if/else conditional
  if(conditionIsTrue){
    return 'it is true'
  } else {
    return 'it is false'
  }

  // ternary statement
  return conditionIsTrue ? 'it is true' : 'it is false';
  ```

1. Conditionally render a component:
  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        // use a ternary to conditionally render the Child component
        {this.state.displayChild ? 
          <Child>
        : ''
        }
      )
    }
  }
  ```

- A better way to write it would be:
  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        {this.state.displayChild &&
          <Child>
        }
      )
    }
  }
  ```
  