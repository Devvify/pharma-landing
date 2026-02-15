import { useState } from "react";
import { ActionIcon, Box, Group, UnstyledButton, Burger } from "@mantine/core";

import logo from "../../assets/logo.svg";
import Button from "../ui/Button";
import { InstagramIcon, FacebookIcon, CartIcon } from "../ui/Icons";
import { NAV, scrollToId } from "./nav/navData";
import { NavLink } from "./nav/NavLink";
import { NavMenu } from "./nav/NavMenu";
import { MobileDrawer } from "./nav/MobileNav";

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <ActionIcon
      aria-label={label}
      variant="transparent"
      w={34}
      h={34}
      style={{
        color: "#FAF8F2",
        background: "transparent",
      }}
    >
      {children}
    </ActionIcon>
  );
}

export default function Navbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Box style={{ width: "100%", padding: 12 }}>
      <MobileDrawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      />

      <Box
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <UnstyledButton
          onClick={() => scrollToId("#home")}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Rizz Pharma"
            style={{
              height: 39,
              width: "auto",
              display: "block",
            }}
          />
        </UnstyledButton>

        {/* Mobile Menu Button */}
        <Group gap={12} hiddenFrom="md">
          <Button radius="xl" size="sm" variant="light-outline">
            Log In
          </Button>
          <ActionIcon
            aria-label="Cart"
            variant="transparent"
            radius={0}
            w={40}
            h={40}
            style={{
              color: "#FAF8F2",
              background: "transparent",
            }}
          >
            <CartIcon />
          </ActionIcon>
          <Burger
            opened={drawerOpened}
            onClick={() => setDrawerOpened(!drawerOpened)}
            color="#FAF8F2"
            size="sm"
          />
        </Group>

        {/* Desktop Navigation */}
        <Group gap={28} visibleFrom="md" style={{ alignItems: "center" }}>
          <Group gap={34} style={{ alignItems: "center" }}>
            {NAV.map((item) => {
              if ("type" in item && item.type === "menu") {
                return (
                  <NavMenu
                    key={item.label}
                    label={item.label}
                    items={item.items}
                  />
                );
              }

              return (
                <NavLink
                  key={item.label}
                  label={item.label}
                  href={(item as { href: string }).href}
                  active={item.label === "Home"}
                />
              );
            })}
          </Group>

          <Group gap={12} style={{ alignItems: "center" }}>
            <SocialIcon label="Instagram">
              <InstagramIcon />
            </SocialIcon>

            <SocialIcon label="Facebook">
              <FacebookIcon />
            </SocialIcon>
          </Group>
        </Group>
      </Box>

      {/* Desktop Actions */}
      <Box
        visibleFrom="md"
        style={{
          marginTop: 14,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Group gap={12} wrap="nowrap">
          <Button radius="xl" size="md" variant="gold-gradient-border">
            Sign Up
          </Button>

          <Button radius="xl" size="md" variant="light-outline">
            Log In
          </Button>

          <ActionIcon
            aria-label="Cart"
            variant="transparent"
            radius={0}
            w={40}
            h={40}
            style={{
              color: "#FAF8F2",
              background: "transparent",
            }}
          >
            <CartIcon />
          </ActionIcon>
        </Group>
      </Box>
    </Box>
  );
}
