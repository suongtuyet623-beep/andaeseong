import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Videos } from "@/components/videos";
import { Press } from "@/components/press";
import { Connect } from "@/components/connect";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Videos />
        <Press />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
