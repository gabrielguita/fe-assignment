import { StyledLabel } from "./Label.styles";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);
