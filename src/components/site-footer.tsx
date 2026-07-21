import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo-dark.webp.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <img src={logoAsset.url} alt="House of Kalaa" className="h-16 w-auto invert brightness-0" />
          <p className="mt-3 text-[10px] tracking-[0.28em] text-white/60">WHERE CRAFT BECOMES HOME</p>
        </div>
        <div>
          <h4 className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-white/80">NAVIGATION</h4>
          <ul className="space-y-1.5 text-sm text-white/60">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Inquire</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-white/80">STUDIO</h4>
          <p className="text-sm leading-relaxed text-white/60">
            B-36, NICE, A Road, 5th street,
            <br />
            MIDC, Satpur, Nashik - 422007
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="WhatsApp" className="rounded-full border border-white/20 p-2 hover:border-white/60">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:border-white/60">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 text-[10px] tracking-[0.2em] text-white/40 md:px-10">
          <span>© HOUSE OF KALAA · ALL RIGHTS RESERVED</span>
          <span>DESIGNED BY LOVABLE STUDIO</span>
        </div>
      </div>
    </footer>
  );
}