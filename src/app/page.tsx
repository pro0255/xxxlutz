import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { Stats } from "@/components/stats";
import { CurrentStatus } from "@/components/current-status";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Timeline />
      <CurrentStatus />
      <Footer />
    </>
  );
}
