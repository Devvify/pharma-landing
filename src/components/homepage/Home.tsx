import { Box } from "@mantine/core";
import SearchBar from "./SearchBar";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeroSection />
      <Box style={{ marginTop: "auto" }}>
        <SearchBar />
      </Box>
    </Box>
  );
}
