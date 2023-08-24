import { StyledExpertiseCard } from "@/components/styles/card/ExpertiseCard.styled";
import { BsPatchCheckFill } from "react-icons/bs";

import React from "react";
import { H3 } from "@/components/styles/typography/typography.styled";

type Props = {
  title: string;
  data: { name: string; level: string }[];
};

const ExpertiseCard = ({ title, data }: Props) => {
  return (
    <StyledExpertiseCard>
      <H3 className="mb-8 text-center">{title}</H3>
      <div className="grid grid-cols-2 gap-2">
        {data.map((item, index) => (
          <div className="flex gap-2" key={index}>
            <BsPatchCheckFill size={20} className="mt-1 text-primary-100" />
            <div>
              <h4 className="text-xl">{item.name}</h4>
              <small>{item.level}</small>
            </div>
          </div>
        ))}
      </div>
    </StyledExpertiseCard>
  );
};

export default ExpertiseCard;
