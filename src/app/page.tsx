import GlobalBackground from "@/components/global-background";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Work />
        <Footer />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
