import { useState } from 'react';

import Tab from '../Tab';

interface IAccordionProps {
  data: { title: string; description: string; img: string; tag?: string }[];
}

export const Accordion = ({ data }: IAccordionProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabClick = (index: number) => {
    return () => setActiveTabIndex(index);
  };

  return (
    <div className={`flex md:flex-col-reverse justify-between w-full items-center`}>
      <div className="flex flex-col gap-y-80 md:gap-y-24 md:mt-48 mr-120 [@media(max-width:1072px)]:mr-60 md:mr-0 md:max-w-full">
        {data.map((item, index) => (
          <Tab
            title={item.title}
            bodyText={item.description}
            active={activeTabIndex === index}
            tag={item.tag}
            key={index}
            onClick={handleTabClick(index)}
          />
        ))}
      </div>
      <div className="md:h-fit max-w-[50%] md:w-[80%] sm:w-full md:mb-48">
        <img src={data[activeTabIndex].img} alt="" className="h-fit w-full mx-auto" />
      </div>
    </div>
  );
};
