import { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className="border rounded py-2 px-4" {...props} />;
};

export default Input;
