import { Loading as LoadingTypes } from "@/types";
import { Container, StyledLoading } from "./Loading.styles";

export const Loading = ({ label, loading }: LoadingTypes) => (
  <>
    {loading ? (
      <Container>
        <StyledLoading>{label}</StyledLoading>
      </Container>
    ) : (
      <></>
    )}
  </>
);
