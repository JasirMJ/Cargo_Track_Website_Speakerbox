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

function Services() {
    return (
        <div>
            {/* begin */}
            <div>
                <Topbar />
                <Header />

                <TwoColumOne />

                {/* <RibbonBanner />
                <Services type="" name="Our Services" see_all_btn={false} />
                <RibbonBannerMembership />
                <Services type="customer" name="Customer Feedback" see_all_btn={false} /> */}

                <ServiceList type="" name="Our Services" see_all_btn={false} />

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

export default Services