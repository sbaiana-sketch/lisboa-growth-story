import type { ReactNode } from "react";
import { Facebook, Instagram, Linkedin, Music2, Youtube, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/siteConfig";
import { externalProps, isValidUrl } from "@/lib/links";

export function Highlight({ text, words, className }: { text: string; words: string[]; className: string }) {
  const valid = words.filter(Boolean);
  if (!valid.length) return <>{text}</>;
  const re = new RegExp(`(${valid.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return (
    <>
      {text.split(re).map((part, i) =>
        valid.some((w) => w.toLowerCase() === part.toLowerCase()) ? <span key={i} className={className}>{part}</span> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]", tone === "dark" ? "text-primary-foreground/80" : "text-primary")}>
      <span className="h-0.5 w-6 rounded-full bg-lime" aria-hidden />
      {children}
    </span>
  );
}

export function SectionTitle({ eyebrow, title, ghost, tone = "light", subtitle, center }: {
  eyebrow?: string; title: ReactNode; ghost?: string; tone?: "light" | "dark"; subtitle?: string; center?: boolean;
}) {
  return (
    <div className={cn("relative", center && "text-center")}>
      {ghost && (
        <span aria-hidden className={cn("ghost-text absolute -top-6 text-6xl md:text-8xl", center ? "left-1/2 -translate-x-1/2" : "left-0", tone === "dark" ? "text-primary-foreground" : "text-primary")}>
          {ghost}
        </span>
      )}
      <div className="relative">
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        <h2 className={cn("mt-3 text-3xl font-bold md:text-5xl", tone === "dark" ? "text-primary-foreground" : "text-foreground")}>{title}</h2>
        {subtitle && <p className={cn("mt-3 max-w-xl", center && "mx-auto", tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground")}>{subtitle}</p>}
      </div>
    </div>
  );
}

export const pill = {
  lime: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-lime-foreground transition hover:brightness-95 hover:-translate-y-0.5",
  brand: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-dark hover:-translate-y-0.5",
  outline: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary",
  outlineLight: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10",
};

export const tag = "inline-flex items-center rounded-full bg-lime px-3 py-1 text-xs font-semibold text-lime-foreground";

const socials: { key: keyof typeof siteConfig.contact; label: string; Icon: LucideIcon }[] = [
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "tiktok", label: "TikTok", Icon: Music2 },
  { key: "youtube", label: "YouTube", Icon: Youtube },
];

export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const items = socials.filter((s) => isValidUrl(siteConfig.contact[s.key] as string));
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={(siteConfig.contact[key] as string).trim()}
            {...externalProps}
            aria-label={label}
            className={cn("grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5",
              tone === "dark" ? "bg-primary-foreground/10 text-primary-foreground hover:bg-lime hover:text-lime-foreground" : "bg-primary text-primary-foreground hover:bg-brand-dark")}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Logo({ className }: { className?: string }) {
  const { logo } = siteConfig.images;
  if (isValidUrl(logo)) return <img src={logo} alt={siteConfig.name || "Logótipo"} className={cn("h-9 w-auto", className)} />;
  return (
    <span className={cn("relative grid h-9 w-9 place-items-center", className)} aria-hidden>
      <span className="absolute inset-0 rounded-full bg-primary" />
      <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full bg-lime" />
    </span>
  );
}
