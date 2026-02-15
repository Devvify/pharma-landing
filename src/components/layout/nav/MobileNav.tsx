import { useState } from "react";
import {
  Box,
  UnstyledButton,
  Text,
  Stack,
  Collapse,
  Drawer,
  Divider,
  Group,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { scrollToId, NAV } from "./navData";
import { InstagramIcon, FacebookIcon } from "../../ui/Icons";
import Button from "../../ui/Button";

function MobileNavItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <UnstyledButton
      onClick={() => {
        scrollToId(href);
        onClick?.();
      }}
      style={{ width: "100%", padding: "12px 0" }}
    >
      <Text size="lg" c="#FAF8F2">
        {label}
      </Text>
    </UnstyledButton>
  );
}

function MobileNavMenu({
  label,
  items,
  onItemClick,
}: {
  label: string;
  items: { label: string; href: string }[];
  onItemClick?: () => void;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <Box>
      <UnstyledButton
        onClick={() => setOpened(!opened)}
        style={{
          width: "100%",
          padding: "12px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text size="lg" c="#FAF8F2">
          {label}
        </Text>
        <IconChevronDown
          size={20}
          color="#FAF8F2"
          style={{
            transform: opened ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
          }}
        />
      </UnstyledButton>
      <Collapse in={opened}>
        <Stack gap="xs" pl="md" pt="xs">
          {items.map((item) => (
            <UnstyledButton
              key={item.label}
              onClick={() => {
                scrollToId(item.href);
                onItemClick?.();
              }}
              style={{ padding: "8px 0" }}
            >
              <Text size="md" c="rgba(255, 255, 255, 0.8)">
                {item.label}
              </Text>
            </UnstyledButton>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      aria-label={label}
      style={{
        color: "#FAF8F2",
        width: 34,
        height: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}

export function MobileDrawer({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size="80%"
      position="right"
      styles={{
        content: {
          background: "rgba(10, 14, 26, 0.98)",
          backdropFilter: "blur(20px)",
        },
        header: {
          background: "transparent",
          padding: "20px",
        },
        body: {
          padding: "0 20px 20px",
        },
        close: {
          color: "#FAF8F2",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
          },
        },
      }}
    >
      <Stack gap="md">
        {NAV.map((item) => {
          if ("type" in item && item.type === "menu") {
            return (
              <MobileNavMenu
                key={item.label}
                label={item.label}
                items={item.items}
                onItemClick={onClose}
              />
            );
          }

          return (
            <MobileNavItem
              key={item.label}
              label={item.label}
              href={(item as { href: string }).href}
              onClick={onClose}
            />
          );
        })}

        <Divider color="rgba(255, 255, 255, 0.1)" my="md" />

        <Group gap={16} justify="center">
          <SocialIcon label="Instagram">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon label="Facebook">
            <FacebookIcon />
          </SocialIcon>
        </Group>

        <Box mt="lg" style={{ display: "flex", justifyContent: "center" }}>
          <Button radius="xl" size="md" variant="gold-gradient-border">
            Sign Up
          </Button>
        </Box>
      </Stack>
    </Drawer>
  );
}
