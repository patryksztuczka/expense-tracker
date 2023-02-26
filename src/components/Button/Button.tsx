import Spinner from "../Spinner/Spinner";
import { IButtonProps } from "./Button.types";

const Button = ({ type, text, onClick, isLoading }: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-lg bg-zinc-800 p-2 font-semibold text-white hover:bg-zinc-700"
    >
      {!isLoading ? text : <Spinner />}
    </button>
  );
};

export default Button;
