import React from 'react';

const OurBlog = () => {
    return (
        <div>

            <div className="home-blog-area section-padding30">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle mb-100">
                                <span>Recent News of us</span>
                                <h2>Our Recent Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="home-blog-single mb-30">
                                <div className="blog-img-cap">
                                    <div className="blog-img">
                                        <img src="/assets/img/gallery/home_blog1.png" alt="" />
                                        <ul>
                                            <li>By Admin - October 27, 2020</li>
                                        </ul>
                                    </div>
                                    <div className="blog-cap">
                                        <h3><a href="blog_details.html">16 Easy Ideas to Use in Everyday</a></h3>
                                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.</p>
                                        <a href="blog_details.html" className="more-btn">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="home-blog-single mb-30">
                                <div className="blog-img-cap">
                                    <div className="blog-img">
                                        <img src="/assets/img/gallery/home_blog2.png" alt="" />
                                        <ul>
                                            <li>By Admin - October 27, 2020</li>
                                        </ul>
                                    </div>
                                    <div className="blog-cap">
                                        <h3><a href="blog_details.html">16 Easy Ideas to Use in Everyday</a></h3>
                                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.</p>
                                        <a href="blog_details.html" className="more-btn">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurBlog;