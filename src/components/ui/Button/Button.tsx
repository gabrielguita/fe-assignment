import { StyledButton } from "./Button.styles";
import { LOADING } from "./constants";

export const Button = ({
  disabled,
  label,
  loading,
  onClick,
}: {
  disabled: boolean;
  label: string;
  loading: boolean;
  onClick: () => void;
}) => (
  <>
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
    {loading && <div>{LOADING}</div>}
  </>
);
