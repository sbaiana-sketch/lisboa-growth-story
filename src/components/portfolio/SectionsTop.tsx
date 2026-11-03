import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Briefcase, GraduationCap, Menu, Megaphone, MonitorSmartphone, Sparkles, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { EDIT_MODE, externalProps, isFilled, isValidUrl, normalizeImageUrl } from "@/lib/links";
import { cn } from "@/lib/utils";
import { CloudImage } from "./CloudImage";
import { Eyebrow, Highlight, Logo, SectionTitle, pill, tag } from "./shared";

export const NAV = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "projectos", label: "Projectos" },
  { id: "experiencia", label: "Experiência" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-2 font-display font-bold text-foreground" aria-label="Início">
          <Logo className="shrink-0" />
          {siteConfig.name && <span className="truncate">{siteConfig.name}</span>}
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}
                  className={cn("rounded-full px-3.5 py-2 text-sm font-medium transition", active === n.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary")}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href="#contacto" className={cn(pill.lime, "hidden sm:inline-flex")}>Vamos conversar</a>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full bg-surface lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-movel" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movel" aria-label="Menu móvel" className="border-t border-border bg-background lg:hidden">
          <ul className="container-site flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={cn("block rounded-xl px-4 py-3 font-medium", active === n.id ? "bg-primary text-primary-foreground" : "text-foreground")}>{n.label}</a>
              </li>
            ))}
            <li className="mt-2"><a href="#contacto" onClick={() => setOpen(false)} className={cn(pill.lime, "w-full")}>Vamos conversar</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  const c = siteConfig;
  const hasHero = isValidUrl(normalizeImageUrl(c.images.hero));
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-12 md:pt-16">
      <div className="container-site relative text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5 text-lime-foreground" aria-hidden /> {c.heroTag}
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <Highlight text={c.heroTitle} words={c.heroHighlight} className="text-primary" />
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            <Highlight text={c.heroSubtitle} words={c.heroSubtitleHighlight} className="font-medium text-primary" />
          </p>
        </div>

        <div className="relative mx-auto mt-10 h-[340px] max-w-[520px] sm:h-[440px] md:h-[500px]">
          <div aria-hidden className="absolute bottom-0 left-1/2 h-[78%] w-[86%] -translate-x-1/2 rounded-t-full bg-surface" />
          <span aria-hidden className="animate-float-soft absolute top-10 left-2 hidden h-14 w-14 rounded-full border-2 border-dashed border-primary/30 sm:block" />
          <span aria-hidden className="animate-float-soft absolute top-24 right-4 h-5 w-5 rounded-full bg-lime" />
          <span aria-hidden className="absolute bottom-24 left-0 hidden text-3xl text-lime sm:block">✦</span>
          {(hasHero || EDIT_MODE) && (
            <div className="absolute inset-x-0 bottom-0 mx-auto h-full w-[80%]">
              <CloudImage src={c.images.hero} alt={c.name ? `Fotografia de ${c.name}` : "Fotografia profissional"} objectFit="contain" eager className="h-full w-full object-bottom" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-6 z-10 flex flex-wrap justify-center gap-3 px-4">
            <a href="#projectos" className={pill.brand}>Ver portefólio <ArrowRight className="h-4 w-4" aria-hidden /></a>
            <a href="#contacto" className={cn(pill.outline, "bg-background")}>Falar comigo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const row = siteConfig.marquee.map((m) => `${m} ✦ `).join("");
  return (
    <div className="overflow-hidden bg-lime py-4 text-lime-foreground" aria-label={siteConfig.marquee.join(", ")}>
      <div className="animate-marquee flex w-max whitespace-nowrap font-display text-lg font-semibold md:text-xl" aria-hidden>
        {[0, 1, 2, 3].map((i) => <span key={i} className="pr-2">{row}</span>)}
      </div>
    </div>
  );
}

const SERVICES = [
  { title: "Marketing Digital", text: "Estratégia e comunicação digital ajustadas aos objectivos de cada negócio.", Icon: Megaphone },
  { title: "Formação", text: "Aprendizagem prática para desenvolver competências de Marketing Digital.", Icon: GraduationCap },
  { title: "Websites & SEO", text: "Websites profissionais, optimizados para os motores de pesquisa e orientados para resultados.", Icon: MonitorSmartphone },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Serviços" title="O que faço" ghost="Serviços" tone="dark" />
          <a href="#contacto" className={pill.lime}>Pedir informação <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, text, Icon }, i) => (
            <li key={title} className={cn("flex min-h-[340px] flex-col items-center justify-center rounded-[999px] px-10 py-14 text-center transition hover:-translate-y-1 md:min-h-[400px]",
              i === 0 ? "bg-background text-foreground" : "bg-brand-light text-primary-foreground", i === 2 && "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-auto")}>
              <span className={cn("grid h-16 w-16 place-items-center rounded-2xl", i === 0 ? "bg-primary text-primary-foreground" : "bg-primary-foreground/15")}>
                <Icon className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-bold">{title}</h3>
              <p className={cn("mt-3 text-sm leading-relaxed", i === 0 ? "text-muted-foreground" : "text-primary-foreground/80")}>{text}</p>
              <span aria-hidden className="mt-6 h-1 w-10 rounded-full bg-lime" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  const c = siteConfig;
  const indicators = c.aboutIndicators.filter((i) => i.visible && isFilled(i.value));
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[4/3.4] w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground">
          <span aria-hidden className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-brand-light" />
          <span aria-hidden className="absolute top-8 right-8 h-6 w-6 rounded-full bg-lime" />
          {c.name && <span className="absolute top-1/2 left-4 origin-left -translate-y-1/2 -rotate-90 font-display text-sm font-semibold tracking-[0.3em] uppercase opacity-70">{c.name}</span>}
          <div className="relative flex h-full flex-col justify-end pl-6">
            {isFilled(c.yearsExperience) ? (
              <>
                <span className="font-display text-[9rem] leading-none font-bold md:text-[12rem]">{c.yearsExperience}</span>
                <span className="mt-2 text-lg font-medium">Anos de experiência</span>
              </>
            ) : (
              <span className="font-display text-4xl leading-tight font-bold md:text-5xl">Estratégia,<br />formação e<br /><span className="text-lime">comunicação.</span></span>
            )}
          </div>
        </div>
        <div className="relative">
          <SectionTitle eyebrow="Um pouco sobre mim" title={<>Quem está por detrás da <span className="text-primary">estratégia?</span></>} ghost="Sobre mim" />
          {isFilled(c.aboutText) ? (
            <p className="mt-6 leading-relaxed whitespace-pre-line text-muted-foreground">{c.aboutText}</p>
          ) : EDIT_MODE ? (
            <p className="mt-6 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">Texto "Sobre" por configurar (siteConfig.aboutText).</p>
          ) : null}
          {indicators.length > 0 && (
            <dl className="mt-8 flex flex-wrap gap-10">
              {indicators.map((i) => (
                <div key={i.label}><dt className="sr-only">{i.label}</dt><dd className="font-display text-4xl font-bold text-foreground">{i.value}</dd><dd className="text-sm text-muted-foreground">{i.label}</dd></div>
              ))}
            </dl>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href="#contacto" className={pill.brand}>Falar comigo <ArrowRight className="h-4 w-4" aria-hidden /></a>
            {isValidUrl(c.links.cvUrl) && <a href={c.links.cvUrl} {...externalProps} className={pill.outline}>Ver CV</a>}
            {isValidUrl(c.images.signature) && <img src={c.images.signature} alt={c.name ? `Assinatura de ${c.name}` : "Assinatura"} loading="lazy" className="h-14 w-auto" />}
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline({ title, Icon, items, empty }: { title: string; Icon: typeof Briefcase; items: { a: string; b: string; c: string; dates: string }[]; empty: string }) {
  return (
    <article className="rounded-[1.75rem] border border-border bg-background p-6 md:p-8">
      <h3 className="flex items-center gap-3 text-xl font-bold text-foreground">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"><Icon className="h-5 w-5" aria-hidden /></span>{title}
      </h3>
      {items.length ? (
        <ul className="mt-6 divide-y divide-border">
          {items.map((it, i) => (
            <li key={i} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4">
              <div className="min-w-0"><p className="font-semibold text-foreground">{it.a}</p><p className="text-sm text-primary">{it.b}</p>{it.c && <p className="mt-1 text-sm text-muted-foreground">{it.c}</p>}</div>
              {it.dates && <span className="h-fit rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">{it.dates}</span>}
            </li>
          ))}
        </ul>
      ) : <p className="mt-6 text-sm text-muted-foreground">{empty}</p>}
    </article>
  );
}

export function Experience() {
  const c = siteConfig;
  return (
    <section id="experiencia" className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionTitle eyebrow="Formação & Experiência" title={<>A minha <span className="text-primary">experiência</span> e formação</>} ghost="Experiência" center />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Timeline title="Formação" Icon={GraduationCap} empty={EDIT_MODE ? "Adicione entradas em siteConfig.education." : "Informação disponível brevemente."}
            items={c.education.map((e) => ({ a: e.institution, b: e.qualification, c: e.specialization, dates: e.dates }))} />
          <Timeline title="Experiência profissional" Icon={Briefcase} empty={EDIT_MODE ? "Adicione entradas em siteConfig.experience." : "Informação disponível brevemente."}
            items={c.experience.map((e) => ({ a: e.organization, b: e.role, c: e.responsibilities, dates: e.dates }))} />
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const list = siteConfig.projects.filter((p) => p.visible && (isFilled(p.title) || EDIT_MODE));
  return (
    <section id="projectos" className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Portefólio" title="Projectos em destaque" ghost="Projectos" tone="dark" subtitle="Trabalho desenvolvido, estratégias aplicadas e resultados." />
          {isValidUrl(siteConfig.links.portfolioUrl) && <a href={siteConfig.links.portfolioUrl} {...externalProps} className={pill.lime}>Ver todos <ArrowUpRight className="h-4 w-4" aria-hidden /></a>}
        </div>
        {list.length ? (
          <ul className="mt-14 grid gap-6 lg:grid-cols-2">
            {list.map((p, i) => (
              <li key={i} className="grid overflow-hidden rounded-[1.75rem] bg-brand-light text-primary-foreground sm:grid-cols-[45%_minmax(0,1fr)]">
                <div className="p-3 sm:pr-0">
                  <CloudImage src={p.imageUrl} alt={p.title || `Projecto ${i + 1}`} aspectRatio="4 / 3" objectFit="cover" className="h-full rounded-[1.25rem]" />
                </div>
                <div className="flex min-w-0 flex-col p-6">
                  {p.category && <span className="text-xs font-semibold tracking-[0.18em] text-lime uppercase">{p.category}</span>}
                  <h3 className="mt-2 text-xl font-bold">{p.title || "Título do projecto por configurar"}</h3>
                  {p.description && <p className="mt-2 text-sm text-primary-foreground/80">{p.description}</p>}
                  {p.tags.length > 0 && <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className={tag}>{t}</li>)}</ul>}
                  {isValidUrl(p.projectUrl) && (
                    <a href={p.projectUrl} {...externalProps} className={cn(pill.outlineLight, "mt-auto self-start pt-2.5")} style={{ marginTop: "1.25rem" }}>Ver projecto <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-primary-foreground/80">Novos projectos em breve.</p>
        )}
      </div>
    </section>
  );
}

export { Eyebrow };
