import { useState } from "react";
import { Box, Group, Menu, UnstyledButton, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { scrollToId } from "./navData";

export function NavMenu({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      width={220}
      position="bottom-start"
      withinPortal
      opened={opened}
      onChange={setOpened}
    >
      <Menu.Target>
        <UnstyledButton className="nav-link" style={{ position: "relative" }}>
          <Group gap={6}>
            <Text className="typo-nav" c="#FAF8F2">
              {label}
            </Text>

            <IconChevronDown
              size={32}
              stroke={2.5}
              color="#FAF8F2"
              style={{
                marginTop: 2,
                transform: opened ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 200ms ease",
              }}
            />
          </Group>

          <Box
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -10,
              margin: "0 auto",
              width: opened ? 34 : 0,
              height: 2,
              background: "rgba(255,255,255,0.9)",
              borderRadius: 1,
              transition: "width 140ms ease",
            }}
          />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown
        style={{
          background: "rgba(15, 18, 28, 0.92)",
          border: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(10px)",
          borderRadius: 8,
          padding: "8px 8px",
        }}
      >
        {items.map((it) => (
          <Menu.Item
            key={it.label}
            onClick={() => scrollToId(it.href)}
            style={{ color: "#FAF8F2", borderRadius: 4, padding: "10px 16px" }}
          >
            {it.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
