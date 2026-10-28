import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Clock, Loader2, Mail, MapPin, MessageCircle, Phone, Plus, Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { EDIT_MODE, externalProps, isFilled, isValidUrl, mailto, tel, whatsappUrl } from "@/lib/links";
import { cn } from "@/lib/utils";
import { CloudImage } from "./CloudImage";
import { Logo, SectionTitle, SocialLinks, pill, tag } from "./shared";
import { NAV } from "./SectionsTop";

export function Collaboration() {
  return (
    <section id="colaboracao" className="bg-background py-20 md:py-28">
      <div className="container-site">
        <SectionTitle eyebrow="Colaboração" title={<>Como podemos <span className="text-primary">trabalhar juntos?</span></>} ghost="Colaboração" center />
        <ul className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {siteConfig.collaboration.map((m, i) => {
            const featured = i === 1;
            const href = isValidUrl(m.ctaUrl) ? m.ctaUrl : "#contacto";
            return (
              <li key={m.title} className={cn("flex flex-col rounded-[1.75rem] p-8", featured ? "bg-primary text-primary-foreground md:-my-4 md:py-12" : "border border-border bg-background text-foreground")}>
                <h3 className="text-2xl font-bold">{m.title}</h3>
                <p className={cn("mt-3 text-sm", featured ? "text-primary-foreground/80" : "text-muted-foreground")}>{m.description}</p>
                <ul className="mt-6 space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground"><Check className="h-3.5 w-3.5" aria-hidden /></span>{p}
                    </li>
                  ))}
                </ul>
                <a href={href} {...(isValidUrl(m.ctaUrl) ? externalProps : {})} className={cn(featured ? pill.lime : pill.brand, "mt-8 self-start")}>{m.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden /></a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

type Status = "idle" | "loading" | "success" | "error";
const TYPES = ["Marketing Digital", "Formação", "Website e SEO", "Consultoria", "Outro"];

function ContactForm() {
  const endpoint = siteConfig.contact.formEndpoint;
  const ready = isValidUrl(endpoint);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, String(v).trim()]));
    const errs: Record<string, string> = {};
    if (!data.nome || data.nome.length > 100) errs.nome = "Indica o teu nome (máx. 100 caracteres).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "") || data.email.length > 255) errs.email = "Indica um e-mail válido.";
    if (!data.assunto || data.assunto.length > 150) errs.assunto = "Indica o assunto.";
    if (!TYPES.includes(data.tipo)) errs.tipo = "Escolhe o tipo de pedido.";
    if (!data.mensagem || data.mensagem.length > 2000) errs.mensagem = "Escreve a mensagem (máx. 2000 caracteres).";
    setErrors(errs);
    if (Object.keys(errs).length || !ready) return;
    setStatus("loading");
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("success");
      e.currentTarget?.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-lime focus:outline-none";
  const label = "mb-1.5 block text-sm font-medium text-primary-foreground";
  const err = (k: string) => errors[k] && <p id={`${k}-erro`} className="mt-1 text-xs text-lime">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-[1.75rem] bg-brand-dark p-6 md:p-8 sm:grid-cols-2">
      <div><label htmlFor="nome" className={label}>Nome</label><input id="nome" name="nome" autoComplete="name" maxLength={100} className={field} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-erro" : undefined} />{err("nome")}</div>
      <div><label htmlFor="email" className={label}>E-mail</label><input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-erro" : undefined} />{err("email")}</div>
      <div><label htmlFor="assunto" className={label}>Assunto</label><input id="assunto" name="assunto" maxLength={150} className={field} aria-invalid={!!errors.assunto} />{err("assunto")}</div>
      <div><label htmlFor="tipo" className={label}>Tipo de pedido</label>
        <select id="tipo" name="tipo" defaultValue="" className={cn(field, "[&>option]:text-foreground")} aria-invalid={!!errors.tipo}>
          <option value="" disabled>Seleccionar…</option>{TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>{err("tipo")}</div>
      <div className="sm:col-span-2"><label htmlFor="mensagem" className={label}>Mensagem</label><textarea id="mensagem" name="mensagem" rows={5} maxLength={2000} className={field} aria-invalid={!!errors.mensagem} />{err("mensagem")}</div>
      <div className="flex flex-col gap-3 sm:col-span-2" aria-live="polite">
        <button type="submit" disabled={!ready || status === "loading"} className={cn(pill.lime, "self-start disabled:cursor-not-allowed disabled:opacity-60")}>
          {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> A enviar…</> : <>Enviar mensagem <ArrowRight className="h-4 w-4" aria-hidden /></>}
        </button>
        {!ready && <p className="text-sm text-primary-foreground/70">O envio pelo formulário ainda não está activo. Utiliza os contactos ao lado.</p>}
        {status === "success" && <p className="text-sm text-lime">Mensagem enviada. Obrigada pelo contacto!</p>}
        {status === "error" && <p className="text-sm text-lime">Não foi possível enviar a mensagem. Tenta novamente ou utiliza os contactos ao lado.</p>}
      </div>
    </form>
  );
}

export function Contact() {
  const c = siteConfig.contact;
  const items = [
    { href: mailto(c.email), label: c.email, Icon: Mail, ext: false },
    { href: tel(c.phone), label: c.phone, Icon: Phone, ext: false },
    { href: whatsappUrl(c.whatsapp), label: "Conversar no WhatsApp", Icon: MessageCircle, ext: true },
  ].filter((i) => i.href);
  const loc = c.location || siteConfig.location;
  return (
    <section id="contacto" className="bg-primary py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <SectionTitle eyebrow="Contacto" tone="dark" ghost="Contacto" title={<>Vamos <span className="text-lime">conversar</span> e criar algo relevante.</>} />
          <p className="mt-5 text-primary-foreground/80">Partilha comigo o teu projecto, a tua necessidade de formação ou o desafio digital que pretendes resolver.</p>
          {(items.length > 0 || isFilled(loc)) && (
            <ul className="mt-8 space-y-3">
              {items.map(({ href, label, Icon, ext }) => (
                <li key={href!}><a href={href!} {...(ext ? externalProps : {})} className="flex min-h-11 items-center gap-3 text-primary-foreground hover:text-lime">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground"><Icon className="h-5 w-5" aria-hidden /></span><span className="break-all">{label}</span></a></li>
              ))}
              {isFilled(loc) && <li className="flex items-center gap-3 text-primary-foreground"><span className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10"><MapPin className="h-5 w-5" aria-hidden /></span>{loc}</li>}
            </ul>
          )}
          <div className="mt-8"><SocialLinks tone="dark" /></div>
        </div>
        {c.contactFormEnabled && <div id="formulario"><ContactForm /></div>}
      </div>
    </section>
  );
}

export function Testimonials() {
  const list = siteConfig.testimonials.filter((t) => t.visible && isFilled(t.text) && isFilled(t.name));
  const [i, setI] = useState(0);
  if (!list.length) return null;
  const t = list[i % list.length]!;
  const go = (d: number) => setI((v) => (v + d + list.length) % list.length);
  return (
    <section id="testemunhos" className="bg-background py-20 md:py-28">
      <div className="container-site">
        <SectionTitle eyebrow="Testemunhos" title={<>O que dizem sobre o <span className="text-primary">meu trabalho</span></>} ghost="Testemunhos" center />
        <div className="relative mx-auto mt-14 max-w-4xl">
          <figure className="grid items-center gap-8 rounded-[1.75rem] bg-surface p-8 md:grid-cols-[200px_minmax(0,1fr)] md:p-10" aria-live="polite">
            <div className="relative mx-auto h-40 w-40 md:h-48 md:w-48">
              <span aria-hidden className="absolute -top-2 -left-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-lime text-lime-foreground"><Quote className="h-5 w-5" /></span>
              <CloudImage src={t.imageUrl} alt={`Fotografia de ${t.name}`} aspectRatio="1 / 1" objectFit="cover" className="rounded-full" />
            </div>
            <div>
              <blockquote className="text-lg leading-relaxed text-foreground">“{t.text}”</blockquote>
              <figcaption className="mt-5"><p className="font-display font-bold text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{[t.role, t.organization].filter(Boolean).join(" · ")}</p></figcaption>
            </div>
          </figure>
          {list.length > 1 && (
            <div className="mt-6 flex justify-center gap-3">
              <button type="button" onClick={() => go(-1)} aria-label="Testemunho anterior" className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"><ChevronLeft className="h-5 w-5" /></button>
              <button type="button" onClick={() => go(1)} aria-label="Testemunho seguinte" className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"><ChevronRight className="h-5 w-5" /></button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const list = siteConfig.blog.filter((b) => b.visible && (isFilled(b.title) || EDIT_MODE));
  return (
    <section id="blog" className="bg-background py-20 md:py-28">
      <div className="container-site">
        <SectionTitle eyebrow="Blog" title={<>Do meu <span className="text-primary">blog</span></>} ghost="Blog" subtitle="Ideias, conhecimento e estratégias de Marketing Digital." />
        {list.length ? (
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((b, i) => (
              <li key={i} className="flex flex-col">
                <CloudImage src={b.imageUrl} alt={b.title || `Artigo ${i + 1}`} aspectRatio="16 / 11" objectFit="cover" className="rounded-[1.5rem]" />
                <div className="mt-4 flex flex-1 flex-col">
                  {b.category && <span className={cn(tag, "self-start")}>{b.category}</span>}
                  <h3 className="mt-3 text-lg font-bold text-foreground">{b.title || "Título do artigo por configurar"}</h3>
                  {(b.date || b.readingTime) && (
                    <p className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      {b.date && <span>{b.date}</span>}{b.readingTime && <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden />{b.readingTime}</span>}
                    </p>
                  )}
                  {isValidUrl(b.articleUrl) && <a href={b.articleUrl} {...externalProps} className="mt-4 inline-flex min-h-11 items-center gap-1 self-start text-sm font-semibold text-primary hover:underline">Ler artigo <ArrowUpRight className="h-4 w-4" aria-hidden /></a>}
                </div>
              </li>
            ))}
          </ul>
        ) : <p className="mt-10 text-muted-foreground">Novos artigos em breve.</p>}
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-primary py-20 md:py-28">
      <div className="container-site max-w-4xl">
        <SectionTitle eyebrow="FAQ" tone="dark" ghost="Perguntas" center title={<>Ficou alguma <span className="text-lime">dúvida?</span></>} />
        <ul className="mt-12 space-y-3">
          {siteConfig.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.question} className={cn("rounded-2xl border transition", isOpen ? "border-lime bg-lime text-lime-foreground" : "border-primary-foreground/20 text-primary-foreground")}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-b-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold">
                    {f.question}<Plus className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-45")} aria-hidden />
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={!isOpen} className="px-5 pb-5 text-sm leading-relaxed">{f.answer}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  const c = siteConfig;
  const legal = [
    { url: c.links.privacyPolicyUrl, label: "Política de Privacidade" },
    { url: c.links.cookiesPolicyUrl, label: "Política de Cookies" },
    { url: c.links.legalNoticeUrl, label: "Informação legal" },
  ].filter((l) => isValidUrl(l.url));
  const email = mailto(c.contact.email);
  const phone = tel(c.contact.phone);
  const h = "font-display font-bold text-foreground";
  const a = "text-sm text-muted-foreground hover:text-primary";
  return (
    <footer className="bg-background pt-16">
      <div className="container-site grid gap-10 border-b border-border pb-12 md:grid-cols-[minmax(0,1.4fr)_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-display font-bold"><Logo />{c.name && <span>{c.name}</span>}</div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{c.footerDescription}</p>
          <div className="mt-5"><SocialLinks /></div>
        </div>
        <nav aria-label="Ligações rápidas">
          <h2 className={h}>Navegação</h2>
          <ul className="mt-4 space-y-2">{NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className={a}>{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <h2 className={h}>Serviços</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground"><li>Marketing Digital</li><li>Formação</li><li>Websites & SEO</li><li>Consultoria</li></ul>
          <ul className="mt-5 space-y-2">
            {email && <li><a href={email} className={a}>{c.contact.email}</a></li>}
            {phone && <li><a href={phone} className={a}>{c.contact.phone}</a></li>}
            <li><a href="#contacto" className="text-sm font-semibold text-primary hover:underline">Formulário de contacto →</a></li>
          </ul>
        </div>
      </div>
      <div className="container-site flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {c.name}{c.name ? ". " : ""}Todos os direitos reservados.</p>
        {legal.length > 0 && <ul className="flex flex-wrap gap-4">{legal.map((l) => <li key={l.label}><a href={l.url} {...externalProps} className="hover:text-primary">{l.label}</a></li>)}</ul>}
      </div>
    </footer>
  );
}
