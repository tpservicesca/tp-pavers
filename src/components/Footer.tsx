import { TrackLink } from './TrackLink';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/80 pt-[60px] border-t-[3px] border-brand-orange">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Company Info */}
        <div>
          <h3 className="text-brand-orange text-[1.15rem] font-bold mb-[18px]">TP Pavers</h3>
          <p className="mb-2 text-[0.9rem] leading-[1.6]">
            Professional pavers, retaining walls, and landscaping services in the San Francisco Bay Area.
          </p>
          <p className="mb-2 text-[0.9rem]"><strong>20+ Years Experience</strong></p>
          <p className="mb-2 text-[0.9rem]"><strong>10-Year Warranty</strong></p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-brand-orange text-[1.15rem] font-bold mb-[18px]">Services</h3>
          <a href="#services" className="block mb-2 text-[0.9rem] text-white/80 hover:text-brand-orange transition-colors">Paver Installation</a>
          <a href="#services" className="block mb-2 text-[0.9rem] text-white/80 hover:text-brand-orange transition-colors">Retaining Walls</a>
          <a href="#services" className="block mb-2 text-[0.9rem] text-white/80 hover:text-brand-orange transition-colors">Drainage Systems</a>
          <a href="#services" className="block mb-2 text-[0.9rem] text-white/80 hover:text-brand-orange transition-colors">Demolition &amp; Excavation</a>
          <a href="#services" className="block mb-2 text-[0.9rem] text-white/80 hover:text-brand-orange transition-colors">Synthetic Turf</a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-brand-orange text-[1.15rem] font-bold mb-[18px]">Contact Info</h3>
          <TrackLink
            href="tel:510-650-0080"
            event="phone_call"
            category="Contact"
            label="tel:510-650-0080"
            className="block mb-2 text-[0.9rem] text-white/80 hover:text-brand-orange transition-colors"
          >
            &#x1F4DE; (510) 650-0080
          </TrackLink>
          <TrackLink
            href="mailto:contact@tppavers.com"
            event="email_click"
            category="Contact"
            label="mailto:contact@tppavers.com"
            className="block mb-2 text-[0.9rem] text-white/80 hover:text-brand-orange transition-colors"
          >
            &#x2709; contact@tppavers.com
          </TrackLink>
          <p className="mb-2 text-[0.9rem] leading-[1.6]">
            &#x1F4CD; 3201 Ramona Street<br />Pinole, CA 94564
          </p>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-brand-orange text-[1.15rem] font-bold mb-[18px]">Service Areas</h3>
          <p className="mb-2 text-[0.9rem]">San Francisco Bay Area</p>
          <p className="mb-2 text-[0.9rem]">East Bay &bull; North Bay &bull; Peninsula</p>
          <p className="mb-2 text-[0.9rem]">Pinole &bull; Oakland &bull; Berkeley</p>
          <p className="mb-2 text-[0.9rem]">Richmond &bull; Walnut Creek &bull; Concord</p>
        </div>
      </div>

      <div className="border-t border-slate-500 text-center py-5 mt-5">
        <p className="text-[0.85rem] text-white/60">
          &copy; 2024 TP Pavers. All rights reserved. Licensed &amp; Insured.
        </p>
      </div>
    </footer>
  );
}
