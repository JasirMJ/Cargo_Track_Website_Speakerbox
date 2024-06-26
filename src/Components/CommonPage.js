import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Topbar from './Topbar'

import whatsapp_icon from '../assets/images/icons/whatsapp.png'

function CommonPage({ component }) {
    return (
        <div>
            {/* begin */}
            <div>
                <Topbar />
                <Header />
                {/* content begin */}
                {component}
                {/* content end */}

                <Footer />
                <div className="position-fixed  bottom-0 end-0 whatsapp-icon" >
                    <img src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div >
            {/* end */}
        </div >
    )
}

export default CommonPage