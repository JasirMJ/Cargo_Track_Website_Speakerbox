import React from 'react'
import img_labour from "../assets/images/misc/Group 973.png"

import img_building from "../assets/images/misc/Group 971.png"


function TwoColumOne() {
    return (

        <div className="xsection row p-0 align-items-stretch dark topmargin-sm"
            style={{
                height: 'auto',
                marginBottom: '5%',
            }} >
            <div className="col-lg-6"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >
                <div
                    style={{
                        width: '80%',
                    }}
                >
                    <img src={"images/misc/Group 971.png"} />

                    <div className='banner_font color-secondary'>The Best <span className='banner_font  color-primary-medium'> Moving </span> </div>
                    <div className='banner_font color-secondary'>Company in the </div>
                    <div className='banner_font color-primary-medium'>Kingdom</div>
                    <div className='color-primary-medium'>Connecting international boundaries for door to door cargo services from Saudi Arabia</div>
                    <button className='btn btnprimary  mt-1'>Country Guide</button>
                </div>


            </div>
            <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                style={{
                    height: '70vh',
                    background: `url("images/misc/Group 973.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                }}
            >

                <div className="form-widget col-padding" data-loader="button">
                </div>
            </div>
        </div>

    )
}

export default TwoColumOne