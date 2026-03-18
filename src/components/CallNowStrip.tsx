import { Phone } from 'lucide-react';
import { TrackLink } from './TrackLink';

export default function CallNowStrip() {
  return (
    <div className="relative overflow-hidden">
      {/* Paver pattern background */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="paverPattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
            {/* Row 1 - full bricks */}
            <rect x="1" y="1" width="38" height="18" rx="2" fill="#c45a14" stroke="#a04510" strokeWidth="0.8" />
            <rect x="41" y="1" width="38" height="18" rx="2" fill="#d4691e" stroke="#a04510" strokeWidth="0.8" />
            {/* Row 2 - offset bricks */}
            <rect x="-19" y="21" width="38" height="18" rx="2" fill="#d4691e" stroke="#a04510" strokeWidth="0.8" />
            <rect x="21" y="21" width="38" height="18" rx="2" fill="#c45a14" stroke="#a04510" strokeWidth="0.8" />
            <rect x="61" y="21" width="38" height="18" rx="2" fill="#cc6218" stroke="#a04510" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#b8510f" />
        <rect width="100%" height="100%" fill="url(#paverPattern)" />
      </svg>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative flex items-center justify-center py-5 sm:py-6 gap-4 sm:gap-6">
        <span className="text-white text-base sm:text-lg font-bold tracking-wide uppercase hidden sm:inline drop-shadow-md">
          Ready to transform your space?
        </span>
        <TrackLink
          href="tel:+15106502083"
          event="phone_call"
          category="Contact"
          label="tel:+15106502083 - Paver Strip"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold bg-white text-brand-orange-dark hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
        >
          <Phone size={18} /> Call now
        </TrackLink>
      </div>
    </div>
  );
}

