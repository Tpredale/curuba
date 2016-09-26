import  React, { Component, Proptypes } from 'react';
import { Link } from 'react-router';


class NavBar extends Component {
    constructor(props) {
    super(props)
  }

  render() {
    const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props
    return (
<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Buen Provecho</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                { !isAuthenticated ? (
                    <ul className="list-inline">
                    <li><button className="btn btn-primary" onClick={onLoginClick}>Login</button></li>
                     </ul>
                      ) : (
                      <ul className="list-inline">
                      <li><img src={profile.picture} height="40px" /></li>
                      <li><span>Welcome, {profile.nickname}</span></li>
                      <li><button className="btn btn-primary" onClick={onLogoutClick}>Logout</button></li>
                       </ul>
                    )}
                </ul>
            </div>

        </div>

    </nav>
      )
    }
  }

  export default NavBar;