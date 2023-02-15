import { ComponentPropsWithoutRef, FC } from "react";
import { Container } from "./styles";

type ButtonProps = React.ComponentPropsWithoutRef<"input">;

const Input: FC<ButtonProps> = () => {
  return <Container />;
};

export default Input;
