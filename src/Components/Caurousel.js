import React from 'react'
import fast from '../assets/images/herobanner/fast.png';
import kochi from '../assets/images/herobanner/kochi.png';
import usa from '../assets/images/herobanner/usa.png';


function Caurousel() {

    const [banner_data, setBanner_data] = React.useState([
        {
            "heading_1": "Direct Groupage",
            "heading_2": "To Europe, Usa, Canada",
            "heading_3": "Now send your goods to and from hassle free at best rates",
        },
        {
            "heading_1": "We Make Moving",
            "heading_2": "Fast & Easy",
            "heading_3": "ersonal and Commercial Relocation Services",
        },
        {
            "heading_1": "Groupage Services to",
            "heading_2": "Hyderabad, Kochi &  Chennai",
            "heading_3": "Providing customized and affordable Groupage Services to South India",
        },
    ]);


    return (
        <section id="page-title" className="page-title-dark page-title-center p-0" style={{ height: '100vh' }}>
            {/* <div className="content-wrap"> */}
            <div className="xcontainer clearfix">
                <div className="row col-mb-50 mb-0 " >
                    <div className="col-lg-5 col-sm-5 col-md-4 d-flex align-items-center xflex-nowrap  flex-grow-1"
                        style={{
                            textAlign: 'start',
                            padding: '0px 0px 0px 90px',
                            zIndex: '500',
                            height: '100vh',
                        }}
                    >
                        <div className="fslider " data-arrows="false" data-pagi="false" data-animation="fade" data-hover="false">
                            <div className="flexslider ">
                                <div className="slider-wrap ">
                                    <div className="slide">

                                        <div className='color-primary-medium banner_font'>
                                            Direct Groupage
                                        </div>
                                        <div className='color-secondary banner_font'
                                        // style={{ whiteSpace: 'nowrap' }}
                                        >
                                            To Europe, Usa, Canada
                                        </div>

                                        <div className='color-primary-medium '>
                                            Now send your goods to and from hassle free at best rates
                                        </div>
                                        <button className='btn btnprimary'>
                                            Conbact Us
                                        </button>

                                    </div>
                                    <div className="slide">
                                        <div className='color-primary-medium banner_font'
                                        // style={{ whiteSpace: 'nowrap' }}
                                        >
                                            We Make Moving
                                        </div>
                                        <div className='color-secondary banner_font'
                                        // style={{ whiteSpace: 'nowrap' }}
                                        >
                                            Fast & Easy
                                        </div>
                                        <div className='color-primary-medium '>
                                            Personal and Commercial Relocation Services
                                        </div>
                                        <button className='btn btnprimary'>
                                            Conbact Us
                                        </button>

                                    </div>
                                    <div className="slide">
                                        <div className='color-primary-medium banner_font'
                                        // style={{ whiteSpace: 'nowrap' }}
                                        >
                                            Groupage Services to
                                        </div>
                                        <div className='color-secondary banner_font' style={{ whiteSpace: 'nowrap', }}>
                                            Hyderabad, Kochi &  Chennai                                        </div>
                                        <div className='color-primary-medium '>
                                            Providing customized and affordable Groupage Services to South India
                                        </div>
                                        <button className='btn btnprimary'>
                                            Conbact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-5 col-md-4 flex-grow-1"
                        style={{
                            height: '100vh',
                        }}
                    >
                        <div className="fslider" data-arrows="false" data-pagi="false" data-animation="fade" data-hover="false">
                            <div className="flexslider">
                                <div className="slider-wrap">
                                    <div className="slide"><img src={fast} alt="Page Title Image" /></div>
                                    <div className="slide"><img src={usa} alt="Page Title Image" /></div>
                                    <div className="slide"><img src={kochi} alt="Page Title Image" /></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* </div> */}

        </section >
    )
}

export default Caurousel