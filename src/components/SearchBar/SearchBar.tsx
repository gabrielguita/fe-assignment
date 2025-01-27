import { Search } from "@/components/ui";
import { Container } from "./SearchBar.styles";
import { PLACEHOLDER } from "./constants";

export const SearchBar: React.FC<{
  onSearch: (query: string) => void;
}> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <Container>
      <Search text={PLACEHOLDER} onSearch={handleSearch} />
    </Container>
  );
};
