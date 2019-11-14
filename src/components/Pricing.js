import React from 'react';

class Pricing extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">News Made For A Mobile Life</h1>
                    <p className="section-subtitle font-secondary text-muted text-center padding-t-30">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <i class="pe-7s-phone text-custom"></i>
                        <h1>Watch on the Go</h1>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Check the latest news videos for the day. Swipe right if you want to queue it for watching later.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box bg-white hover-effect price-active">
                        <i class="pe-7s-browser text-custom" style={{ color: '#031143' }}></i>
                        <h1>Web Browser</h1>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Watch or listen while you work or study. Never get behind the news!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <i class="pe-7s-monitor text-custom"></i>
                        <h1>Smart TV App</h1>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>At the end of the day, catch up on the news that you queued throughout the day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Pricing;