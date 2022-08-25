import React from 'react'
import logo from "../assets/images/logo/logo-white.png";


function Footer() {
    return (
        <footer id="footer" style={{ backgroundColor: '#012b39', color: 'white', borderTop: '2px solid rgba(0,0,0,0.06)' }}>
            <div className="container"
                style={{ borderBottom: '0px solid rgba(0,0,0,0.06)' }}
            >
                <div className="footer-widgets-wrap">
                    <div className="row gutter-50 col-mb-50 mt-3">

                        <div className="col-md-4">
                            <div className="widget">
                                <div className="row col-mb-30">

                                    <div className="col-lg-12">
                                        <div className="footer-big-contacts">
                                            <img src={logo} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget subscribe-widget clearfix">
                                <div className="row col-mb-30">
                                    <div className="col-sm-6 col-md-12 col-lg-6 clearfix">
                                        <p href="#">
                                            <small style={{ display: 'block', marginTop: 3 }}>
                                                <strong>Jeddah | Riyadh | Dammam
                                                </strong><br />
                                                Download e-brochure
                                                <br />
                                                Connect with us :
                                            </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="widget clearfix">
                                {/* <div className="widget-subscribe-form-result" /> */}
                                {/* <div className="line line-sm" /> */}
                                <div className="row col-mb-30">
                                    <div className="col-lg-3 col-6 xwidget_links">
                                        <h5 className='clr-white'>SITEMAP</h5>
                                        <div>Home</div>
                                        <div>About</div>
                                        <div>Services</div>
                                        <div>Gallery</div>
                                    </div>
                                    <div className="col-lg-4 col-6 xwidget_links">
                                        <h5 className='clr-white'>QUICK START</h5>
                                        <div>Get a Quote</div>
                                        <div>Track Shipment</div>
                                        <div>Customer feedback</div>
                                        <div>Contact Us</div>
                                    </div>
                                    <div className="col-lg-5 col-6 xwidget_links">
                                        <h5 className='clr-white'>SERVICES</h5>
                                        <div>Household Goods Relocation</div>
                                        <div>Road Transportations</div>
                                        <div>Vehicle Relocation</div>
                                        <div>Storage Services</div>
                                        <div>Mobility Services</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyrights" className="bg-transparent">
                <div className="container clearfix">
                    <div className="row col-mb-30">
                        <div className="col-md-4 text-center text-md-start">
                            Copyrights © 1996-2020 <br />
                            <div ><a className='clr-white' href="#">CargoTrackLtd All Rights Reserved.</a>
                            </div>
                        </div>
                        <div className="col-md-8 text-center text-md-start">
                            <div className="row col-mb-30">
                                <div className="col-lg-4 col-6 xwidget_links">
                                    <div>Privacy Policy</div>
                                    <div>Disclaimer</div>
                                </div>
                                <div className="col-lg-5 col-6 xwidget_links">
                                    <div>Terms Of Use</div>
                                    <div>Standard Trading Agreement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer