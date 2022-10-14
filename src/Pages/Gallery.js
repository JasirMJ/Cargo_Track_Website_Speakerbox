import React from 'react'
import Header from '../Components/Header'
import QuestionBanner from '../Components/QuestionBanner'
import RibbonBannerMembership from '../Components/RibbonBannerMembership'
import RibbonBanner from '../Components/RibbonBanner'
import Topbar from '../Components/Topbar'
import TwoColumOne from '../Components/TwoColumOne'
import goodluck_img from '../assets/images/misc/footer card.png'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'
import Footer from '../Components/Footer'
import FooterBanner from '../Components/FooterBanner'
import ServiceList from '../Components/Services'

function Gallery() {
    return (
        <div>
            {/* begin */}
            <div>
                <Topbar />
                <Header />

                <div style={{ height: "50px" }} />

                <GalleryWeb />

                <GalleryMobile />

                <div style={{ height: "50px" }} />

                <FooterBanner />
                <Footer />
                <div className="position-fixed  bottom-0 end-0 whatsapp-icon" >
                    <img className='rounded' src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div >
            {/* end */}
        </div >
    )
}

export default Gallery


const GalleryWeb = () => {
    return (
        <div class="container gallery-webview">
            <div class="row" style={{ height: 'auto' }}>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2 ">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/600" alt="" />
                    </div>
                </div>
                <div class="col-sm d-flex justify-content-between align-items-center flex-column m-2">
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                </div>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/600" alt="" />
                    </div>
                </div>
            </div>
            <div class="row" style={{ height: 'auto' }}>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2 ">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/600" alt="" />
                    </div>
                </div>
                <div class="col-sm d-flex justify-content-between align-items-center flex-column m-2">
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                </div>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/600" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}

const GalleryMobile = () => {
    return (
        <div class="container gallery-mobileview" style={{ height: 'auto' }}>
            <div class="row ">
                <div class="col-6  d-flex justify-content-center align-items-center ">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/800" alt="" />
                    </div>
                </div>
                <div class="col-6 d-flex justify-content-between align-items-center flex-column">
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                </div>
            </div>
            <div style={{ height: '20px' }} />
            <div class="row ">
                <div class="col-6 d-flex justify-content-between align-items-center flex-column">
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                </div>
                <div class="col-6  d-flex justify-content-center align-items-center ">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/800" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}