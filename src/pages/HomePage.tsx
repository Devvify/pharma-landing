import PageShell from "../components/layout/PageShell";
import FullBleed from "../components/layout/FullBleed";
import MainContainer from "../components/layout/MainContainer";
import ValueStrip from "../components/homepage/ValueStrip";
import CategoriesGrid from "../components/homepage/CategoriesGrid";
import ProductsSection from "../components/homepage/ProductsSection";
import OnlineConvenientSection from "../components/homepage/OnlineConvenientSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import Home from "../components/homepage/Home";

export default function LandingPage() {
  return (
    <PageShell>
      <FullBleed>
        <MainContainer>
          <Home />
          <CategoriesGrid />
        </MainContainer>
      </FullBleed>

      <FullBleed>
        <ValueStrip />
      </FullBleed>

      <MainContainer>
        <ProductsSection />
      </MainContainer>
      <FullBleed>
        <OnlineConvenientSection />
      </FullBleed>
      <FullBleed>
        <TestimonialsSection />
      </FullBleed>
    </PageShell>
  );
}
