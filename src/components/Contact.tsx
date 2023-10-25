import React from 'react';

const Contact = () => {
    return (
        <div>

            <div className="slider-area2">
                <div className="slider-height2 hero-overly2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center">
                                    <h2>Contact US</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{margin:"15px 30px"}}>
                <div className="col-12 mx">
                    <h2 className="contact-title">Get in Touch</h2>
                </div>
                <div className="col-lg-8">
                    <form className="form-contact contact_form" action="https://preview.colorlib.com/theme/consultingbiz/contact_process.php" method="post" id="contactForm" >
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9}  placeholder=" Enter Message" ></textarea>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control valid" name="name" id="name" type="text"   placeholder="Enter your name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control valid" name="email" id="email" type="email"   placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input className="form-control" name="subject" id="subject" type="text"  placeholder="Enter Subject" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 offset-lg-1">
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-home"></i></span>
                        <div className="media-body">
                            <h3>Malibagh , Dhaka</h3>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                        <div className="media-body">
                            <h3>+ 880 1711 385722</h3>
                            <p>Sat to Thu 9am to 6pm</p>
                        </div>
                    </div>
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-email"></i></span>
                        <div className="media-body">
                            <h3><a href="support@bitsofts.io" className="__cf_email__" data-cfemail="becdcbceced1cccafeddd1d2d1ccd2d7dc90ddd1d3">support@bitsofts.io</a></h3>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;