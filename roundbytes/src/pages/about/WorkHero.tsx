import { H0, H1 } from "@/components/styles/typography/typography.styled";
import { StyledWorkHero } from "../../components/styles/WorkHero.styled";

type Props = {
  title: string;
  subtitle1: string;
  subtitle2: string;
};
const WorkHero = ({ title, subtitle1, subtitle2 }: Props) => {
  return (
    <StyledWorkHero>
      <div>
        <H0 className="leading-tight">{title}</H0>
        <h4 className="text-right">{subtitle1}</h4>
        <h5 className="text-right text-indigo-300">{subtitle2}</h5>
      </div>
    </StyledWorkHero>
  );
};
export default WorkHero;
