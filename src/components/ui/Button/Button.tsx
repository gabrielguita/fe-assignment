import { Button as ButtonTypes } from "@/types";
import { StyledButton } from "./Button.styles";
import { LOADING } from "./constants";

export const Button = ({
  type = "submit",
  disabled,
  label,
  loading,
  onClick,
}: ButtonTypes) => (
  <>
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
    {loading && <div>{LOADING}</div>}
  </>
);
