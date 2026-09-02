import hokLogo from "../../LOGOS/Asset 7@2x.webp";
import knchanLogo from "../../LOGOS/knchan-navbar.png";

const LOGO_HEIGHT_CLASS = "h-10";

export function NavLogoLockup({
  invertHok = false,
  lightDivider = false,
}: {
  invertHok?: boolean;
  lightDivider?: boolean;
}) {
  return (
    <span className="inline-flex items-end gap-3">
      <img
        src={hokLogo}
        alt="House of Kalaa"
        className={`block w-auto ${LOGO_HEIGHT_CLASS} transition-all ${invertHok ? "brightness-0 invert" : ""}`}
      />
      <span
        className={`mb-1.5 h-8 w-px shrink-0 ${lightDivider ? "bg-white/40" : "bg-border/60"}`}
        aria-hidden="true"
      />
      <img
        src={knchanLogo}
        alt="Knchan"
        className={`block w-auto ${LOGO_HEIGHT_CLASS} transition-all`}
      />
    </span>
  );
}
