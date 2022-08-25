import React from 'react'
import logo from "../assets/images/samplelogo.png";

function Footer() {
    return (
        <div className='footer'>


            <div className='h-50'></div>


            <div className='footer-top'>
                <div className='flex-row-1'></div>

                <div className='footer-left'>
                    <div className='ft-l  mt_50'>
                        <img src={logo} alt="logo" className='ft-logo' />
                        <span> Jeddah | Riyadh | Dhamam </span>
                        <span>Download-e-brochure</span>
                        <span>connect with us :

                        </span>
                    </div>
                </div>

                <div className='footer-right'>
                    <div className='ft-r'>
                        <div className='ftr mt_50'>
                            <h4>SITEMAP</h4>
                            <span>Home</span>
                            <span>About</span>
                            <span>Services</span>
                            <span>Gallery</span>
                        </div>
                        <div className='ftr  mt_50'>
                            <h4>QUICK START</h4>
                            <span>Get a Quote</span>
                            <span>Track Shipment</span>
                            <span>Customer feedback</span>
                            <span>Contact Us</span>
                            <span>Request a call</span>
                        </div>
                        <div className='ftr  mt_50'>
                            <h4>SERVICES</h4>
                            <span>Household Goods Relocation</span>
                            <span>About</span>
                            <span>Services</span>
                            <span>Gallery</span>
                        </div>
                    </div>
                </div>
                <div className='flex-row-1'></div>


            </div>
            <div className='footer-bottom mb_50'>
                <div className='flex-row-1'></div>

                <div className='footer-left'>
                    <div className='ft-l'>
                        
                        <span> Copyright @1996-2022 </span>
                        <span>Cargo Track Ltd All rights reserved</span>
                        
                    </div>
                </div>

                <div className='footer-right'>
                    <div className='ft-r'>
                        <div className='ftr'>
                            <span>Privacy Policy</span>
                            <span>Disclaimer</span>
                        </div>
                        <div className='ftr'>
                            <span>Terms Of Use</span>
                            <span>Standard Trading Agreement</span>
                        </div>
                        <div className='ftr'>
                       
                        </div>
                    </div>
                </div>
                <div className='flex-row-1'></div>

            </div>
        </div>
    )
}

export default Footer