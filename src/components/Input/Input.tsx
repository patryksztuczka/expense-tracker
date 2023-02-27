import { IInputProps } from "./Input.types";

const Input = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  error,
}: IInputProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1">
      {label && <label className="pl-2 text-sm text-white">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border-2 border-zinc-800 bg-zinc-900 p-4 text-white outline-none placeholder:text-zinc-500 focus:border-green-500"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
