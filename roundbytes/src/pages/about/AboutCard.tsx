import { StyledAboutCard } from "@/components/styles/card/AboutCard.styled";
import { IconType } from "react-icons";
import { ReactElement } from "react";

type Props = {
  icon: IconType;
  title: string;
  subtitle: string;
};
const AboutCard = ({ icon: Icon, title, subtitle }: Props) => {
  return (
    <StyledAboutCard>
      <Icon size={24} className="text-primary-100" />{" "}
      {/* Render the icon using the passed prop */}
      <h3>{title}</h3>
      <small>{subtitle}</small>
    </StyledAboutCard>
  );
};
export default AboutCard;
