import Spinner from "../Spinner/Spinner";
import { IButtonProps } from "./Button.types";

const Button = ({ type, text, onClick, isLoading }: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-xl bg-green-500 p-4 font-semibold text-white hover:bg-green-600"
    >
      {!isLoading ? text : <Spinner />}
    </button>
  );
};

export default Button;
