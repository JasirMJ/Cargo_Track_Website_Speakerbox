import React from 'react'
import Caurousel from './Caurousel'
import Footer from './Footer'
import Header from './Header'
import RibbonBanner from './RibbonBanner'
import RibbonBannerMembership from './RibbonBannerMembership'
import Services from './Services'
import Topbar from './Topbar'
import TwoColumOne from './TwoColumOne'
import goodluck_img from '../assets/images/misc/footer card.png'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'


function HomePage() {
    return (
        <div>
            {/* begin */}


            <div>
                <Topbar />
                <Header />
                <Caurousel />

                <section id="content">
                    <div className="content-wrap" style={{ overflow: 'visible' }}>
                        <div className="container clearfix">
                            <div className="row col-mb-50 mb-0 xbg-primary" style={{
                                marginTop: '-364px',
                                color: 'white',
                                zIndex: '10000',
                            }} >
                                <div className='col-sm-6 col-lg-8 home-contact contact-details' style={{
                                    height: 'auto',
                                    margin: '0px -14px 6px -24px;',
                                }} >
                                    <div
                                        style={{
                                            display: 'flex',
                                            backgroundColor: 'red',
                                            margin: '-12px',
                                            height: "80px",
                                            width: '400px',
                                        }}
                                    >
                                        <div className='bgsecondary d-flex align-items-center flex-grow-1'>
                                            <div>
                                                <i className="fa fa-envelope p-2" aria-hidden="true"></i>
                                            </div>
                                            <div className='p-2'>
                                                <span>Mail us</span><br />
                                                <span>info@cargotrack.co</span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center flex-grow-1'
                                            style={{
                                                backgroundColor: 'rgb(2,112,155)',
                                            }}
                                        >
                                            <div>
                                                <i className="fa fa-phone p-2" aria-hidden="true"></i>
                                            </div>
                                            <div className='p-2'>
                                                <span>Call us</span><br />
                                                <span>+966569177864</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-lg-4 '
                                    style={{
                                        backgroundColor: 'rgb(48,150,190,0.8)',
                                        borderRadius: '20px 20px 20px 20px',
                                        padding: '30px'
                                    }}
                                >
                                    <div className='d-flex justify-content-center align-items-center col-12 '>Get a Free Moving Quote</div>

                                    <div className="input-group mb-3  mt-2">

                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">

                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>


                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control " style={{ marginRight: '5px', borderRadius: '5px' }} placeholder="Username" aria-label="Username" />

                                        <input type="text" className="form-control" style={{ marginLeft: '5px', borderRadius: '5px' }} placeholder="Server" aria-label="Server" />
                                    </div>

                                    <div className="input-group mb-3">

                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" style={{ marginRight: '5px', borderRadius: '5px' }} />

                                        {/* <input type="text" className="form-control" placeholder="Server" aria-label="Server" /> */}
                                        <button className='btn btnprimary' placeholder=''
                                            style={{ width: '50%', height: "40px", marginLeft: '5px', borderRadius: '5px' }}
                                        >Get a Quote</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TwoColumOne />

                <RibbonBannerMembership />


                <RibbonBanner />




                <Services type="" name="Our Services" see_all_btn={false} />


                <RibbonBannerMembership />

                <Services type="customer" name="Customer Feedback" see_all_btn={false} />

                <section id="content">
                    <div className="content-wrap" style={{
                        overflow: 'visible',
                        zIndex: '1',
                        padding: '0px',
                        marginBottom: '-50px',


                    }}>
                        <div className="container clearfix d-flex justify-content-center mt-5">
                            <div className="row xcol-mb-50 mb-0 footer-banner"  >
                                <div
                                    className='footer-banner-text'

                                >
                                    <div className='heading-small'>Do you have a requirement ?</div>
                                    <div className='footer-banner-desc'>We provide better freight & service in the kingodom of Saudi Arabia with our expertise</div>
                                    <button className='btn btnprimary' placeholder=''
                                        style={{ width: 'auto', height: "35px", borderRadius: '5px', marginTop: '10px' }}
                                    >Get a Quote</button>
                                </div>


                                <img src={goodluck_img} alt="goodluck" className='footer-banner-img' />

                            </div>
                        </div>
                    </div>
                </section>
                <Footer />

                <div className="position-fixed  bottom-0 end-0 whatsapp-icon" >
                    <img src={whatsapp_icon} alt="whatsapp" />
                </div>

            </div >



            {/* end */}
        </div >
    )
}

export default HomePage