export type DropdownProps = {
  label?: string;
  options: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
};
