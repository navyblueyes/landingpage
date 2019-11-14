import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Descriptions from './components/Descriptions';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Started from './components/Started';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import Aux from './hoc/Aux_';
import { Link } from 'react-router-dom';

class HomeOne extends React.Component {
  render() {
  
  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">MinkTalk...</h1>
                                        <p className="padding-t-15 home-desc">You don't need news anchors with million dollar salaries telling you what the world is. How about the world just tells you what is going on? With MinkTalk, we encourage people to report their thoughts and ideas of what is going on in their neighborhood.</p>
                                        <p className="play-shadow margin-t-30 margin-l-r-auto"> <Link to="https://www.youtube.com/watch?v=KCkXoYxEv3g"  className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-pattern-effect">
                        <img src="images/bg-pattern.png" alt="" />
                    </div>
                </section>

                {/* Pricing Component*/}
                <Pricing />

                {/* Services Component*/}
                <Services />

                {/* Descriptions Component*/}
                <Descriptions />

                {/* Process Component*/}
                <Process />

                {/* Started Component*/}
                <Started />

                {/* Contact Component*/}
                <Contact />

                {/* SocialMedia Component*/}
                <SocialMedia />
                
                {/* Footer Component*/}
                <Footer />

                {/* FooterLinks Component*/}
                <FooterLinks />

                {/* Switcher Component*/}
               <Switcher /> 
        </Aux>
  	);
  }
}

export default HomeOne;