export interface CardProps {
  title?: string;
  content?: string;
  image?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
}
