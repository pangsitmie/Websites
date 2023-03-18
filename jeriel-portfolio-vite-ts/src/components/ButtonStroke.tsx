import { StyledButtonStroke } from "./styles/ButtonStroke.styled";
import { motion } from "framer-motion";

interface Props {
  text: string;
  link: string;
  className?: string;
}

export default function ButtonStorke({ text, link, className }: Props) {
  return (
    <StyledButtonStroke className={`btn ${className}`}>
      <a href={link}>{text}</a>
    </StyledButtonStroke>
  );
}
