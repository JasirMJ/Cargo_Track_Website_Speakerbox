import React from 'react'

function Services() {
    const [services, setServices] = React.useState([
        {
            "image": 1,
            "heading": "Household Goods Relocation",
            "description": "Undertaking household goods relocation to make easy and convenient moving."
        },

        {
            "image": 1,
            "heading": "Office Relocation & Data Centre Migration ",
            "description": "Planning and relocating offices with our skilled movers and packers."
        },
        {
            "image": 1,
            "heading": "Mobility Services",
            "description": "Assisting companies to handle the complex tax, planning, operational, and strategic aspects in all levels."
        },
        {
            "image": 1,
            "heading": "Road Transportation",
            "description": "we handle both standard and heavylift transport We provide is a variety of solutions to meet the demand of customer."
        },
        {
            "image": 1,
            "heading": "Packing & Crating",
            "description": "We have a team of professional carpenters and expert packers."
        },
        {
            "image": 1,
            "heading": "Groupage Services",
            "description": "We provide domestic and international transportation even for less volume load along with other shipments."
        },

    ])

    return (
        <>
            {/* begin */}


            <section id="page-title" className="bg-transparent">
                <div className="container clearfix">
                    <h1>Our Services</h1>
                    <button className="btn-see-all ">See all </button>
                </div>
            </section>
            <section id="content">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <div className="row col-mb-50 mb-0 xbg-primary">
                            {services.map((service, index) => {
                                return <div className="col-sm-6 col-lg-4 " style={{
                                    // width: "300px",
                                    padding: "0px 30px 30px 30px",
                                }}>
                                    <div className="xteam service-card bg-primary-light">
                                        <div className="team-image">
                                            <img src="demos/medical/images/doctors/1.jpg" className='service-card ' style={{ height: '350px' }} alt="image" />
                                        </div>
                                        <div className="team-desc ">
                                            <div className="xteam-title p-4" >
                                                <span className='service-heading'>{service.heading}</span>
                                                <br />
                                                <span className='service-desc' >
                                                    {service.description}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}


                        </div>
                    </div>

                    <div className="promo promo-dark promo-full promo-uppercase bg-color footer-stick p-5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg">
                                    <h3 style={{ letterSpacing: 2 }}>Get the Best Care for your Loved Ones</h3>
                                    <span className="nott">We strive to provide Our Customers with Top Notch Support to make
                                        their Theme</span>
                                </div>
                                <div className="col-12 col-lg-auto mt-4 mt-lg-0">
                                    <a href="#" className="button button-large button-border button-rounded button-light button-white m-0">Contact
                                        Us</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            {/* end */}
        </>
    )
}

export default Services

const ServiceCard = (service) => {

    return (<div className="col-sm-6 col-lg-4 " >
        <div className="team service-card bg-primary-light">
            <div className="team-image">
                <img src="demos/medical/images/doctors/1.jpg" className='service-card ' style={{ height: '300px' }} alt="Dr. John Doe" />
            </div>
            <div className="team-desc ">
                <div className="xteam-title " >
                    <h4 className='service-heading'>{service.heading}</h4>
                    <span className='service-desc' >
                        {service.description}
                    </span>
                </div>
            </div>
        </div>
    </div>
    )

}