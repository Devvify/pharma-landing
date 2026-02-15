import { Badge, Stack } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import type { LandingProduct } from "../../api/types";

interface BadgeConfig {
  label: string;
  background: string;
  color?: string;
}

interface ProductBadgesProps {
  item: LandingProduct;
}

export default function ProductBadges({ item }: ProductBadgesProps) {
  const theme = useMantineTheme();
  const badges: BadgeConfig[] = [];

  if (item.IsPerMonth) {
    badges.push({
      label: "Recurring Plan",
      background: `linear-gradient(${theme.other.gradients.darkGradient})`,
      color: "#fff",
    });
  }

  if (badges.length === 0) return null;

  return (
    <Stack
      gap={4}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      {badges.map((badge, index) => (
        <Badge
          key={index}
          size="lg"
          style={{
            background: badge.background,
            color: badge.color || "#fff",
            textTransform: "none",
            fontWeight: 400,
            padding: "8px 18px",
            borderRadius: "0 12px 0 12px",
            borderColor: "#954139",
            borderWidth: "0px 0px 0.5px 0.5px",
            borderStyle: "solid",
          }}
        >
          {badge.label}
        </Badge>
      ))}
    </Stack>
  );
}
