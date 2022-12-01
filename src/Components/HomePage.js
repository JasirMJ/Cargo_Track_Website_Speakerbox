import React from 'react'
import Caurousel from './Caurousel'
import Footer from './Footer'
import Header from './Header'
import RibbonBanner from './RibbonBanner'
import RibbonBannerMembership from './RibbonBannerMembership'
import Services from './Services'
import Topbar from './Topbar'
import TwoColumOne from './TwoColumOne'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'
import QuestionBanner from './QuestionBanner'
import FooterBanner from './FooterBanner'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



function HomePage() {

    const [heading01, setHeading01] = React.useState('More than just a')
    const [heading02, setHeading02] = React.useState('Moving')
    const [desc, setDesc] = React.useState('Moving company that goes beyond simple relocation by ensuring quality services and reliability of our customers.')
    const [button, setButton] = React.useState({
        text: 'Contact Us',
        link: '/country-guide'
    })

    useEffect(() => {
        // alert('Welcome to our website')
        //  refresh the page on load 
        // window.location.reload();
        window.scrollTo(0, 0)
    }, [])


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
                                marginTop: '-380px',
                                color: 'white',
                                zIndex: '10000',
                            }} >
                                <div className='col-sm-6 col-lg-8 home-contact contact-details' style={{ height: 'auto', margin: '0px -14px 6px -24px;', }} >
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
                                <div className='col-sm-6 col-lg-3 '
                                    style={{
                                        minWidth: "350px",
                                        backgroundColor: 'rgb(48,150,190,0.8)',
                                        borderRadius: '20px 20px 20px 20px',
                                        padding: '30px'
                                    }}
                                >
                                    <div className='d-flex justify-content-center align-items-center col-12 '>Get a Free Moving Quote</div>

                                    <div className="input-group mb-2  mt-1">

                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-2">

                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>


                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control " style={{ marginRight: '5px', borderRadius: '5px' }} placeholder="Username" aria-label="Username" />

                                        <input type="text" className="form-control" style={{ marginLeft: '5px', borderRadius: '5px' }} placeholder="Server" aria-label="Server" />
                                    </div>

                                    <div className="input-group mb-2">

                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" style={{ marginRight: '5px', borderRadius: '5px' }} />

                                        {/* <input type="text" className="form-control" placeholder="Server" aria-label="Server" /> */}
                                        <Link to='/get-quote' className='btn btnprimary'
                                            style={{ width: '50%', height: "40px", marginLeft: '5px', borderRadius: '5px' }}
                                        >Get a Quote</Link>
                                        {/* <button className='btn btnprimary' placeholder=''
                                            style={{ width: '50%', height: "40px", marginLeft: '5px', borderRadius: '5px' }}

                                        >Get a Quote</button> */}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <TwoColumOne page="home" />
                <QuestionBanner />
                {/* <RibbonBannerMembership /> */}
                {/* <RibbonBanner /> */}
                <Services type="" name="Our Services" see_all_btn={false} />
                <RibbonBannerMembership />
                <Services type="customer" name="Customer Feedback" see_all_btn={false} />
                <FooterBanner />
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