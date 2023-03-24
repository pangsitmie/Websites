import { motion } from "framer-motion";
import { StyledButtonFill } from "../styles/ButtonFill.styled";

interface Props {
  text: string;
  link?: string;
  className?: string;
  type?: "submit" | "button" | "reset";
}

export default function ButtonFill({
  text,
  link,
  className,
  type = "button",
}: Props) {
  return (
    <a href={link}>
      <StyledButtonFill className={`btn ${className}`} type={type}>
        {text}
      </StyledButtonFill>
    </a>
  );
}
