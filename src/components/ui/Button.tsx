import {
  Button as MantineButton,
  type ButtonProps,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

export type Variant =
  | "primary"
  | "primary-outline"
  | "light-outline"
  | "gold-gradient-border"
  | "dark-gradient-border";

type Props = Omit<ButtonProps, "variant" | "color"> & {
  variant?: Variant;
};

export default function Button({
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const theme = useMantineTheme();
  const [isHovered, setIsHovered] = useState(false);

  const variants: Record<Variant, ButtonProps> = {
    primary: {
      variant: "filled",
      color: "primary",
    },
    "primary-outline": {
      variant: "outline",
      color: "primary",
    },
    "light-outline": {
      variant: "outline",
      color: "gray",
      styles: {
        root: {
          borderColor: "#FAF8F2",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
    "gold-gradient-border": {
      variant: "default",
      style: {
        background: isHovered
          ? `linear-gradient(${theme.other.gradients.accent}) padding-box, linear-gradient(${theme.other.gradients.goldBorder}) border-box`
          : `linear-gradient(${theme.colors.primary[5]}, ${theme.colors.primary[5]}) padding-box, linear-gradient(${theme.other.gradients.goldBorder}) border-box`,
        border: "1px solid transparent",
        color: isHovered ? "#fff" : "#000",
        transition: "background 0.2s ease, color 0.2s ease",
      },
    },
    "dark-gradient-border": {
      variant: "default",
      style: {
        background: `linear-gradient(${theme.colors.darkBrand[3]}, ${theme.colors.darkBrand[3]}) padding-box, linear-gradient(${theme.other.gradients.accent}) border-box`,
        border: "2px solid transparent",
        color: "#fff",
      },
      styles: {
        root: {
          transition: "background 0.2s ease",
          "&:hover": {
            background: `linear-gradient(${theme.other.gradients.accent}) padding-box, linear-gradient(${theme.other.gradients.accent}) border-box`,
          },
        },
      },
    },
  };

  const hoverProps =
    variant === "gold-gradient-border"
      ? {
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
        }
      : {};

  return (
    <MantineButton
      radius="xl"
      size={size}
      {...variants[variant]}
      {...hoverProps}
      {...props}
    />
  );
}
