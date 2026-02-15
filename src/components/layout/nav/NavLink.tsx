import { Box, UnstyledButton, Text } from "@mantine/core";
import { scrollToId } from "./navData";

export function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <UnstyledButton
      onClick={(e) => {
        e.preventDefault();
        scrollToId(href);
      }}
      className="nav-link"
      style={{ position: "relative" }}
    >
      <Text className="typo-nav" c="#FAF8F2">
        {label}
      </Text>

      <Box
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -10,
          margin: "0 auto",
          width: active ? 34 : 0,
          height: 2,
          background: "rgba(255,255,255,0.9)",
          borderRadius: 2,
          transition: "width 140ms ease",
        }}
      />
    </UnstyledButton>
  );
}
