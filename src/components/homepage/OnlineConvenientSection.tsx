import { Box, Title, Stack, Text, Group } from "@mantine/core";

function ArrowIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path d="M18 10L0 0L3.83933 10L0 20L18 10Z" fill="white" />
    </svg>
  );
}

const FEATURES = [
  "Chat with a provider 24/7",
  "Fast, discreet shipping",
  "Clinically proven ingredients and FDA-approved treatments.",
];

export default function OnlineConvenientSection() {
  return (
    <Box
      p={{ base: "40px 20px", sm: "60px 20px", md: "80px 20px" }}
      className="online-convenient-bg"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "auto",
        backgroundImage: "url(/images/online-convenient-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
          zIndex: 0,
        }}
      />

      <Box
        className="online-convenient-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        <Stack
          gap="md"
          className="online-convenient-heading"
          style={{
            flex: "1 1 100%",
          }}
        >
          <Title
            order={2}
            fz={{ base: 32, sm: 40, md: 48, lg: 64 }}
            style={{
              fontWeight: 400,
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}
          >
            100% Online,
            <br />
            100% Convenient
          </Title>
        </Stack>

        <Stack
          gap="xs"
          className="online-convenient-features"
          style={{
            flex: "1 1 100%",
          }}
        >
          {FEATURES.map((feature, index) => (
            <Group key={index} gap="md" align="flex-start" wrap="nowrap">
              <Box
                style={{
                  flexShrink: 0,
                  marginTop: 4,
                }}
              >
                <ArrowIcon />
              </Box>
              <Text
                c="#fff"
                fz={{ base: 14, sm: 16, md: 18 }}
                style={{
                  lineHeight: 1.6,
                }}
              >
                {feature}
              </Text>
            </Group>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
