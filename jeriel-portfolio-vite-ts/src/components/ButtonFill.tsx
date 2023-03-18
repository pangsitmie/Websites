import { motion } from "framer-motion";
import { StyledButtonFill } from "./styles/ButtonFill.styled";

interface Props {
  text: string;
  link: string;
  className?: string;
}

export default function ButtonFill({ text, link, className }: Props) {
  return (
    <StyledButtonFill className={`btn ${className}`}>
      <a href={link}>{text}</a>
    </StyledButtonFill>
  );
}
