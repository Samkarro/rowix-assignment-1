import NexGenHeader from "@/common/elements/header";
import Contact from "@/common/elements/sections/contact.section";
import Faq from "@/common/elements/sections/faq.section";
import Hero from "@/common/elements/sections/hero.section";
import Projects from "@/common/elements/sections/projects.section";
import Reasons from "@/common/elements/sections/reasons.section";
import Services from "@/common/elements/sections/services.section";
import Testimonials from "@/common/elements/sections/testimonials";

export default function Home() {
  return (
    <div>
      <NexGenHeader />
      <main>
        <Hero />
        <Reasons />
        <Services />
        <Projects />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}
