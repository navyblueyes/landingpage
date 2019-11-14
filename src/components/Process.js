import React from 'react';

class Process extends React.Component {
  render() {
  	return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center process-left-icon-1">
                    <i className="pe-7s-angle-right"></i>
                </div>
                <div className="col-lg-6 text-center process-left-icon-2">
                    <i className="pe-7s-angle-right"></i>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-browser text-custom"></i>
                        <h4 className="padding-t-15">Browser</h4>
                        <p className="text-muted">Currently working on the backend that will support the broswer first. API's can be reused for mobile and smart tv app.</p>
                    </div>
                </div>
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-phone text-custom"></i>
                        <h4 className="padding-t-15">Mobile App</h4>
                        <p className="text-muted">Once the website is up, we will focus on a cross platform app for Android/iOS.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center process-box">
                        <i className="pe-7s-monitor text-custom"></i>
                        <h4 className="padding-t-15">Smart TV App</h4>
                        <p className="text-muted">Smart TV App will be last because the majority of smart televisions run proprietary software, each requiring different architecture.</p>
                    </div>
                </div>
            </div>
        </div>
  	);
  }
}
export default Process;