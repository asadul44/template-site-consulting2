import React from 'react';
import OurCustomerBrand from './Layout/OurCustomerBrand';
import OurTopService from './Layout/OurTopService';
import SearchMoreAbout from './Layout/SearchMoreAbout';

const Service = () => {
    return (
        <div>

            <div className="slider-area2">
                <div className="slider-height2 hero-overly2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 text-center">
                                    <h2>Our Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurTopService />

            <OurCustomerBrand />

            <SearchMoreAbout />

        </div>
    );
};

export default Service;