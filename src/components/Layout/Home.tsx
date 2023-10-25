import React from "react";
import Carousel from "react-multi-carousel";
import OurService from "./OurService";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import StaticticsData from "./StaticticsData";
import TeamMember from "./TeamMember";
import OurBlog from "./OurBlog";
import OurCustomerBrand from "./OurCustomerBrand";
import OurTopService from "./OurTopService";
import CustomerFeedback from "./CustomerFeedback";
import SearchMoreAbout from "./SearchMoreAbout";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {/* slider start here */}
      <div className="slider-area ">
        <div className="slider-active">
          <Carousel
            responsive={responsive}
            showDots={false}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            autoPlaySpeed={3000}
            autoPlay={true}
            itemClass="carousel-item-padding-40-px"
          >
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-8">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay=".1s">
                        Committed to success
                      </span>
                      <h1 data-animation="fadeInLeft" data-delay=".5s">
                        We help to grow your business
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                        indd re voluptate
                        <br /> velit esscillumlore eu quife nrulla parihatur.
                      </p>

                      <div
                        className="hero__btn"
                        data-animation="fadeInLeft"
                        data-delay="1.1s"
                      >
                        <a href="industries.html" className="btn hero-btn">
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-8">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay=".1s">
                        Committed to success
                      </span>
                      <h1 data-animation="fadeInLeft" data-delay=".5s">
                        We help to grow your business
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                        indd re voluptate
                        <br /> velit esscillumlore eu quife nrulla parihatur.
                      </p>

                      <div
                        className="hero__btn"
                        data-animation="fadeInLeft"
                        data-delay="1.1s"
                      >
                        <a href="industries.html" className="btn hero-btn">
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* slider end here */}

      <OurTopService />

      <OurService />

      <FeaturedCaseStudy />

      <CustomerFeedback />

      <StaticticsData />

      <TeamMember />

      <SearchMoreAbout />

      <OurBlog />

      <OurCustomerBrand />
    </div>
  );
};

export default Home;
