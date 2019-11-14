import React from 'react';

class Contact extends React.Component {
  render() {
  	return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="custom-form mt-4 pt-4">
                        <div id="message"></div>
                        <form method="post" action="home-one" name="contact-form" id="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="name" id="username" type="text" className="form-control" placeholder="Your username*" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email*" />
                                    </div>
                                </div>                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Submit" />
                                    <div id="simple-msg"></div>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
  	);
  }
}
export default Contact;