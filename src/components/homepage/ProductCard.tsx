import {
  Box,
  Card,
  Image,
  Text,
  UnstyledButton,
  Group,
  Stack,
} from "@mantine/core";
import type { LandingProduct } from "../../api/types";
import { toAbsoluteMediaUrl } from "../../utils/media";
import { useMantineTheme } from "@mantine/core";
import ProductBadges from "./ProductBadges";
import { CartPlusIcon } from "../ui/Icons";

function formatMoney(n: number) {
  return `$${n.toFixed(0)}`;
}

interface ProductCardProps {
  item: LandingProduct;
  isInCart?: boolean;
  onAddToCart?: () => void;
}

export default function ProductCard({
  item,
  isInCart = false,
  onAddToCart,
}: ProductCardProps) {
  const theme = useMantineTheme();
  const isOut = item.IsOutOfStock;

  const getButtonGradient = () => {
    if (isInCart) {
      return `linear-gradient(${theme.other.gradients.accent})`;
    }
    return `linear-gradient(${theme.other.gradients.goldBorder})`;
  };

  return (
    <Card
      radius="lg"
      p={0}
      style={{
        position: "relative",
        background: "rgba(49, 65, 140, 0.3)",
        overflow: "hidden",
        height: "240px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProductBadges item={item} />

      <Group
        gap="lg"
        align="center"
        wrap="nowrap"
        p="lg"
        style={{ flex: 1, minHeight: 0 }}
      >
        <Box
          style={{
            width: 100,
            height: 150,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={toAbsoluteMediaUrl(item.CoverPhoto)}
            alt={item.Name}
            h={150}
            w="auto"
            fit="contain"
          />
        </Box>

        <Box style={{ flex: 1, minWidth: 0 }}>
          <Text
            fw={500}
            fz="lg"
            lineClamp={5}
            style={{
              background: `linear-gradient(${theme.other.gradients.goldBorder})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              wordBreak: "break-word",
            }}
          >
            {item.Name}
          </Text>
        </Box>
      </Group>

      <Group gap={0} wrap="nowrap" style={{ marginTop: "auto" }}>
        <Box
          px="md"
          py="xs"
          style={{
            flex: 1,
            background: "rgba(31, 31, 31, 0.3)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack gap={2}>
            <Text fw={400} fz="sm" c="#fff" lh={1.2}>
              {formatMoney(item.Price)}
              {item.IsPerMonth && (
                <Text component="span" fz="xs" c="rgba(255,255,255,0.7)">
                  /per month
                </Text>
              )}
            </Text>

            {(item.ConsultancyFee || item.LabCharge) && (
              <Text fz="xs" c="rgba(255,255,255,0.5)" lh={1.2}>
                {item.ConsultancyFee &&
                  `${formatMoney(item.ConsultancyFee)} physician consult`}
                {item.ConsultancyFee && item.LabCharge && ", "}
                {item.LabCharge && `${formatMoney(item.LabCharge)} Lab Charge`}
              </Text>
            )}
          </Stack>
        </Box>

        {isOut ? (
          <Box
            style={{
              minWidth: 100,
              height: "100%",
              background: theme.colors.primary[7],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0 0 12px 0",
              padding: "0 12px",
            }}
          >
            <Text
              fw={700}
              fz="xs"
              c="#000"
              style={{
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              OUT OF STOCK
            </Text>
          </Box>
        ) : (
          <UnstyledButton
            onClick={onAddToCart}
            style={{
              width: 60,
              height: "100%",
              background: getButtonGradient(),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              borderRadius: "0 0 12px 0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            <CartPlusIcon />
          </UnstyledButton>
        )}
      </Group>
    </Card>
  );
}
