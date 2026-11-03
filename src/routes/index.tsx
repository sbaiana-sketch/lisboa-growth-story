import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  Competencias,
  Experience,
  Header,
  Hero,
  Marquee,
  Projects,
} from "@/components/portfolio/SectionsTop";
import {
  Collaboration,
  Contact,
  Faq,
  Footer,
  Testimonials,
} from "@/components/portfolio/SectionsBottom";

const title = "Sandra Baiana | Marketing Digital, Comunicação e Estratégia";
const description =
  "Conheça o percurso profissional de Sandra Baiana, formadora e profissional de Marketing Digital, com experiência em estratégia, desenvolvimento web, SEO e comunicação digital.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 text-lime-foreground font-semibold"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <About />
        <Competencias />
        <Experience />
        <Projects />
        <Collaboration />
        <Marquee />
        <Contact />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
