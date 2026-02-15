import {
  ActionIcon,
  Box,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Anchor,
} from "@mantine/core";
import { IconSend, IconMail } from "@tabler/icons-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function FooterLink({ children }: { children: string }) {
  return (
    <Anchor
      href="#"
      underline="hover"
      style={{
        color: "#fff",
        fontSize: 16,
        display: "block",
        marginBottom: 6,
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </Anchor>
  );
}

export default function Footer() {
  return (
    <Box
      style={{
        background: "linear-gradient(180deg, #3D55CC 70%, #1F1F1F 100%)",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      <Container size="xl">
        <Grid gutter={{ base: 40, md: 100 }}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap={30} align="center" style={{ height: "100%" }}>
              <Box
                style={{
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 20,
                  padding: 12,
                }}
              >
                <Stack gap="md" p={40}>
                  <Text
                    fz={43}
                    fw={300}
                    c="#fff"
                    style={{ lineHeight: 1.2, textAlign: "center" }}
                  >
                    Let's Stay In Touch
                  </Text>

                  <Text
                    fz={16}
                    c="#fff"
                    style={{ lineHeight: 1.2, textAlign: "center" }}
                  >
                    Keep up to date with our latest news & special offers.
                  </Text>

                  <Box style={{ position: "relative" }}>
                    <TextInput
                      placeholder="enter your email"
                      radius="md"
                      styles={{
                        input: {
                          background: "transparent",
                          border: "1px solid rgb(255, 255, 255)",
                          height: 50,
                          paddingRight: 55,
                          color: "#fff",
                        },
                      }}
                    />
                    <ActionIcon
                      size={36}
                      radius="md"
                      style={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "transparent",
                      }}
                    >
                      <IconSend size={18} />
                    </ActionIcon>
                  </Box>
                </Stack>
              </Box>

              <Box hiddenFrom="md"></Box>
              <Box visibleFrom="md">
                <img
                  src="/images/hipaa-compliant.png"
                  alt="HIPAA"
                  style={{ width: 186 }}
                />
              </Box>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Grid gutter={{ base: 20, md: 40 }}>
              <Grid.Col span={{ base: 6, sm: 6 }}>
                <Stack gap={20}>
                  <Text fw={400} fz={12} c="#fff" mb="xs">
                    Quick Links
                  </Text>
                  <FooterLink>Erectile Dysfunction</FooterLink>
                  <FooterLink>Weight Loss</FooterLink>
                  <FooterLink>Men's Hair Loss</FooterLink>
                </Stack>

                <Stack gap={20} mt={40}>
                  <Text fw={400} fz={12} c="#fff" mb="xs">
                    Contact Info
                  </Text>
                  <Group gap={8}>
                    <IconMail size={16} color="#fff" />
                    <Text fz={14} c="#fff">
                      hello@rizzpharma.com
                    </Text>
                  </Group>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 6, sm: 6 }}>
                <Stack gap={20}>
                  <Text fw={400} fz={12} c="#fff" mb="xs">
                    Our Company
                  </Text>
                  <FooterLink>HIPAA Notice</FooterLink>
                  <FooterLink>Privacy Policy</FooterLink>
                  <FooterLink>Return & Refund Policy</FooterLink>
                  <FooterLink>Terms Of Use</FooterLink>
                  <FooterLink>CCPA Opt-Out</FooterLink>
                  <FooterLink>Opt-Out Preferences</FooterLink>
                </Stack>
              </Grid.Col>

              <Grid.Col span={12}>
                <Stack
                  gap={16}
                  mt={20}
                  align="center"
                  style={{ width: "100%" }}
                  hiddenFrom="md"
                >
                  <Box>
                    <img
                      src="/images/hipaa-compliant.png"
                      alt="HIPAA"
                      style={{ width: 186 }}
                    />
                  </Box>

                  <Group gap={10} justify="center">
                    <ActionIcon
                      size={38}
                      radius="xl"
                      variant="filled"
                      style={{
                        background: "rgba(255,255,255,0.14)",
                      }}
                    >
                      <FaFacebook size={18} color="#fff" />
                    </ActionIcon>

                    <ActionIcon
                      size={38}
                      radius="xl"
                      variant="filled"
                      style={{
                        background: "rgba(255,255,255,0.14)",
                      }}
                    >
                      <FaInstagram size={18} color="#fff" />
                    </ActionIcon>
                  </Group>

                  <Stack gap={10} align="center" hiddenFrom="md">
                    <img
                      src="/images/legitscript-certified.png"
                      alt="LegitScript Certified"
                      style={{
                        height: 72,
                        width: "auto",
                      }}
                    />

                    <Text
                      fz={11}
                      c="rgba(255,255,255,0.7)"
                      ta="center"
                      style={{
                        lineHeight: 1.4,
                      }}
                    >
                      Copyright © 2024 Rizz Pharma All Right Reserved - Built by
                      Business Web Social
                    </Text>
                  </Stack>
                </Stack>

                <Stack
                  gap={16}
                  mt={20}
                  align="flex-start"
                  style={{ width: "100%" }}
                  visibleFrom="md"
                >
                  <Group gap={10} justify="flex-start">
                    <ActionIcon
                      size={38}
                      radius="xl"
                      variant="filled"
                      style={{
                        background: "rgba(255,255,255,0.14)",
                      }}
                    >
                      <FaFacebook size={18} color="#fff" />
                    </ActionIcon>

                    <ActionIcon
                      size={38}
                      radius="xl"
                      variant="filled"
                      style={{
                        background: "rgba(255,255,255,0.14)",
                      }}
                    >
                      <FaInstagram size={18} color="#fff" />
                    </ActionIcon>
                  </Group>

                  <Stack gap={10} align="flex-start">
                    <Group gap={10} align="center">
                      <img
                        src="/images/legitscript-certified.png"
                        alt="LegitScript Certified"
                        style={{
                          height: 72,
                          width: "auto",
                        }}
                      />

                      <Text
                        fz={11}
                        c="rgba(255,255,255,0.7)"
                        style={{
                          lineHeight: 1.4,
                        }}
                      >
                        Copyright © 2024 Rizz Pharma All Right Reserved - Built
                        by Business Web Social
                      </Text>
                    </Group>
                  </Stack>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>

      <Box
        mt={60}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          paddingBottom: 30,
        }}
      >
        <img
          src="/images/rizz-pharma-watermark.png"
          alt="Rizz Pharma"
          style={{
            width: "95%",
            maxWidth: 1500,
            zIndex: 1,
            mixBlendMode: "color-dodge",
          }}
        />
      </Box>
    </Box>
  );
}
