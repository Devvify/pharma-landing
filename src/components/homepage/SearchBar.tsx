import { Box, Container, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function SearchBar() {
  return (
    <Box pb={40}>
      <Container size="sm">
        <TextInput
          className="search-bar-input"
          placeholder="Search by product/treatment"
          leftSection={<IconSearch size={24} color="#fff" />}
          radius="xl"
          size="md"
          styles={{
            input: {
              background: "rgba(67, 67, 67, 0.16)",
              border: "1px solid #fff",
              height: 75,
              color: "white",
              fontSize: 20,
              paddingLeft: 80,
              backdropFilter: "blur(24px)",
            },
            section: {
              color: "#fff",
              marginLeft: 20,
            },
          }}
        />
      </Container>
    </Box>
  );
}