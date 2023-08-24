import React from "react";
import { StyledProblemSolutionCard } from "./styles/ProblemSolutionCard.styled";
import { H2, H3, H4, P } from "./styles/typography/typography.styled";

type Props = {
  title: string;
  content: string;
  color: string;
};

const ProblemSolutionCard = ({ title, content, color }: Props) => {
  return (
    <StyledProblemSolutionCard color={color}>
      <H4 className="mb-4 text-white font-bold">{title}</H4>
      <P className="text-white">{content}</P>
    </StyledProblemSolutionCard>
  );
};

export default ProblemSolutionCard;
