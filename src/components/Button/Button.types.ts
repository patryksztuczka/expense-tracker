export interface IButtonProps {
  type: "button" | "submit";
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
}
