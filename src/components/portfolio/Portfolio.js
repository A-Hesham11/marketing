import React, { Fragment } from 'react'
import Tabs from '../atoms/tabs/Tabs';
import Medical from './Medical';
import FoodAndBeverage from './FoodAndBeverage';

const Portfolio = () => {


    const whydata = [
        {
          heading: "Quality",
          subheading:
            "Follow a hashtag growth total posts, videos and images.more revitions",
        },
        {
          heading: "Communication",
          subheading:
            "Follow a hashtag growth total posts, videos and images.more revitions",
        },
        {
          heading: "Reliability",
          subheading:
            "Follow a hashtag growth total posts, videos and images.more revitions",
        },
      ];
      
      const tabsContent = [
        {
          label: "show all",
          content: (
            <Fragment>
              <Medical />
              <FoodAndBeverage />
            </Fragment>
          ),
        },
        {
          label: "medical",
          content: <Medical />,
        },
        {
          label: "Food & beverage",
          content: <FoodAndBeverage />,
        },
      ];
      

  return (
    <div id="portfolio">
      <div className="mx-auto max-w-7xl px-4 my-6 sm:py-5 lg:px-8">
        <div className="grid grid-cols-1">
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              PORTFOLIO
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Some of our amazing works on social media.
            </h4>

            <div className="mt-10">
              <Tabs tabs={tabsContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio