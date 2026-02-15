import { Card, Image, Text, Box } from "@mantine/core";
import type { LandingCategory } from "../../api/types";
import { toAbsoluteMediaUrl } from "../../utils/media";

export default function CategoryCard({ item }: { item: LandingCategory }) {
  return (
    <Card
      radius="lg"
      p={0}
      withBorder={false}
      style={{
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src={toAbsoluteMediaUrl(item.CategoryPhotos)}
        alt={item.Category}
        h="100%"
        fit="cover"
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <Box
        p="md"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <Text fw={700} fz="lg" c="#fff">
          {item.Category}
        </Text>
      </Box>
    </Card>
  );
}
