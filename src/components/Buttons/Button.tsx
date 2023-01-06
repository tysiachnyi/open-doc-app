import { FC } from "react";

type ButtonProps = {
  text: string;
  theme: "primary" | "secondary" | "danger";
};

const Button: FC<ButtonProps> = ({ text, theme }) => {
  // TailwindCss button component

  const buttonTheme = {
    primary:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    secondary:
      "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
    danger:
      "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",
  };

  return <button className={buttonTheme[theme]}>{text}</button>;
};

export default Button;
