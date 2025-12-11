import Navbar from "@/components/Navbar";
import Hero from "@/sections/hero/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Process } from "@/sections/Process";
import { Projects } from "@/sections/Projects";
import { Automations } from "@/sections/Automations";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Automations />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
