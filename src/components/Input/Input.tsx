import { IInputProps } from "./Input.types";

const Input = ({ type, placeholder, value, onChange, error }: IInputProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg bg-zinc-700 px-4 py-2 text-white outline-none"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
