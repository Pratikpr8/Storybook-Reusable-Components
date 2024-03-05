import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonProps) => {
  return <button className=" text-blue-400" {...props} />;
};

export default Button;
