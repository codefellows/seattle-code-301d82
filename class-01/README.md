# React and Component-Based Architecture

## FreeHand

- [Module One Whiteboard](https://ryangallaway792749.invisionapp.com/freehand/301d82--Module-One-UYMzWH3LR?dsid_h=413d1fbb8677b1ed7b3e1e68dc68aeb856379a80589900f96f44377485e199ce&uid_h=cbbb57444f578b18334d6da7da4326ffef2a73ddf9d3e7cb64238df31b3b81d0)

## Repl

- [Arrow Functions, Classes, forrEach](https://replit.com/@rkgallaway/301d82-classes-arrow-functions-forEach)

## Overview

Today we will be covering some new topics and reviewing concepts you should already be familiar with.

We will spend some time reviewing the concepts from the prework. We will also discuss several new topics: `create-react-app` and component-based architeture.

## Daily Plan

- Overview of 301
- Review of prework
- Discussion of `create-react-app`
- Discussion of component-based architeture
- Introduction to code challenges
- Introduction of code challenge topic
- Lab prep

## Learning Objectives

As as result of completing Lecture 1 of Code 301, students will: 

- Describe and Define:
  - Component-based architeture
  - React
  - `create-react-app`
  - JavaScript classes
  - Arrow functions
- Gain an understanding of scope with arrow functions
- Gain an understanding of context, scope, "this", and the "new" keyword
- Gain an understanding of the core concepts of React and how to create a basic React application
- Be able to create a basic React application using `create-react-app`
- Understand component-based architecture and be able to build a simple component-based React application

## Notes

1. What is React?
1. What are components?
1. What is the difference between an arrow function and a function declaration?
1. Turning a function declaration into an arrow function:
   ```javascript
   function doSomething(name) {
     // Do something
   }
 
   doSomething = (name) => {
     // Do something 
   }
 
   // Or make it a one liner!
   doSomething = (name) => // Do something small
   ```
1. Difference between a constructor function and a class:
   ```javascript
   // constructor
   function Cat(name) {
     this.name = name;
     this.fluffy = true;
   }
 
   Cat.prototype.speak = function(){
     console.log(`${this.name} says meow`);
   }
 
   // to make a new instance
   const bob = new Cat('Bob');
   bob.speak();
 
   // class
   class Cat {
     constructor(name) {
       this.name = name;
       this.fluffy = true;
     }
 
     speak = () => console.log(`${this.name} says meow`);
   }
 
   // to make a new instance
   const bob = new Cat('bob');
   bob.speak();
   ```
1. Basic React Component Structure:
   ```javascript
   import React from 'react';
 
   class Something extends React.Component {
     render() {
       return(
          <section>
            <h1>Header for Something</h1>
            <p>Text that is all about Something.<p>
          </section>
       )
     }
   }
 
   export default Something
   ```
