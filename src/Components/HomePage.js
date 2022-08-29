import React from 'react'
import Caurousel from './Caurousel'
import Footer from './Footer'
import Header from './Header'
import RibbonBanner from './RibbonBanner'
import RibbonBannerMembership from './RibbonBannerMembership'
import Services from './Services'
import Topbar from './Topbar'
import TwoColumOne from './TwoColumOne'


function HomePage() {
    return (
        <div>
            {/* begin */}


            <div>
                <Topbar />
                <Header />


                {/* 
                <section id="slider" className="slider-element swiper_wrapper min-vh-50 min-vh-md-100" data-animation="fade" data-loop="true" data-autoplay={5000}>
                    <div className="slider-inner">
                        <div className="swiper-container swiper-parent">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="container">
                                        <div className="slider-caption slider-caption-right" style={{ maxWidth: 700 }}>
                                            <div>
                                                <h2 data-animate="flipInX">Team of Experts<span>.</span></h2>
                                                <p className="d-none d-sm-block" data-animate="flipInX" data-delay={500}>Our Team of
                                                    Doctors are specialized in Various Disciplines to make sure you get the Best
                                                    Treatment.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide-bg" style={{ backgroundImage: 'url("demos/medical/images/slider/1.jpg")' }} />
                                </div>
                                <div className="swiper-slide">
                                    <div className="container">
                                        <div className="slider-caption">
                                            <div>
                                                <h2 data-animate="zoomIn">Heart<span>Beat</span>.</h2>
                                                <p className="d-none d-sm-block" data-animate="zoomIn" data-delay={500}>Care for
                                                    your Loved Ones from the Experts in the Medical &amp; Hospitality Industry.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide-bg" style={{ backgroundImage: 'url("demos/medical/images/slider/2.jpg")' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                */}

                <Caurousel />

                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <div className="row col-mb-50 mb-0 xbg-primary" >
                                <div className='col-sm-6 col-lg-8 home-contact' style={{
                                    // backgroundColor: 'red',
                                }} >
                                    <div>
                                        <div>icon</div>
                                        <div>
                                            <span>Mail us</span>
                                            <span>info@cargotrack.co</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>icon</div>
                                        <div>
                                            <span>Call us</span>
                                            <span>+966569177864</span>
                                        </div>
                                    </div>



                                </div>
                                <div className='col-sm-6 col-lg-4 '
                                    style={{
                                        backgroundColor: 'green'
                                    }}
                                >
                                    <div>
                                        <div>Get a Free Moving Quote</div>
                                        <div>Get a Free Moving Quote</div>
                                        <div>Get a Free Moving Quote</div>
                                        <div>Get a Free Moving Quote</div>
                                        <div>Get a Free Moving Quote</div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="content">
                    <div className="content-wrap"> */}
                <TwoColumOne />


                <RibbonBanner />




                <Services type="" />


                <RibbonBannerMembership />


                {/* 
                        <div className="container clearfix">
                            <div className="heading-block center border-bottom-0">
                                <h3>Meet our Team of Specialists<span>.</span></h3>
                                <span>We make sure that your Life are in Good Hands.</span>
                            </div>
                            <div id="oc-team" className="owl-carousel team-carousel carousel-widget" data-margin={30} data-nav="true" data-pagi="true" data-items-xs={1} data-items-sm={2} data-items-lg={3} data-items-xl={4}>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. John Doe</h4><span>Cardiologist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. Bryan Mcguire</h4><span>Orthopedist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. Mary Jane</h4><span>Neurologist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. Silvia Bush</h4><span>Dentist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. Hugh Baldwin</h4><span>Cardiologist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. Erika Todd</h4><span>Neurologist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. Randy Adams</h4><span>Dentist</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team">
                                    <div className="team-image">
                                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Dr. John Doe" />
                                    </div>
                                    <div className="team-desc">
                                        <div className="team-title">
                                            <h4>Dr. Alan Freeman</h4><span>Eye Specialist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         */}


                {/* </div>
                </section> */}

                <Services type="customer" />


                <Footer />
            </div>


            {/* end */}
        </div>
    )
}

export default HomePage