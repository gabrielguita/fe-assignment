import { Nav } from "../Nav";
import { Container, StyledHeader, Title } from "./Header.styles";
import { Header as HeaderTypes } from "@/types";
import {
  HOME_HEADER_LABEL,
  HOME_HEADER_SLUG,
  PROFILE_HEADER_LABEL,
  PROFILE_HEADER_SLUG,
} from "@/constants";

const navigation = [
  { href: HOME_HEADER_SLUG, text: HOME_HEADER_LABEL },
  { href: PROFILE_HEADER_SLUG, text: PROFILE_HEADER_LABEL },
];

export const Header = ({ title }: HeaderTypes) => (
  <Container>
    <StyledHeader>
      <Title>{title}</Title>
    </StyledHeader>
    <Nav navigation={navigation} />
  </Container>
);
