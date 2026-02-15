import { createTheme, type MantineColorsTuple, TextInput } from "@mantine/core";

const primary: MantineColorsTuple = [
  "#FFF8E8",
  "#FBECCB",
  "#F6DEA8",
  "#F1CF85",
  "#EBC062",
  "#E1C06E",
  "#D4A74F",
  "#C1842D",
  "#A66A22",
  "#7F4E18",
];

const darkBrand: MantineColorsTuple = [
  "#2E3038",
  "#292B33",
  "#25272F",
  "#22242D",
  "#1D1F27",
  "#181A20",
  "#14161C",
  "#101217",
  "#0C0D12",
  "#08090C",
];

export const theme = createTheme({
  defaultRadius: "xl",
  primaryColor: "primary",
  colors: { primary, darkBrand },
  white: "#FFFFFF",
  black: "#000000",
  fontFamily:
    "'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontFamilyMonospace: "'Courier New', monospace",

  headings: {
    fontFamily: "Impact, 'Neue Montreal', sans-serif",
    fontWeight: "400",
    sizes: {
      h1: {
        fontSize: "80px",
        lineHeight: "1.1",
        fontWeight: "400",
      },
      h2: {
        fontSize: "48px",
        lineHeight: "1.2",
        fontWeight: "400",
      },
      h3: {
        fontSize: "40px",
        lineHeight: "1.2",
        fontWeight: "400",
      },
      h4: {
        fontSize: "32px",
        lineHeight: "1.3",
        fontWeight: "400",
      },
      h5: {
        fontSize: "24px",
        lineHeight: "1.3",
        fontWeight: "400",
      },
      h6: {
        fontSize: "20px",
        lineHeight: "1.4",
        fontWeight: "400",
      },
    },
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },

  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.5",
    lg: "1.55",
    xl: "1.6",
  },

  other: {
    layoutBg: "var(--mantine-color-darkBrand-3)",
    cardBg: "rgba(255,255,255,0.04)",
    cardBorder: "rgba(255,255,255,0.10)",

    gradients: {
      goldBorder: "180deg, #C1842D 0%, #ECC974 100%",
      accent: "95.12deg, #DB5095 7.77%, #1945E8 95.93%",
      darkGradient: "180deg, rgba(108, 34, 29, 0.3) 0%, rgba(149, 65, 57, 0.3) 100%",
      secondaryGradient: "268.79deg, #A75356 1.04%, #D78C6C 98.57%"
    },
  },

  components: {
    TextInput: TextInput.extend({
      styles: {
        input: {
          '&::placeholder': {
            color: '#fff',
            opacity: 1,
          },
        },
      },
    }),
  },
});
