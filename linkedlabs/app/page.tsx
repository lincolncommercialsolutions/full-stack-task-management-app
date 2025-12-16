import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Services />
      <Industries />
      <CTA />
      <Footer />
    </main>
  );
}