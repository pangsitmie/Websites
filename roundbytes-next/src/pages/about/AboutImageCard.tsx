import { StyledAboutImageCard } from "@/components/styles/card/AboutImageCard.styled";
import Image from "next/image";

type Props = {
  src: string;
};
const AboutImageCard = ({ src }: Props) => {
  return (
    <StyledAboutImageCard>
      <div>
        {/* <img src={img} alt="" /> */}
        <img alt="roundbytes" src={src} />

      </div>
    </StyledAboutImageCard>
  );
};
export default AboutImageCard;
