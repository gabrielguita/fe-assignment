import { Input as InputTypes } from "@/types";
import { StyledInput } from "./Input.styles";

export const Input = ({
  id,
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputTypes) => (
  <>
    <StyledInput
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    >
      {label}
    </StyledInput>
  </>
);
