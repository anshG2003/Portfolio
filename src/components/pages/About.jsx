import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import resume from '../data/images/Ansh Gupta CV.docx'

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <a href= {resume} download= "CV">
                <button className='primaryBtn'>Download CV</button>
                </a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
