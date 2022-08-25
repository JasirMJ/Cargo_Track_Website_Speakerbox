import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Services from './Services'
import Topbar from './Topbar'


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

                <section id="page-title" className="page-title-dark page-title-center p-0">
                    <div className="fslider" data-arrows="false" data-pagi="false" data-animation="fade" data-hover="false">
                        <div className="flexslider">
                            <div className="slider-wrap">
                                <div className="slide"><img src="https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-329.jpg?w=2000" alt="Page Title Image" /></div>
                                <div className="slide"><img src="https://img.freepik.com/free-psd/digital-marketing-facebook-web-banner-template_237398-216.jpg?w=2000" alt="Page Title Image" /></div>
                                <div className="slide"><img src="https://img.freepik.com/free-psd/healthy-life-concept-banner-design_23-2148583499.jpg?w=2000" alt="Page Title Image" /></div>
                                <div className="slide"><img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/01/Furniture-Business-Web-Banner-Template-Free-PSD-870x489.jpg" alt="Page Title Image" /></div>
                            </div>
                            <div className="vertical-middle vertical-middle-overlay">
                                <div className="container clearfix">
                                    <h1>About Us</h1>
                                    <span>A Short Page Title Tagline</span>
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">About-us</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <div className="row col-mb-50 mb-0">
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature-box fbox-plain">
                                        <div className="fbox-icon" data-animate="bounceIn">
                                            <a href="#"><i className="icon-medical-i-cardiology" /></a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3>Intensive Care</h3>
                                            <p>Powerful Layout with Responsive functionality that can be adapted to any screen
                                                size. Resize browser to view.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature-box fbox-plain">
                                        <div className="fbox-icon" data-animate="bounceIn" data-delay={200}>
                                            <a href="#"><i className="icon-medical-i-social-services" /></a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3>Family Planning</h3>
                                            <p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts
                                                &amp; all others graphics are optimized.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature-box fbox-plain">
                                        <div className="fbox-icon" data-animate="bounceIn" data-delay={400}>
                                            <a href="#"><i className="icon-medical-i-neurology" /></a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3>Expert Consultation</h3>
                                            <p>Canvas includes tons of optimized code that are completely customizable and
                                                deliver unmatched fast performance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature-box fbox-plain">
                                        <div className="fbox-icon" data-animate="bounceIn">
                                            <a href="#"><i className="icon-medical-i-dental" /></a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3>Dental Sciences</h3>
                                            <p>Powerful Layout with Responsive functionality that can be adapted to any screen
                                                size. Resize browser to view.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature-box fbox-plain">
                                        <div className="fbox-icon" data-animate="bounceIn" data-delay={200}>
                                            <a href="#"><i className="icon-medical-i-imaging-root-category" /></a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3>X-Ray Services</h3>
                                            <p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts
                                                &amp; all others graphics are optimized.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature-box fbox-plain">
                                        <div className="fbox-icon" data-animate="bounceIn" data-delay={400}>
                                            <a href="#"><i className="icon-medical-i-ambulance" /></a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3>24x7 Emergency</h3>
                                            <p>Canvas includes tons of optimized code that are completely customizable and
                                                deliver unmatched fast performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="section row p-0 align-items-stretch dark topmargin-sm">
                            <div className="col-lg-6" style={{ background: 'url("demos/medical/images/section-bg.jpg") center center no-repeat', backgroundSize: 'cover', minHeight: 250 }}>
                                <div>&nbsp;</div>
                            </div>
                            <div id="booking-appointment-form" className="col-lg-6 p-0">
                                <div className="bg-color form-widget col-padding" data-loader="button">
                                    <h2>Book an Appointment.</h2>
                                    <div className="form-result" />
                                    <form className="row mb-0" id="template-medical-form" name="template-medical-form" action="https://themes.semicolonweb.com/html/canvas/include/form.php" method="post">
                                        <div className="form-process">
                                            <div className="css3-spinner">
                                                <div className="css3-spinner-scaler" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 form-group">
                                            <label htmlFor="template-medical-name">Name:</label>
                                            <input type="text" id="template-medical-name" name="template-medical-name" className="form-control not-dark required" defaultValue />
                                        </div>
                                        <div className="col-md-4 form-group">
                                            <label htmlFor="template-medical-phone">Phone:</label>
                                            <input type="text" id="template-medical-phone" name="template-medical-phone" className="form-control not-dark required" defaultValue />
                                        </div>
                                        <div className="w-100" />
                                        <div className="col-md-8 form-group">
                                            <label htmlFor="template-medical-email">Email Address:</label>
                                            <input type="email" id="template-medical-email" name="template-medical-email" className="form-control not-dark required" defaultValue />
                                        </div>
                                        <div className="col-md-4 form-group">
                                            <label htmlFor="template-medical-dob">Date of Birth:</label>
                                            <input type="text" id="template-medical-dob" name="template-medical-dob" className="form-control not-dark required" defaultValue placeholder="DD/MM/YYYY" />
                                        </div>
                                        <div className="w-100" />
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col-12 form-group">
                                                    <label htmlFor="template-medical-appoint-date">Appointment Date:</label>
                                                    <input type="text" id="template-medical-appoint-date" name="template-medical-appoint-date" className="form-control not-dark required" defaultValue placeholder="DD/MM/YYYY" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="template-medical-second-booking">Booked with us
                                                        Before?</label><br />
                                                    <label className="rightmargin-sm">
                                                        <input type="radio" id="template-medical-second-booking" name="template-medical-second-booking" defaultValue="yes" />
                                                        Yes
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="template-medical-second-booking" defaultValue="no" defaultChecked />
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 form-group">
                                            <label htmlFor="template-medical-message">Message:</label>
                                            <textarea id="template-medical-message" name="template-medical-message" className="form-control not-dark required" cols={30} rows={5} defaultValue={""} />
                                        </div>
                                        <div className="w-100" />
                                        <div className="col-12 form-group d-none">
                                            <input type="text" name="template-medical-botcheck" defaultValue />
                                        </div>
                                        <div className="col-12 form-group text-end">
                                            <button className="button button-white button-light button-rounded m-0" type="submit" value="submit">Confirm Booking</button>
                                        </div>
                                        <input type="hidden" name="prefix" defaultValue="template-medical-" />
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div className="container clearfix">
                            <div className="row col-mb-50 mb-0">
                                <div className="col-md-7">
                                    <div className="accordion accordion-lg clearfix">
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Kidney Transplant
                                            </div>
                                        </div>
                                        <div className="accordion-content clearfix">Donec sed odio dui. Nulla vitae elit libero, a
                                            pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
                                            posuere erat a ante venenatis dapibus posuere velit aliquet.</div>
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Pulmonary Treament
                                            </div>
                                        </div>
                                        <div className="accordion-content clearfix">Integer posuere erat a ante venenatis dapibus
                                            posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum
                                            nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</div>
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Eye Care &amp; Lasik Surgery
                                            </div>
                                        </div>
                                        <div className="accordion-content clearfix">Nullam id dolor id nibh ultricies vehicula ut id
                                            elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
                                            mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.</div>
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Ear, Nose &amp; Throat
                                            </div>
                                        </div>
                                        <div className="accordion-content clearfix">Nullam id dolor id nibh ultricies vehicula ut id
                                            elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
                                            mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.</div>
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Cardiology Department
                                            </div>
                                        </div>
                                        <div className="accordion-content clearfix">Nullam id dolor id nibh ultricies vehicula ut id
                                            elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
                                            mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.</div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <h4>Patient Testimonials<span>.</span></h4>
                                    <ul className="testimonials-grid grid-1">
                                        <li className="grid-item pt-0">
                                            <div className="testimonial">
                                                <div className="testi-image">
                                                    <a href="#"><img src="https://www.blexar.com/avatar.png" alt="Customer Testimonails" /></a>
                                                </div>
                                                <div className="testi-content">
                                                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam
                                                        quibusdam cum libero illo rerum repellendus!</p>
                                                    <div className="testi-meta">
                                                        John Doe
                                                        <span>XYZ Inc.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="grid-item pb-0">
                                            <div className="testimonial">
                                                <div className="testi-image">
                                                    <a href="#"><img src="https://www.blexar.com/avatar.png" alt="Customer Testimonails" /></a>
                                                </div>
                                                <div className="testi-content">
                                                    <p>Natus voluptatum enim quod necessitatibus quis expedita harum provident
                                                        eos obcaecati id culpa corporis molestias.</p>
                                                    <div className="testi-meta">
                                                        Collis Ta'eed
                                                        <span>Envato Inc.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="w-100 text-end">
                                        <a href="#" className="button button-mini button-rounded me-0">More Patient Feedbacks...</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section mt-0">
                            <div className="container clearfix">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                                            <div className="fbox-icon">
                                                800
                                            </div>
                                            <div className="fbox-content">
                                                <h5 className="m-0 color">Clients Served</h5>
                                                <div className="d-block d-md-block d-lg-none bottommargin" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                                            <div className="fbox-icon">
                                                <a href="#"><i className="icon-tint i-alt" /></a>
                                            </div>
                                            <div className="fbox-content">
                                                <div className="counter counter-small"><span data-from={100} data-to={56841} data-refresh-interval={250} data-speed={2000} />+</div>
                                                <h5 className="m-0 color">X-Rays Done</h5>
                                                <div className="d-block d-md-block d-lg-none bottommargin" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                                            <div className="fbox-icon">
                                                <a href="#"><i className="icon-tint i-alt" /></a>
                                            </div>
                                            <div className="fbox-content">
                                                <div className="counter counter-small"><span data-from={100} data-to={332} data-refresh-interval={50} data-speed={3000} />+</div>
                                                <h5 className="m-0 color">Worldwide Staff</h5>
                                                <div className="d-block d-md-none bottommargin" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                                            <div className="fbox-icon">
                                                <a href="#"><i className="icon-text-width i-alt" /></a>
                                            </div>
                                            <div className="fbox-content">
                                                <div className="counter counter-small"><span data-from={100} data-to={2213} data-refresh-interval={110} data-speed={3500} />+</div>
                                                <h5 className="m-0 color">Lives Saved</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


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
                    </div>
                </section>

                <Services />


                <Footer />
            </div>


            {/* end */}
        </div>
    )
}

export default HomePage