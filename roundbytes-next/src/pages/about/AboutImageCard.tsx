import { StyledAboutImageCard } from "@/components/styles/card/AboutImageCard.styled";

type Props = {
  img: string;
};
const AboutImageCard = ({ img }: Props) => {
  return (
    <StyledAboutImageCard>
      <div>
        <img src={img} alt="" />
      </div>
    </StyledAboutImageCard>
  );
};
export default AboutImageCard;
