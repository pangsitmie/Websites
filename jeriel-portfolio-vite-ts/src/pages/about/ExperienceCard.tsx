import { StyledExperienceCard } from "@/components/styles/ExperienceCard.styled";
import { H3 } from "@/components/styles/H3.styled";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

type Props = {
  title: string;
  data: string[];
};

const ExperienceCard = ({ title, data }: Props) => {
  return (
    <StyledExperienceCard>
      <div>
        <h4 className="text-center text-xl font-medium">{title}</h4>
      </div>
      <div className="px-14 py-4">
        <ul>
          {data.map((item, index) => (
            <li className="mb-4 list-disc" key={index}>
              <h4 className="">{item}</h4>
            </li>
          ))}
        </ul>
      </div>
    </StyledExperienceCard>
  );
};

export default ExperienceCard;
