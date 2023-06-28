import { StyledButtonStroke } from "../styles/button/ButtonStroke.styled";
import { motion } from "framer-motion";

interface Props {
  text: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  color?: string;
}

export default function ButtonStorke({ color, text, link, className, onClick }: Props) {
  return (
    <a href={link}>
      <StyledButtonStroke
        color={color}
        onClick={onClick}
        className={`btn ${className}`}>
        {text}
      </StyledButtonStroke>
    </a>
  );
}
