import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

export default function BackgroundLayer({ children }: { children: ReactNode }) {
  return (
    <Box
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      {/* Mobile background image */}
      <Box
        hiddenFrom="md"
        style={{
          width: "100%",
          height: 950,
          position: "absolute",
          backgroundImage: 'url(/images/hero-bg-mobile.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Desktop background image */}
      <Box
        visibleFrom="md"
        style={{
          width: "100vw",
          height: 1350,
          position: "absolute",
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Second background image */}
      <Box
        style={{
          width: '100%',
          top:1221,
          height: '2524px',
          position: "absolute",
          backgroundImage: 'url(/images/bg_artwork.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Box
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}