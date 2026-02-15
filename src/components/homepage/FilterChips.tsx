import { Box, UnstyledButton, Group } from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

export interface ChipOption {
  id: string;
  label: string;
}

interface FilterChipsProps {
  options: ChipOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  showNavigation?: boolean;
}

export default function FilterChips({
  options,
  defaultValue,
  onChange,
  showNavigation = true,
}: FilterChipsProps) {
  const [activeChip, setActiveChip] = useState(defaultValue || options[0]?.id);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [needsNavigation, setNeedsNavigation] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const hasOverflow = scrollWidth > clientWidth;

      setNeedsNavigation(hasOverflow);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        scrollElement.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [options]);

  const handleChipChange = (chipId: string) => {
    setActiveChip(chipId);
    onChange?.(chipId);
  };

  const handleScrollLeft = () => {
    if (scrollRef.current && canScrollLeft) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current && canScrollRight) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      {showNavigation && needsNavigation && (
        <UnstyledButton
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: canScrollLeft ? "#fff" : "rgba(255, 255, 255, 0.3)",
            cursor: canScrollLeft ? "pointer" : "not-allowed",
            flexShrink: 0,
            transition: "all 0.2s ease",
            opacity: canScrollLeft ? 1 : 0.5,
          }}
        >
          <IconChevronLeft size={20} />
        </UnstyledButton>
      )}

      <Box
        ref={scrollRef}
        style={{
          flex: showNavigation && needsNavigation ? 1 : "0 1 auto",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Group gap="md" wrap="nowrap" py="md" justify="center">
          {options.map((option) => {
            const isActive = activeChip === option.id;

            return (
              <UnstyledButton
                key={option.id}
                onClick={() => handleChipChange(option.id)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "999px",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(255, 255, 255, 0.2)",
                  background: isActive
                    ? "var(--mantine-color-primary-5)"
                    : "transparent",
                  color: isActive ? "#000" : "#fff",
                  fontSize: "16px",
                  fontWeight: isActive ? 500 : 400,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {option.label}
              </UnstyledButton>
            );
          })}
        </Group>
      </Box>

      {showNavigation && needsNavigation && (
        <UnstyledButton
          onClick={handleScrollRight}
          disabled={!canScrollRight}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: canScrollRight ? "#fff" : "rgba(255, 255, 255, 0.3)",
            cursor: canScrollRight ? "pointer" : "not-allowed",
            flexShrink: 0,
            transition: "all 0.2s ease",
            opacity: canScrollRight ? 1 : 0.5,
          }}
        >
          <IconChevronRight size={20} />
        </UnstyledButton>
      )}
    </Box>
  );
}
