import Link from 'next/link';
import { Phone, ChevronRight, Star, Shield, CheckCircle } from 'lucide-react';

// Movido desde app/blog/[slug]/page.tsx: un page.tsx no puede exportar componentes (Next lo rechaza
// al validar los exports de la página con webpack; Turbopack lo dejaba pasar).
export default function InlineCTA({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  if (variant === 'secondary') {
    return (
      <div className="my-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
        <p className="text-lg text-gray-700 mb-2">
          <strong>Not sure where to start?</strong>
        </p>
        <p className="text-gray-600 mb-5">
          Our team has 20+ years of experience helping California homeowners. We&apos;ll walk you through your options — no pressure, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+15108041550"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold px-6 py-3 rounded-full hover:bg-brand-orange-dark transition-all"
          >
            <Phone size={18} /> Call for Free Estimate
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-bold px-6 py-3 rounded-full border-2 border-brand-orange hover:bg-orange-50 transition-all"
          >
            Request a Quote Online
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl p-6 md:p-8 text-center text-white">
      <h3 className="font-oswald text-2xl md:text-3xl font-bold mb-3">
        Ready to Transform Your Outdoor Space?
      </h3>
      <p className="text-white/90 mb-5 max-w-lg mx-auto">
        Get a free, no-obligation estimate from our expert team. 20+ years of experience, lifetime guarantee on all installations.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="tel:+15108041550"
          className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-all"
        >
          <Phone size={18} /> (510) 804-1550
        </a>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold px-6 py-3 rounded-full border-2 border-white hover:bg-white/10 transition-all"
        >
          Get Your Free Quote <ChevronRight size={18} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/80">
        <span className="flex items-center gap-1"><Star size={14} /> 5.0 Rating</span>
        <span className="flex items-center gap-1"><Shield size={14} /> Lifetime Guarantee</span>
        <span className="flex items-center gap-1"><CheckCircle size={14} /> Licensed &amp; Insured</span>
      </div>
    </div>
  );
}
