import { H1 } from "../../components/styles/H1.styled";
import { StyledWorkHero } from "../../components/styles/WorkHero.styled";

type Props = {
  title_1: string;
  title_2: string;
  title_3: string;
  subtitle1: string;
  subtitle2: string;
};
const WorkHero = ({ title_1, title_2, title_3, subtitle1, subtitle2 }: Props) => {
  return (
    <StyledWorkHero>
      <H1 className="leading-tight">{title_1}</H1>
      <H1 className="leading-tight md:ml-14 sm:ml-0">{title_2}</H1>
      <H1 className="leading-tight">{title_3}</H1>
      <div className="mt-6">
        <h4 className="text-right text-xl ">{subtitle1}</h4>
        <h5 className="text-right text-xl text-indigo-300">{subtitle2}</h5>
      </div>
    </StyledWorkHero>
  );
};
export default WorkHero;
