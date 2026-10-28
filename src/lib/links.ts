/** Mostra espaços reservados apenas em modo de edição (pré-visualização local). */
export const EDIT_MODE = import.meta.env.DEV;

export function isValidUrl(value?: string): value is string {
  if (!value || !value.trim()) return false;
  try {
    const u = new URL(value.trim());
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

export const isFilled = (v?: string) => !!v && v.trim().length > 0;

export function mailto(email?: string) {
  return isFilled(email) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email!.trim()) ? `mailto:${email!.trim()}` : null;
}
export function tel(phone?: string) {
  const d = (phone ?? "").replace(/[^\d+]/g, "");
  return d.replace("+", "").length >= 6 ? `tel:${d}` : null;
}
export function whatsappUrl(num?: string) {
  const d = (num ?? "").replace(/\D/g, "").replace(/^00/, "");
  return d.length >= 8 ? `https://wa.me/${d}` : null;
}
export const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;
