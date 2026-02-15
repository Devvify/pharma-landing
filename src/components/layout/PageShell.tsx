import { Box, Container } from '@mantine/core';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import BackgroundLayer from './BackgroundLayer';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageShell({
  children,
}: {
  children: ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BackgroundLayer>
      <Box
        component="header"
        pt={{ base: 12, md: 30 }}
        pb={{ base: 12, md: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          pointerEvents: 'none',
          background: scrolled ? 'rgba(10, 14, 26, 0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 200ms ease, backdrop-filter 200ms ease',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }}
      >
        <Box style={{ pointerEvents: 'auto' }}>
          <Container size="xl" px={{ base: 16, sm: 20, md: 24 }}>
            <Box h={{ base: 60, md: 110 }} display="flex" style={{ alignItems: 'center' }}>
              <Navbar />
            </Box>
          </Container>
        </Box>
      </Box>

      <Box component="main" style={{ paddingTop: 0 }}>
        {children}
      </Box>

      <Footer />
    </BackgroundLayer>
  );
}
