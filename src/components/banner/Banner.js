

import React from 'react'

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-navyblue sm:text-5xl mb-12 lg:text-7xl md:4px lh-96">
              Digital Marketing{" "}
              <span className="text-6xl text-[#FD3A03]">Agency</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Helping you to find your audience and deliver your brand story at
              it is best
              <br /> gives our clients the ability to work with a professional
              team of experts, across a broad range of competencies, without the
              need to employ a full-time staff of their own .
            </p>
          </div>

          <div className="text-center mt-5">
            <a href="https://www.behance.net/runagencyy" target="_blank">
              <button
                type="button"
                className="text-15px text-white font-medium bg-[#132A47] py-5 px-9 mt-2 leafbutton"
              >
                See our portfolio
              </button>
            </a>
            <a href="#test">
              <button
                type="button"
                className="text-15px ml-4 mt-2 text-[#132A47] transition duration-150 ease-in-out font-medium py-5 px-16 border border-lightgrey leafbutton"
              >
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner
