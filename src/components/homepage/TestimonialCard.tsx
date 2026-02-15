import { Avatar, Box, Group, Stack, Text } from "@mantine/core";
import type { Testimonial } from "../../static-const";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { QuoteIcon } from "../ui/Icons";

function StarRating({ rating }: { rating: number }) {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C1842D" />
            <stop offset="100%" stopColor="#ECC974" />
          </linearGradient>
        </defs>
      </svg>
      <Group gap={4}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Box key={star}>
            {star <= rating ? (
              <IconStarFilled
                size={20}
                style={{ fill: "url(#star-gradient)" }}
              />
            ) : (
              <IconStar size={20} style={{ stroke: "url(#star-gradient)" }} />
            )}
          </Box>
        ))}
      </Group>
    </>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Box
      style={{
        position: "relative",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: 16,
        padding: 32,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/testimonial-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <Box style={{ position: "relative", zIndex: 1, flex: 1 }}>
        <Stack gap="lg" style={{ height: "100%" }}>
          <QuoteIcon />

          <Text
            fz={18}
            c="rgba(255, 255, 255, 0.9)"
            style={{
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              flex: 1,
            }}
          >
            {testimonial.quote}
          </Text>

          <StarRating rating={testimonial.rating} />
        </Stack>
      </Box>

      <Group gap="md" mt="md" style={{ position: "relative", zIndex: 1 }}>
        <Avatar src={testimonial.avatar} size={50} radius="xl" />
        <Stack gap={0}>
          <Text fw={600} fz={16} c="#fff">
            {testimonial.name}
          </Text>
          <Text fz={14} c="rgba(255, 255, 255, 0.6)">
            {testimonial.role}
          </Text>
        </Stack>
      </Group>
    </Box>
  );
}
