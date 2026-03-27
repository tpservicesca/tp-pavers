import { Phone, MessageSquare } from 'lucide-react';
import { TrackLink } from './TrackLink';

export default function CallNowStrip() {
  return (
    <div className="bg-brand-orange">
      {/* Content */}
      <div className="flex items-center justify-center py-5 sm:py-6 gap-4 sm:gap-6">
        <span className="text-white text-base sm:text-lg font-bold tracking-wide uppercase hidden sm:inline drop-shadow-md">
          Ready to transform your space?
        </span>

        {/* Mobile: Call Now */}
        <TrackLink
          href="tel:+15106500080"
          event="phone_call"
          category="Contact"
          label="tel:+15106500080 - Paver Strip"
          className="sm:hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-white text-brand-orange-dark hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
        >
          <Phone size={18} /> Call now
        </TrackLink>

        {/* Desktop: Contact Us → scrolls to form */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-bold bg-white text-brand-orange-dark hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
        >
          <MessageSquare size={18} /> Contact us
        </a>
      </div>
    </div>
  );
}
