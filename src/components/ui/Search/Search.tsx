import { Search as SearchTypes } from "@/types";
import { StyledInput } from "./Search.styles";

export const Search = ({ text, onSearch }: SearchTypes) => (
  <StyledInput type="text" placeholder={text} onChange={onSearch} />
);
