import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { EDIT_MODE, isValidUrl, normalizeImageUrl } from "@/lib/links";

interface Props {
  src?: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: "contain" | "cover";
  className?: string;
  eager?: boolean;
  /** Mostrar espaço reservado também fora do modo de edição */
  alwaysShowPlaceholder?: boolean;
}

/** Carrega imagens directamente do URL configurado, com suporte a links directos ou Google Drive. */
export function CloudImage({ src, alt, aspectRatio, objectFit = "cover", className, eager, alwaysShowPlaceholder = true }: Props) {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = normalizeImageUrl(src);
  const ok = isValidUrl(resolvedSrc) && !failed;
  const style = aspectRatio ? { aspectRatio } : undefined;

  if (!ok) {
    if (!alwaysShowPlaceholder && !EDIT_MODE) return <div className={className} style={style} aria-hidden />;
    return (
      <div
        className={cn("flex items-center justify-center rounded-[inherit] bg-placeholder text-placeholder-foreground", className)}
        style={style}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-1 p-3 text-center text-xs">
          <ImageOff className="h-5 w-5" aria-hidden />
          {EDIT_MODE && <span>{failed ? "Imagem indisponível — verifique o link directo" : "Imagem por configurar"}</span>}
        </div>
      </div>
    );
  }
  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      style={{ ...style, objectFit }}
      className={cn("h-full w-full", className)}
    />
  );
}
