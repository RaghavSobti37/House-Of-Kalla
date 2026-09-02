import { getClientLogoSrc, type ClientLogoSlug } from "@/lib/client-logos";

/** 2x intrinsic size for retina — displayed at 56px. */
const LOGO_INTRINSIC = 112;

export function ClientLogoMark({ name, slug }: { name: string; slug: ClientLogoSlug }) {
  const src = getClientLogoSrc(slug);

  return (
    <div className="flex size-14 shrink-0 items-center justify-center">
      {src ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain object-center"
          width={LOGO_INTRINSIC}
          height={LOGO_INTRINSIC}
          decoding="sync"
          loading="eager"
          draggable={false}
        />
      ) : null}
    </div>
  );
}
