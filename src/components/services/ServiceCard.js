import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="p-10 xl:p-6 bg-white rounded-3xl shadow-xl border border-[#ddd]">
      <div className="text-6xl relative mb-8">
        <div className="relative">{icon}</div>
        <div className="absolute top-[37px] -left-2 w-[40px] h-[40px] opacity-50 bg-[#7432ff] rounded-full"></div>
      </div>
      <h2 className="my-6 text-xl font-semibold text-[#111]">{title}</h2>
      <p className="text-lg font-normal text-bluegray my-2">{description}</p>
      <a
        className="text-base font-semibold text-[#f1f1f1] px-12 py-4 bg-[#1d233a] rounded-full inline-block mt-6 relative z-1 transition-all duration-500 ease-in-out overflow-hidden"
        href={link}
      >
        Find out more
      </a>
    </div>
  )
}

export default ServiceCard