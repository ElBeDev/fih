import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyInsights from "@/components/KeyInsights";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 pb-3 pt-6 lg:px-6">
          <div className="mx-auto grid max-w-340 gap-6 lg:grid-cols-5 lg:items-start">
            <div className="flex flex-col gap-6 lg:col-span-3">
              <Hero />
              <About />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-2">
              <KeyInsights />
              <Services />
            </div>
          </div>
        </section>

        <Industries />
        <Approach />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
