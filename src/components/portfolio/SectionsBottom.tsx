import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Quote,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { externalProps, isFilled, isValidUrl, mailto, tel, whatsappUrl } from "@/lib/links";
import { cn } from "@/lib/utils";
import { CloudImage } from "./CloudImage";
import { Logo, SectionTitle, SocialLinks, pill } from "./shared";
import { NAV } from "./SectionsTop";

export function Collaboration() {
  return (
    <section id="colaboracao" className="bg-background py-20 md:py-28">
      <div className="container-site">
        <SectionTitle
          eyebrow="Colaboração"
          title={
            <>
              O que posso <span className="text-primary">acrescentar à tua equipa?</span>
            </>
          }
          ghost="Colaboração"
          center
        />
        <ul className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {siteConfig.collaboration.map((m, i) => {
            const featured = i === 1;
            const href = isValidUrl(m.ctaUrl) ? m.ctaUrl : "#contacto";
            return (
              <li
                key={m.title}
                className={cn(
                  "flex flex-col rounded-[1.75rem] p-8",
                  featured
                    ? "bg-primary text-primary-foreground md:-my-4 md:py-12 shadow-xl"
                    : "border border-border bg-background text-foreground",
                )}
              >
                <h3 className="text-2xl font-bold">{m.title}</h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    featured ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {m.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a href={href} className={cn(featured ? pill.lime : pill.brand, "mt-8 self-start")}>
                  {m.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

type Status = "idle" | "loading" | "success" | "error" | "mailtoFallback";
const ASSUNTO_OPTIONS = [
  "Oportunidade de emprego",
  "Estágio ou integração profissional",
  "Colaboração em projecto",
  "Outra questão",
];

function ContactForm() {
  const destEmail = siteConfig.contact.email;
  const endpoint = siteConfig.contact.formEndpoint;
  const hasEndpoint = isValidUrl(endpoint);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    assunto: "",
    mensagem: "",
    _gotcha: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.nome.trim() || formData.nome.length > 100) {
      errs["nome"] = "Por favor, indica o teu nome (máx. 100 caracteres).";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
      formData.email.length > 255
    ) {
      errs["email"] = "Por favor, indica um e-mail válido.";
    }
    if (!formData.assunto || !ASSUNTO_OPTIONS.includes(formData.assunto)) {
      errs["assunto"] = "Por favor, selecciona uma opção de assunto.";
    }
    if (!formData.mensagem.trim() || formData.mensagem.length > 2000) {
      errs["mensagem"] = "Por favor, escreve a tua mensagem (máx. 2000 caracteres).";
    }
    return errs;
  }

  function createMailtoUrl() {
    const subject = encodeURIComponent(
      `[Contacto Portefólio] ${formData.assunto} - ${formData.nome}`,
    );
    const body = encodeURIComponent(
      `Olá Sandra,\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nEmpresa: ${formData.empresa || "Não indicada"}\nAssunto: ${formData.assunto}\n\nMensagem:\n${formData.mensagem}\n`,
    );
    return `mailto:${destEmail}?subject=${subject}&body=${body}`;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Detecção de spam por honeypot
    if (formData._gotcha) {
      setStatus("success");
      return;
    }

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (hasEndpoint) {
      setStatus("loading");
      try {
        const payload = {
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          empresa: formData.empresa.trim(),
          assunto: formData.assunto,
          mensagem: formData.mensagem.trim(),
          _replyto: formData.email.trim(),
          _subject: `[Portefólio] ${formData.assunto} — ${formData.nome}`,
        };
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Falha no envio");

        setStatus("success");
        setFormData({
          nome: "",
          email: "",
          empresa: "",
          assunto: "",
          mensagem: "",
          _gotcha: "",
        });
      } catch {
        setStatus("error");
      }
    } else {
      // Quando não há endpoint de backend configurado, abre directamente o cliente de email com o rascunho completo
      window.location.href = createMailtoUrl();
      setStatus("mailtoFallback");
    }
  }

  const field =
    "w-full rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-lime focus:outline-none transition";
  const label = "mb-1.5 block text-sm font-medium text-primary-foreground";
  const err = (k: string) =>
    errors[k] && (
      <p id={`${k}-erro`} className="mt-1 text-xs text-lime">
        {errors[k]}
      </p>
    );

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-4 rounded-[1.75rem] bg-brand-dark p-6 md:p-8 sm:grid-cols-2"
    >
      {/* Campo Honeypot para protecção contra spam */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="nome" className={label}>
          Nome <span className="text-lime">*</span>
        </label>
        <input
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          autoComplete="name"
          maxLength={100}
          placeholder="O teu nome"
          className={field}
          aria-invalid={!!errors["nome"]}
          aria-describedby={errors["nome"] ? "nome-erro" : undefined}
          required
        />
        {err("nome")}
      </div>

      <div>
        <label htmlFor="email" className={label}>
          E-mail <span className="text-lime">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          maxLength={255}
          placeholder="exemplo@empresa.pt"
          className={field}
          aria-invalid={!!errors["email"]}
          aria-describedby={errors["email"] ? "email-erro" : undefined}
          required
        />
        {err("email")}
      </div>

      <div>
        <label htmlFor="empresa" className={label}>
          Empresa <span className="text-xs text-primary-foreground/60 font-normal">(opcional)</span>
        </label>
        <input
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          maxLength={150}
          placeholder="Nome da empresa ou agência"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="assunto" className={label}>
          Assunto <span className="text-lime">*</span>
        </label>
        <select
          id="assunto"
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          className={cn(field, "[&>option]:text-foreground [&>option]:bg-background")}
          aria-invalid={!!errors["assunto"]}
          required
        >
          <option value="" disabled>
            Seleccionar assunto…
          </option>
          {ASSUNTO_OPTIONS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {err("assunto")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="mensagem" className={label}>
          Mensagem <span className="text-lime">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          maxLength={2000}
          placeholder="Partilha o contexto, desafio ou oportunidade profissional…"
          className={field}
          aria-invalid={!!errors["mensagem"]}
          required
        />
        {err("mensagem")}
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2" aria-live="polite">
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            pill.lime,
            "self-start cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
          )}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> A enviar…
            </>
          ) : (
            <>
              Enviar mensagem <Send className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>

        {status === "success" && (
          <p className="text-sm font-semibold text-lime">
            ✓ Mensagem enviada com sucesso! Responderei com a maior brevidade possível.
          </p>
        )}

        {status === "mailtoFallback" && (
          <p className="text-sm text-lime">
            O teu cliente de email foi aberto com todos os dados preenchidos para envio para{" "}
            <strong>{destEmail}</strong>.
          </p>
        )}

        {status === "error" && (
          <div className="text-sm text-primary-foreground space-y-2">
            <p className="text-lime">
              Não foi possível enviar pelo serviço de formulário neste momento.
            </p>
            <a
              href={createMailtoUrl()}
              className="inline-flex items-center gap-2 rounded-lg bg-lime px-4 py-2 text-xs font-semibold text-lime-foreground hover:brightness-95"
            >
              <Mail className="h-3.5 w-3.5" /> Enviar directamente via Email ({destEmail})
            </a>
          </div>
        )}

        <p className="text-xs text-primary-foreground/70 mt-1">
          Preferes contacto directo? Escreve para{" "}
          <a href={`mailto:${destEmail}`} className="text-lime hover:underline font-semibold">
            {destEmail}
          </a>
        </p>
      </div>
    </form>
  );
}

export function Contact() {
  const c = siteConfig.contact;
  const items = [
    { href: mailto(c.email), label: c.email, Icon: Mail, ext: false },
    { href: tel(c.phone), label: c.phone, Icon: Phone, ext: false },
    {
      href: whatsappUrl(c.whatsapp),
      label: "Conversar no WhatsApp",
      Icon: MessageCircle,
      ext: true,
    },
  ].filter((i) => i.href);
  const loc = c.location || siteConfig.location;

  return (
    <section id="contacto" className="bg-primary py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <SectionTitle
            eyebrow="Contacto"
            tone="dark"
            ghost="Contacto"
            title={
              <>
                Vamos <span className="text-lime">conversar</span> sobre o próximo desafio?
              </>
            }
          />
          <p className="mt-5 text-primary-foreground/90 leading-relaxed text-base">
            Estou disponível para conhecer novas oportunidades profissionais, integrar equipas e
            colaborar em projectos na área do Marketing Digital e Comunicação.
          </p>
          <p className="mt-3 text-primary-foreground/80 leading-relaxed text-sm">
            Se procuras alguém com experiência prática, visão estratégica e vontade de continuar a
            evoluir, terei todo o gosto em conversar.
          </p>

          <ul className="mt-8 space-y-3">
            {items.map(({ href, label, Icon, ext }) => (
              <li key={href!}>
                <a
                  href={href!}
                  {...(ext ? externalProps : {})}
                  className="flex min-h-11 items-center gap-3 text-primary-foreground hover:text-lime transition"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="break-all font-medium">{label}</span>
                </a>
              </li>
            ))}
            {isFilled(loc) && (
              <li className="flex items-center gap-3 text-primary-foreground">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>{loc}</span>
              </li>
            )}
          </ul>

          <div className="mt-8">
            <SocialLinks tone="dark" />
          </div>
        </div>

        {c.contactFormEnabled && (
          <div id="formulario">
            <ContactForm />
          </div>
        )}
      </div>
    </section>
  );
}

export function Testimonials() {
  const list = siteConfig.testimonials.filter(
    (t) => t.visible && isFilled(t.text) && isFilled(t.name),
  );
  const [i, setI] = useState(0);
  if (!list.length) return null;
  const t = list[i % list.length]!;
  const go = (d: number) => setI((v) => (v + d + list.length) % list.length);

  return (
    <section id="testemunhos" className="bg-background py-20 md:py-28">
      <div className="container-site">
        <SectionTitle
          eyebrow="Testemunhos"
          title={
            <>
              O que dizem sobre o <span className="text-primary">meu trabalho</span>
            </>
          }
          ghost="Testemunhos"
          center
        />
        <div className="relative mx-auto mt-14 max-w-4xl">
          <figure
            className="grid items-center gap-8 rounded-[1.75rem] bg-surface p-8 md:grid-cols-[200px_minmax(0,1fr)] md:p-10"
            aria-live="polite"
          >
            <div className="relative mx-auto h-40 w-40 md:h-48 md:w-48">
              <span
                aria-hidden
                className="absolute -top-2 -left-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-lime text-lime-foreground"
              >
                <Quote className="h-5 w-5" />
              </span>
              <CloudImage
                src={t.imageUrl}
                alt={`Fotografia de ${t.name}`}
                aspectRatio="1 / 1"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div>
              <blockquote className="text-lg leading-relaxed text-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {[t.role, t.organization].filter(Boolean).join(" · ")}
                </p>
              </figcaption>
            </div>
          </figure>
          {list.length > 1 && (
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Testemunho anterior"
                className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Testemunho seguinte"
                className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-primary py-20 md:py-28">
      <div className="container-site max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          tone="dark"
          ghost="Perguntas"
          center
          title={
            <>
              Ficou alguma <span className="text-lime">dúvida?</span>
            </>
          }
        />
        <ul className="mt-12 space-y-3">
          {siteConfig.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.question}
                className={cn(
                  "rounded-2xl border transition",
                  isOpen
                    ? "border-lime bg-lime text-lime-foreground"
                    : "border-primary-foreground/20 text-primary-foreground",
                )}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-b-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold cursor-pointer"
                  >
                    {f.question}
                    <Plus
                      className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-45")}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  aria-labelledby={`faq-b-${i}`}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed"
                >
                  {f.answer}
                </div>
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
  const a = "text-sm text-muted-foreground hover:text-primary transition";

  return (
    <footer className="bg-background pt-16">
      <div className="container-site grid gap-10 border-b border-border pb-12 md:grid-cols-[minmax(0,1.4fr)_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-display font-bold">
            <Logo />
            {c.name && <span>{c.name}</span>}
          </div>
          <p className="mt-2 text-sm font-medium text-primary">{c.professionalTitle}</p>
          <p className="mt-1 text-xs text-muted-foreground">{c.location}</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            {c.footerDescription}
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
        <nav aria-label="Ligações rápidas">
          <h2 className={h}>Navegação</h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={a}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className={h}>Contacto Directo</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {email && (
              <li>
                <a href={email} className="text-primary font-semibold hover:underline break-all">
                  {c.contact.email}
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a href={phone} className={a}>
                  {c.contact.phone}
                </a>
              </li>
            )}
            <li className="pt-2">
              <a href="#contacto" className="text-sm font-semibold text-primary hover:underline">
                Formulário de contacto →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-site flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {c.name}. Todos os direitos reservados.
        </p>
        {legal.length > 0 && (
          <ul className="flex flex-wrap gap-4">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.url} {...externalProps} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
