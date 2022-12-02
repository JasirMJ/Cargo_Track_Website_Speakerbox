import React from 'react'
import p1 from '../assets/profile/Rectangle 171.png'
import p2 from '../assets/profile/Rectangle 171-1.png'
import p3 from '../assets/profile/Rectangle 171-2.png'
import household from '../assets/images/services/Rectangle 172-4.png'
import office_relocation from '../assets/images/services/Rectangle 172-2.png'
import mobility_service from '../assets/images/services/Rectangle 172-3.png'
import road_transportation from '../assets/images/services/Rectangle 173.png'
import packing_and_crafting from '../assets/images/services/Rectangle 172.png'
import groupage_services from '../assets/images/services/Rectangle 172-1.png'
import icon from '../assets/images/icons/Group.png'


function Services({ type, name, see_all_btn }) {
    const [services, setServices] = React.useState([
        {
            "image": household,
            "heading": "Household Goods Relocation",
            "description": "Undertaking household goods relocation to make easy and convenient moving."
        },

        {
            "image": office_relocation,
            "heading": "Office Relocation & Data Centre Migration ",
            "description": "Planning and relocating offices with our skilled movers and packers."
        },
        {
            "image": mobility_service,
            "heading": "Mobility Services",
            "description": "Assisting companies to handle the complex tax, planning, operational, and strategic aspects in all levels."
        },
        {
            "image": road_transportation,
            "heading": "Road Transportation",
            "description": "we handle both standard and heavylift transport We provide is a variety of solutions to meet the demand of customer."
        },
        {
            "image": packing_and_crafting,
            "heading": "Packing & Crating",
            "description": "We have a team of professional carpenters and expert packers."
        },
        {
            "image": groupage_services,
            "heading": "Groupage Services",
            "description": "We provide domestic and international transportation even for less volume load along with other shipments."
        },

    ])

    const [customerFeedback, setCustomerFeedback] = React.useState([
        {
            "profile_pic": p1,
            "name": "Dylan Bob",
            "country": "Canada",
            "comments": "Cargotrack's level of communication and overall performance has been excellent throughout the entire process.We will definitely be coming to you guys for this kind of thing and other opportunities in the future.",
        },
        {
            "profile_pic": p2,
            "name": "Harold",
            "country": "United kingdom",
            "comments": "Just a quick note to acknowledge the outstanding service supplied by Cargotrack with their follow up on e-mails, bills of lading, requests for pricing and their amazing freight services.",
        },
        {
            "profile_pic": p3,
            "name": "Amaad",
            "country": "India",
            "comments": "This Logistics team is amazing. Professional, timely, communicative. They work seamlessly and when troubleshooting is needed they always find the right solution. Thank you Cargotrack.",
        },
    ])

    return (
        <>
            {/* begin */}


            <section id="page-title" className="bg-transparent">
                <div className="container clearfix "
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // flexDirection: 'column',
                    }}
                >
                    <span className='banner_font'>
                        <img src={icon} height="45" style={{ marginRight: '20px' }} />
                        {name}
                    </span>
                    {see_all_btn && <button className="btn-see-all ">See all </button>}

                </div>
            </section>
            <section id="content">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <div className="row col-mb-50 mb-0 xbg-primary">
                            {type == "" && services.map((service, index) => {
                                return <ServiceCard service={service} />
                            })}

                            {type == "customer" && customerFeedback.map((item, index) => {
                                return <CustomerFeedback item={item} />
                            })}


                        </div>
                    </div>


                </div>
            </section>


            {/* end */}
        </>
    )
}

export default Services

const ServiceCard = ({ service }) => {

    return (<div className="col-sm-6 col-lg-4 " style={{
        // width: "300px",
        padding: "0px 30px 30px 30px",
    }}>
        <div className="xteam service-card bg-primary-light" style={{ height: '450px' }} >
            <div className="team-image">
                <img src={service.image} className='service-card ' style={{ height: '260px' }} alt="image" />
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

    )
}


const CustomerFeedback = ({ item }) => {
    return (<div className="col-sm-6 col-lg-4 d-flex justify-content-center" >
        <div className="team service-card bg-primary-light customer-feedback " style={{
            maxWidth: '300px',
            minHeight: '280px'
        }} >
            <div className="xteam-desc ">
                <div className="xteam-title p-3 " >
                    <div style={{ display: 'flex' }}>
                        <img src={item.profile_pic} />
                        <div
                            style={{
                                padding: "0px 0px 0px 10px",
                                display: 'flex',
                                flex: 1,
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: "flex-start",
                            }}
                        >
                            <div className='customer-feedback-heading'>{item.name}</div>
                            <div className='customer-feedback-desc' >{item.country}</div>
                        </div>
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        <span className='xcustomer-feedback-desc banner_font_small ' >{item.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}