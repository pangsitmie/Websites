import EARTH_IMG from "../../assets/roundbytes_earth.svg";
import MOON_IMG from "../../assets/roundbytes_moon.svg";
import ASTRONAUT_IMG from "../../assets/roundbytes_astronaut.svg";
import ButtonFill from "@/components/button/ButtonFill";
import { StyledNotFoundContainer } from "@/components/styles/container/NotFoundContainer.styled";
import { H1, H2 } from "@/components/styles/typography/typography.styled";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <StyledNotFoundContainer>
      <div className="bg_404">
        <div className="stars">
          <div className="central-body">
            <H1>404</H1>
            <H2>
              v LOOKS LIKE YOU ARE
              <br />
              LOST IN SPACE
            </H2>
            <a href="/">
              <ButtonFill text="GO BACK HOME" link={"/"} />
            </a>
          </div>
          <div className="objects">
            <div className="earth-moon">
              <img className="object_earth" src={EARTH_IMG} width="100px" />
              <img className="object_moon" src={MOON_IMG} width="80px" />
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src={ASTRONAUT_IMG}
                width="140px"
              />
            </div>
          </div>
          <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </div>
    </StyledNotFoundContainer>
  );
};

export default NotFound;
