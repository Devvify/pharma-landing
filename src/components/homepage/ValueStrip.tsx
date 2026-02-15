import { Box, Grid, Group, Text } from "@mantine/core";

const ITEMS = [
  { icon: "/icons/secure-payment.svg", title: "Secure Payment" },
  { icon: "/icons/online-support.svg", title: "Online Support" },
  { icon: "/icons/free-shipping.svg", title: "Free Shipping" },
  { icon: "/icons/best-value.svg", title: "Best Value" },
];

export default function ValueStrip() {
  return (
    <Box
      py={48}
      style={{
        background: "rgba(49, 65, 140, 0.3)",
        width: "100%",
      }}
    >
      <Box maw={1400} mx="auto">
        <Grid gutter={{ base: 24, md: 40 }} px={16} justify="center">
          {ITEMS.map((it) => (
            <Grid.Col key={it.title} span={{ base: 6, md: 3 }}>
              <Group
                gap={12}
                align="center"
                justify="flex-start"
                wrap="nowrap"
                className="value-strip-item"
              >
                <img
                  src={it.icon}
                  alt={it.title}
                  width={48}
                  height={48}
                  style={{ flexShrink: 0 }}
                />
                <Text
                  fw={500}
                  fz={{ base: 14, sm: 18, md: 22 }}
                  c="rgba(255,255,255,0.9)"
                  ta="left"
                  style={{
                    lineHeight: 1.3,
                    maxWidth: "100%",
                  }}
                >
                  {it.title}
                </Text>
              </Group>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
