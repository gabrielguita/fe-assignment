import Link from "next/link";
import { Container } from "./Nav.styles";
import { Nav as NavTypes, NavItem } from "@/types";

export const Nav = ({ navigation }: NavTypes) => (
  <Container>
    {navigation.map(({ href, text }: NavItem, i) => (
      <Link key={i} href={href}>
        {text}
      </Link>
    ))}
  </Container>
);
