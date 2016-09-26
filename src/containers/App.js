import React, { Component, Proptypes } from 'react';
import { connect } from 'react-redux'
import { login, logout } from '../actions'
import NavBar from '../components/Navbar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';


class App extends Component {
   constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLoginClick() {
    this.props.login()
  }

  handleLogoutClick() {
    this.props.logout()
  }
     render(){
      const { isAuthenticated, profile } = this.props
     return (
      <div className="app">
        <NavBar
        isAuthenticated={isAuthenticated}
        profile={profile}
        onLoginClick={this.handleLoginClick}
        onLogoutClick={this.handleLogoutClick}
        />
        <Layout />
        <Footer />
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, profile } = auth
  return {
    isAuthenticated,
    profile
  }
}

export default connect(mapStateToProps, {
  login,
  logout
})(App)