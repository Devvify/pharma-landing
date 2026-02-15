import { Box, Stack, Title, useMantineTheme } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mantine/hooks";
import { getLandingCategories } from "../../api/landing";
import CategoryCard from "./CategoryCard";
import { getErrorMessage } from "../../api/client";

export default function CategoriesGrid() {
  const theme = useMantineTheme();
  const { data, error } = useQuery({
    queryKey: ["landing-categories"],
    queryFn: getLandingCategories,
  });

  const isDesktop = useMediaQuery("(min-width: 992px)");

  return (
    <Stack gap="lg" py={40}>
      <Title order={2} ta="center">
        Shop By{" "}
        <span
          style={{
            background: `linear-gradient(${theme.other.gradients.goldBorder})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Category
        </span>
      </Title>

      {error && (
        <div style={{ textAlign: "center", opacity: 0.8 }}>
          Failed to load categories: {getErrorMessage(error)}
        </div>
      )}

      {!!data?.length && (
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? "repeat(3, 370px)"
              : "repeat(2, 164px)",
            justifyContent: "center",
            gap: "36px",
          }}
        >
          {data.map((c, index) => {
            const isOdd = (index + 1) % 2 !== 0;
            const height = isDesktop ? (isOdd ? 450 : 376) : 202;
            const isMiddleColumn = (index - 1) % 3 === 0;
            const isSecondRowOrLater = index >= 4;
            const pullUp =
              isDesktop && isMiddleColumn && isSecondRowOrLater
                ? -(450 - 376)
                : 0;

            return (
              <Box
                key={c.CategoryId}
                style={{
                  width: isDesktop ? 370 : 164,
                  height,
                  transform: pullUp ? `translateY(${pullUp}px)` : undefined,
                }}
              >
                <CategoryCard item={c} />
              </Box>
            );
          })}
        </Box>
      )}
    </Stack>
  );
}
