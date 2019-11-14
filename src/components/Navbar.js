import React from 'react';


class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand logo text-uppercase" href="/home-one">
                    MinkTalk
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#pricing" className="nav-link">Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">News Guarantee</a>
                        </li>
                        <li className="nav-item">
                            <a href="#process" className="nav-link">Our Plan</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;