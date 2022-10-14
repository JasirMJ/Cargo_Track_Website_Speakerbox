import React from 'react'
import goodluck_img from '../assets/images/misc/ct 3.png'

function FooterBanner() {
    return (
        <section id="content">
            <div className="content-wrap" style={{
                overflow: 'visible',
                zIndex: '1',
                padding: '0px',
                marginBottom: '-50px',
            }}>
                <div className="container clearfix d-flex justify-content-center mt-5">
                    <div className="row xcol-mb-50 mb-0 footer-banner"  >
                        <div className='footer-banner-text'>
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
    )
}

export default FooterBanner