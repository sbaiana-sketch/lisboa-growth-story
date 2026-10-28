import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/siteConfig";
import { About, Experience, Header, Hero, Marquee, Projects, Services } from "@/components/portfolio/SectionsTop";
import { Blog, Collaboration, Contact, Faq, Footer, Testimonials } from "@/components/portfolio/SectionsBottom";

const title = `${siteConfig.name ? siteConfig.name + " — " : ""}Marketing Digital, Formação e Consultoria`;
const description = siteConfig.heroSubtitle;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2">Saltar para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Experience />
        <Projects />
        <Collaboration />
        <Marquee />
        <Contact />
        <Testimonials />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
