import React from 'react'
import bgimg from "../assets/images/saudi relocation.png"

function QuestionBanner() {
    return (
        <div className="xsection row p-0 align-items-stretch dark topmargin-sm">
            <div className="col-lg-12"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '5%',
                    marginTop: '5%',

                }}
            >
                <div
                    className='question_banner'
                    style={{
                        backgroundImage:
                            `url("${bgimg}")`,
                    }}
                >

                    <div className='heading-small'>Are you considering a </div>
                    <div className='heading-small'>relocation to Saudi Arabia</div>
                    <div className='normal-text-large mt-3'>Get in touch with us for assistance</div>
                    <a className='btn btnprimary  mt-3' href='/country-guide'>Country Guide</a>
                </div>


            </div>
        </div>
    )
}

export default QuestionBanner