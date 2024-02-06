import React, { Fragment, useState } from 'react'

const Tabs = ({ tabs }) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => setActiveTab(index);

  return (
    <Fragment>
      <div className=" w-[99%] lg:w-full mx-auto">
        <ul className="text-center grid grid-cols-3 shadow-lg md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 bg-[#f1f1f158] text-xs lg:text-base border border-[#ccc] mb-6 text-[#222]">
          {tabs.map((tab, tabIndex) => {
            return (
              <li
                key={tabIndex}
                className={`${
                  activeTab === tabIndex || tab.label == tabs[activeTab].label
                    ? "active_tab"
                    : ""
                } cursor-pointer px-0 py-4 lg:px-6 block font-bold hover:bg-gray-300 transition-all duration-300 text-[#0b1d45]"`}
                onClick={() => handleTabClick(tabIndex)}
              >
                {tab.label}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-11/12 mx-auto lg:w-full">
        {tabs[activeTab].content || tabs[0].content}
      </div>
    </Fragment>
  )
}

export default Tabs