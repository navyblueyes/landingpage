import React from 'react';

class Services extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">How we guarentee quality news reports.</h1>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-6 margin-t-20">
                        <div className="services-box text-center hover-effect">
                        <img src={require("../references.png")} height="35vh" alt="about" />
                            <h4 className="padding-t-15">All videos will have references</h4>
                            <p className="padding-t-15 text-muted">Why watch the news, never knowing how they got the information. With MinkTalk, every video uploaded will have the references, letting you know the evidence of the report.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 margin-t-20">
                        <div className="services-box text-center hover-effect">
                        <img src={require("../ranksystem.png")} height="35vh" alt="about" />
                            <h4 className="padding-t-15">Rank System ensures you see the best first.</h4>
                            <p className="padding-t-15 text-muted">Rank system consist of track history of using references, debate performance and popularity. With a system of meritocracy, we can guarentee you see the most reliable anchors first.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-6 margin-t-20">
                        <div className="services-box text-center hover-effect">
                        <img src={require("../rival-system.png")} height="35vh" alt="about" />
                            <h4 className="padding-t-15">Rivalty ensures the best stay sharp.</h4>
                            <p className="padding-t-15 text-muted">Content creators are encouraged to watch other creators' videos and report false or misleading information. In return for their diligence, creators can increase their rank.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 margin-t-20">
                        <div className="services-box text-center hover-effect">
                        <img src={require("../debate.png")} height="35vh" alt="about" />
                            <h4 className="padding-t-15">Debates ensure everyone gets both sides of the story.</h4>
                            <p className="padding-t-15 text-muted">If a content creator feels wrongly accused, he or she can challenge the accuser in a debate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Services;