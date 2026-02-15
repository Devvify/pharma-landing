import { Box } from "@mantine/core";
import type { ReactNode } from "react";

export default function FullBleed({ children }: { children: ReactNode }) {
  return (
    <Box
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
      }}
    >
      {children}
    </Box>
  );
}
