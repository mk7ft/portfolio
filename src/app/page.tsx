import GlobalBackground from "@/components/global-background";
import Hero from "@/components/hero";
import StoryEntrepreneur from "@/components/story-entrepreneur";
import StoryConsultant from "@/components/story-consultant";
import StoryOperator from "@/components/story-operator";
import StoryUSF from "@/components/story-usf";
import Footer from "@/components/footer";
import ChapterArrows from "@/components/chapter-arrows";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      {/* Persistent animated background — fixed, z-0, behind everything */}
      <GlobalBackground />

      {/* All content layers above the background */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <StoryEntrepreneur />
        <StoryConsultant />
        <StoryOperator />
        <StoryUSF />
        <Footer />
      </main>

        <ChapterArrows />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }
