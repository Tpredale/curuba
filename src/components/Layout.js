import  React from 'react';
import { Link } from 'react-router';


const Layout = () => {
    return (
<div>
<header className="business-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="tagline">Buen Provecho</h1>
                </div>
            </div>
        </div>
    </header>
    <div className="container">

        <hr />

        <div className="row">
            <div className="col-sm-8">
                <h2>Recipes and Chef's on Demand</h2>
                <p>Heloo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
                <p>
                    <Link className="btn btn-default btn-lg" to="/signup">Sign Up Today!</Link>
                </p>
            </div>
            <div className="col-sm-4">
                <h2>Contact Us</h2>
                <address>
                    <strong>Buen Provecho</strong>
                    <br />123, Main St.
                    <br />New York, NY 10001
                    <br />
                </address>
                <address>
                    <abbr title="Phone">P:</abbr>(123) 456-7890
                    <br />
                    <abbr title="Email">E:</abbr> <a href="mailto:#">Food@buenprovecho.com</a>
                </address>
            </div>
        </div>

        <hr />

        <div className="row">
            <div className="col-sm-4">
                <img className="img-circle img-responsive img-center" src="images/chef.jpg" alt="" />
                <h2>Food Photo #1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
            </div>
            <div className="col-sm-4">
                <img className="img-circle img-responsive img-center" src="images/pasta.jpg" alt="" />
                <h2>Cooking Photo #2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
            </div>
            <div className="col-sm-4">
                <img className="img-circle img-responsive img-center" src="images/spices.jpg" alt="" />
                <h2>Food Photo #3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
            </div>
        </div>

        <hr />
    </div>
    </div>
    );
};

 export default Layout;