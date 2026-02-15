import { useMemo, useState } from "react";
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getLandingProducts, getLandingCategories } from "../../api/landing";
import type { LandingProductsGroup, LandingProduct } from "../../api/types";
import ProductCard from "./ProductCard";
import { getErrorMessage } from "../../api/client";
import FilterChips, { type ChipOption } from "./FilterChips";
import Pagination from "../ui/Pagination";

type FilterKey = "all" | "best" | string;

const ITEMS_PER_PAGE = 8;

function flatten(groups: LandingProductsGroup[]): LandingProduct[] {
  return groups.flatMap((g) => g.Products ?? []);
}

export default function ProductsSection() {
  const {
    data: productsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["landing-products"],
    queryFn: getLandingProducts,
  });

  const { data: categoriesData } = useQuery({
    queryKey: ["landing-categories"],
    queryFn: getLandingCategories,
  });

  const [active, setActive] = useState<FilterKey>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useMantineTheme();

  const allProducts = useMemo(
    () => (productsData ? flatten(productsData) : []),
    [productsData],
  );

  const chipOptions = useMemo((): ChipOption[] => {
    const base: ChipOption[] = [{ id: "all", label: "All" }];

    if (!categoriesData) return base;

    const categoryChips = categoriesData.map((cat) => ({
      id: String(cat.CategoryId),
      label: cat.Category,
    }));

    return [...base, ...categoryChips];
  }, [categoriesData]);

  const filteredProducts = useMemo(() => {
    if (!productsData) return [];

    if (active === "all") return allProducts;

    const filtered = productsData.filter(
      (g) => String(g.CategoryId) === active,
    );
    return flatten(filtered);
  }, [productsData, active, allProducts]);

  const handleFilterChange = (value: string) => {
    setActive(value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "50px 0",
      }}
    >
      <Stack
        gap="lg"
        style={{ width: "100%" }}
        py={50}
        px={{ base: 20, md: 0 }}
      >
        <Title order={2} ta="center">
          Solutions for Your{" "}
          <span
            style={{
              background: `linear-gradient(${theme.other.gradients.goldBorder})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Health Goals
          </span>
        </Title>

        <Stack gap="lg">
          <FilterChips
            options={chipOptions}
            defaultValue="all"
            onChange={handleFilterChange}
            showNavigation={chipOptions.length > 3}
          />

          {isLoading && (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
              {Array.from({ length: 8 }).map((_, i) => (
                <Box
                  key={i}
                  style={{
                    height: 380,
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />
              ))}
            </SimpleGrid>
          )}

          {error && (
            <Text ta="center" c="dimmed">
              Failed to load products: {getErrorMessage(error)}
            </Text>
          )}

          {!!currentProducts.length && (
            <>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
                {currentProducts.map((p) => (
                  <ProductCard key={p.ProductId} item={p} />
                ))}
              </SimpleGrid>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}

          {!isLoading && !error && filteredProducts.length === 0 && (
            <Text ta="center" c="dimmed" py="xl">
              No products found in this category.
            </Text>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
