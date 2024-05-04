import React from 'react'
import Breadcrumbs from '../../Components/Breadcrumbs'

const About = () => {
  return (
    <div>
      <div className="about-hero-section">
        <div className="bg-black flex ">
          <div className="content-section py-16 px-5 max-w-screen-xl mx-auto content-end flex flex-col gap-6 flex-nowrap justify-center max-sm:py-12 max-sm:px-5">
            <div className="content flex flex-col gap-8">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>
      This is About Section
    </div>
  )
}

export default About
