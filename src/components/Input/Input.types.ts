export interface IInputProps {
  type: string;
  placeholder: string;
  label?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}
