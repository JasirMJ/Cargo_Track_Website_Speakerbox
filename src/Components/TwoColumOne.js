import React from 'react'
import img_labour from "../assets/images/misc/Group 973.png"

import img_building from "../assets/images/misc/Group 971.png"


function TwoColumOne() {
    return (

        <div className="xsection row p-0 align-items-stretch dark topmargin-sm"
            style={{
                height: '75vh',
            }} >
            <div className="col-lg-6"
                style={{
                    // backgroundColor: "red",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            // style={{ background: 'urlurl("demos/medical/images/section-bg.jpg") center center no-repeat center center no-repeat', backgroundSize: 'cover', minHeight: 250 }}
            >
                <div
                    style={{
                        width: '80%',
                        // backgroundColor: 'green',
                        // lineHeight: "100px"
                    }}
                >
                    <img src={"images/misc/Group 971.png"} />

                    <div className='banner_font color-secondary'>The Best <span className='banner_font  color-primary-medium'> Moving </span> </div>
                    <div className='banner_font color-secondary'>Company in the </div>
                    <div className='banner_font color-primary-medium'>Kingdom</div>
                    <div className='color-primary-medium'>Connecting international boundaries for door to door cargo services from Saudi Arabia</div>
                    <button className='btn btnprimary'>Country Guide</button>
                </div>


            </div>
            <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                style={{
                    height: '70vh',
                    // C:\Users\JasirMJ\Desktop\Solutionizeitx\Cargo_Track_Website_Speakerbox\public\images\misc
                    background: `url("images/misc/Group 973.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                    // backgroundColor: "red"
                }}
            >
                {/* {img_building}
                <br />
                {img_labour} */}
                <div className="form-widget col-padding" data-loader="button">
                    {/* <h2>Book an Appointment.</h2>
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
            </form> */}
                </div>
            </div>
        </div>

    )
}

export default TwoColumOne