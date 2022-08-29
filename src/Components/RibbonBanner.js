import React from 'react'
import archivement_card from '../assets/images/ribbon-banners/acheivment card.png'

function RibbonBanner() {
    return (
        <div className="section mt-0">
            <div className="container clearfix" >
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                            <div className="fbox-content xbg-primary">
                                <div style={{ fontSize: '70px', fontWeight: "600" }} className="counter  xcounter-small d-flex flex-1 justify-content-end align-items-center"><span data-from={0} data-to={800} data-refresh-interval={1} data-speed={500} /></div>

                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                            <div className="fbox-content xbg-secondary">
                                <h5 className="m-0 text-color counter_font">Happy Clients</h5>
                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                            <div className="fbox-content xbg-primary">
                                <div style={{ fontSize: '70px', fontWeight: "600" }} className="counter  xcounter-small d-flex flex-1 justify-content-end align-items-center"><span data-from={0} data-to={500} data-refresh-interval={1} data-speed={500} /></div>

                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                            <div className="fbox-content xbg-secondary">
                                <h5 className="m-0 text-color counter_font">Projects Done</h5>
                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                            <div className="fbox-content xbg-primary">
                                <div style={{ fontSize: '70px', fontWeight: "600" }} className="counter  xcounter-small d-flex flex-1 justify-content-end align-items-center"><span data-from={0} data-to={65} data-refresh-interval={1} data-speed={500} /></div>

                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                            <div className="fbox-content xbg-secondary">
                                <h5 className="m-0 text-color counter_font">Expert Employees</h5>
                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RibbonBanner