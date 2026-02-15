import { Box, Container, Grid, Stack, Title } from "@mantine/core";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <Box pt={{ base: 0, md: 170 }} pb={18} className="hero-section">
      <Container size="xl" style={{ width: "100%" }}>
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg" align="center" hiddenFrom="md" pb={40}>
              <Title
                order={1}
                className="headline-1"
                c={"white"}
                ta="center"
                fz={{ base: 32, sm: 40 }}
              >
                Prescription
                <br />
                Treatments For Your
                <br />
                <span style={{ color: "#d7b35a" }}>Health Goals</span>
              </Title>

              <Box>
                <Button size="md" variant="dark-gradient-border">
                  Find My Treatment
                </Button>
              </Box>
            </Stack>

            <Stack gap="lg" align="flex-start" visibleFrom="md">
              <Title
                order={1}
                className="headline-1"
                c={"white"}
                ta="left"
                fz={{ md: 48, lg: 80 }}
              >
                Prescription
                <br />
                Treatments For
                <br />
                Your
                <br />
                <span style={{ color: "#d7b35a" }}>Health Goals</span>
              </Title>

              <Box>
                <Button size="xl" variant="dark-gradient-border">
                  Find My Treatment
                </Button>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
