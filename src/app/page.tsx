import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { PartnersSection } from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white w-full flex justify-center">
      <div className="max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <PartnersSection />
        <Portfolio />
        <Achievements />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
