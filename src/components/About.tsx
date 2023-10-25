import React from 'react';
import CustomerFeedback from './Layout/CustomerFeedback';
import OurCustomerBrand from './Layout/OurCustomerBrand';
import OurService from './Layout/OurService';
import SearchMoreAbout from './Layout/SearchMoreAbout';
import StaticticsData from './Layout/StaticticsData';
import TeamMember from './Layout/TeamMember';

const About = () => {
    return (
        <div>

            <div className="slider-area2">
                <div className="slider-height2 hero-overly2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* our mision and vision */}

            <div className="about-details section-padding30">
                <div className="container">
                    <div className="row">
                        <div className="offset-xl-1 col-lg-8">
                            <div className="about-details-cap mb-50">
                                <h4>Our Mission</h4>
                                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                                </p>
                                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                            </div>
                            <div className="about-details-cap mb-50">
                                <h4>Our Vision</h4>
                                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                                </p>
                                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurService />

            <TeamMember />

            <CustomerFeedback />

            <StaticticsData />

            <OurCustomerBrand />

            <SearchMoreAbout />


        </div>
    );
};

export default About;