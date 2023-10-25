import React, { useState } from 'react';

const MyHeader = () => {

    const [selected, setSeleted] = useState(false);
    return (
        <div>

            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="/assets/img/logo/xloder.jpg.pagespeed.ic.1a99EduJ6Z.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <header>

                <div className="header-area">
                    <div className="main-header ">
                        <div className="header-top d-none d-lg-block">
                            <div className="container">
                                <div className="col-xl-12">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="header-info-left">
                                            <ul>
                                                <li><i className="far fa-clock"></i>SAT - Thu : 6.00 am - 10.00 pm</li>
                                                <li>Sun: Closed</li>
                                            </ul>
                                        </div>
                                        <div className="header-info-right">
                                            <ul className="header-social">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li> <a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="header-bottom  header-sticky">
                            <nav>
                                <input type="checkbox" id="check" />
                                <label htmlFor="check" className="checkbtn"><a onClick={() => setSeleted(!selected)}> {!selected ? <p style={{ marginTop: "25px", color: "white", fontSize: "20px" }}> &#9776; </p> : <img src="./assets/img/whiteCross.png" style={{}} width="18px" height="18px" />}  </a>   </label>
                                <div className="logo">
                                    <p >Consulting </p>
                                </div>
                                <ul id="navigation">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/service">Services</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="#">Career</a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>

            </header>

        </div>
    );
};

export default MyHeader;