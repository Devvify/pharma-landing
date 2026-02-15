import { Group, ActionIcon } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useMantineTheme } from "@mantine/core";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const theme = useMantineTheme();

  if (totalPages <= 1) return null;

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePrevious = () => {
    if (canGoPrevious) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Group justify="center" gap="md" mt="xl">
      <ActionIcon
        onClick={handlePrevious}
        disabled={!canGoPrevious}
        size={60}
        radius="xl"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
          background: canGoPrevious
            ? `linear-gradient(${theme.other.gradients.goldBorder})`
            : "transparent",
          color: canGoPrevious ? "#000" : "rgba(255, 255, 255, 0.3)",
          cursor: canGoPrevious ? "pointer" : "not-allowed",
          transition: "opacity 0.2s ease",
        }}
      >
        <IconArrowLeft size={32} />
      </ActionIcon>

      <ActionIcon
        onClick={handleNext}
        disabled={!canGoNext}
        size={60}
        radius="xl"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
          background: canGoNext
            ? `linear-gradient(${theme.other.gradients.goldBorder})`
            : "transparent",
          color: canGoNext ? "#000" : "rgba(255, 255, 255, 0.3)",
          cursor: canGoNext ? "pointer" : "not-allowed",
          transition: "opacity 0.2s ease",
        }}
      >
        <IconArrowRight size={32} />
      </ActionIcon>
    </Group>
  );
}