import React, { Component } from 'react';
import NavBar from './Navbar';
import Layout from './Layout';
import Footer from './Footer';


export default class App extends Component {
     render(){
     return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
};