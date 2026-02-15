import { Container } from "@mantine/core";
import type { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <Container size="xl" px={{ base: 16, sm: 20, md: 24 }}>
      {children}
    </Container>
  );
}
