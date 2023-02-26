import { IInputProps } from "./Input.types";

const Input = ({ type, placeholder, value, onChange }: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="text-black"
    />
  );
};

export default Input;
