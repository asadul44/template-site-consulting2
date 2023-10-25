import React from 'react';
import Carousel from "react-multi-carousel";

const OurCustomerBrand = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div>

            <div className="brand-area pb-140">
                <div className="container">
                    <div className="brand-active brand-border pb-40">

                    <Carousel responsive={responsive}
                        showDots={false}
                        infinite={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        autoPlaySpeed={3000}
                        autoPlay={true}
                        itemClass="carousel-item-padding-40-px"
                    >

                        <div className="single-brand">
                            <img src="/assets/img/gallery/brand1.png" alt="" />
                        </div>

                        <div className="single-brand">
                            <img src="/assets/img/gallery/brand2.png" alt="" />
                        </div>

                        <div className="single-brand">
                            <img src="/assets/img/gallery/brand3.png" alt="" />
                        </div>

                        <div className="single-brand">
                            <img src="/assets/img/gallery/brand4.png" alt="" />
                        </div>

                        <div className="single-brand">
                            <img src="/assets/img/gallery/brand2.png" alt="" />
                        </div>

                        <div className="single-brand">
                            <img src="/assets/img/gallery/brand5.png" alt="" />
                        </div>

                        </Carousel>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurCustomerBrand;