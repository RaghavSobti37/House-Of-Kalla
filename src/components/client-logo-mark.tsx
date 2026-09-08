import { getClientLogoSrc, type ClientLogoSlug } from "@/lib/client-logos";

/** Uniform square display box — assets are pre-cropped 512×512. */
const LOGO_BOX = 56;

export function ClientLogoMark({ name, slug }: { name: string; slug: ClientLogoSlug }) {
  const src = getClientLogoSrc(slug);

  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden"
      style={{ width: LOGO_BOX, height: LOGO_BOX }}
    >
      {src ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full w-full object-contain object-center"
          width={LOGO_BOX * 2}
          height={LOGO_BOX * 2}
          decoding="sync"
          loading="eager"
          draggable={false}
        />
      ) : null}
    </div>
  );
}
