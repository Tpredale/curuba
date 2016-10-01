import  React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';


class NavBar extends Component {

    renderLinks(){
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }
    render(){
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

            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <Link to="/" className="navbar-brand"> Buen Provecho </Link>
                <ul className="nav navbar-nav">
                        {this.renderLinks()}
                </ul>
            </div>

        </div>

    </nav>
      );
    }
  }

function mapStateToProps(state){
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(NavBar);