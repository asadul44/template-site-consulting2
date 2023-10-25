import React from 'react';
import Carousel from "react-multi-carousel";

const CustomerFeedback = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>

            <div className="testimonial-area testimonial-padding" style={{ backgroundImage: `url(/assets/img/gallery/section_bg04.jpg)` }} >
                <div className="container ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-10 col-lg-10 col-md-9">
                            <div className="h1-testimonial-active">

                                <Carousel responsive={responsive}
                                    showDots={false}
                                    infinite={true}
                                    removeArrowOnDeviceType={["mobile"]}
                                    autoPlaySpeed={3000}
                                    autoPlay={true}
                                    itemClass="carousel-item-padding-40-px"
                                >



                                    <div className="single-testimonial text-center">

                                        <div className="testimonial-caption ">
                                            <div className="testimonial-top-cap">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="67px" height="49px">
                                                    <path fill-rule="evenodd" fill="rgb(240, 78, 60)" d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z" />
                                                </svg>
                                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                                <div className="founder-img">
                                                    <img src="/assets/img/gallery/Homepage_testi.png" alt="" />
                                                </div>
                                                <div className="founder-text">
                                                    <span>Jessya Inn</span>
                                                    <p>Chif Photographer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-testimonial text-center">

                                        <div className="testimonial-caption ">
                                            <div className="testimonial-top-cap">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="67px" height="49px">
                                                    <path fill-rule="evenodd" fill="rgb(240, 78, 60)" d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z" />
                                                </svg>
                                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                                <div className="founder-img">
                                                    <img src="/assets/img/gallery/Homepage_testi.png" alt="" />
                                                </div>
                                                <div className="founder-text">
                                                    <span>Jessya Inn</span>
                                                    <p>Chif Photographer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CustomerFeedback;