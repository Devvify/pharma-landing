import { Box, Group, Title } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TESTIMONIALS } from "../../static-const";
import { TestimonialCard } from "./TestimonialCard";

export default function TestimonialsSection() {
  const theme = useMantineTheme();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      dragFree: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a1d2e 0%, #0f1419 100%)",
        padding: "100px 20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Eclipse effects */}
      <Box
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(49, 65, 140, 0.3) 0%, rgba(49, 65, 140, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          top: 100,
          left: -150,
          background:
            "radial-gradient(circle, rgba(49, 65, 140, 0.25) 0%, rgba(49, 65, 140, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          top: -100,
          right: -200,
          background:
            "radial-gradient(circle, rgba(49, 65, 140, 0.3) 0%, rgba(49, 65, 140, 0) 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Title */}
        <Title order={2} ta="center" mb={60}>
          Hear What{" "}
          <span
            style={{
              background: `linear-gradient(${theme.other.gradients.goldBorder})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Rizz
          </span>{" "}
          Patients Have To Say
        </Title>

        {/* Carousel */}
        <Box style={{ overflow: "hidden" }} ref={emblaRef}>
          <Box
            style={{
              display: "flex",
              marginBottom: 40,
              marginLeft: "calc(var(--slide-spacing) * -1)",
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <Box
                key={testimonial.id}
                className="testimonial-slide"
                style={{
                  minWidth: 0,
                  paddingLeft: "var(--slide-spacing)",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Pagination Dots */}
        <Group justify="center" gap="sm">
          {Array.from({ length: Math.ceil(TESTIMONIALS.length / 4) }).map(
            (_, index) => (
              <Box
                key={index}
                onClick={() => scrollTo(index * 4)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background:
                    Math.floor(selectedIndex / 4) === index
                      ? "#fff"
                      : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ),
          )}
        </Group>
      </Box>
    </Box>
  );
}
