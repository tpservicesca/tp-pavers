import { Phone } from 'lucide-react';
import { TrackLink } from './TrackLink';

export default function CallNowStrip() {
  return (
    <div className="relative bg-brand-orange-dark overflow-hidden">
      {/* Zigzag top edge */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
        height="12"
      >
        <path
          d="M0 12 L20 0 L40 12 L60 0 L80 12 L100 0 L120 12 L140 0 L160 12 L180 0 L200 12 L220 0 L240 12 L260 0 L280 12 L300 0 L320 12 L340 0 L360 12 L380 0 L400 12 L420 0 L440 12 L460 0 L480 12 L500 0 L520 12 L540 0 L560 12 L580 0 L600 12 L620 0 L640 12 L660 0 L680 12 L700 0 L720 12 L740 0 L760 12 L780 0 L800 12 L820 0 L840 12 L860 0 L880 12 L900 0 L920 12 L940 0 L960 12 L980 0 L1000 12 L1020 0 L1040 12 L1060 0 L1080 12 L1100 0 L1120 12 L1140 0 L1160 12 L1180 0 L1200 12 Z"
          fill="#1a1a1a"
        />
      </svg>

      {/* Content */}
      <div className="flex items-center justify-center py-4 pt-6 gap-4 sm:gap-6">
        <span className="text-white text-base sm:text-lg font-bold tracking-wide uppercase hidden sm:inline">
          Ready to transform your space?
        </span>
        <TrackLink
          href="tel:+15106502083"
          event="phone_call"
          category="Contact"
          label="tel:+15106502083 - Orange Strip"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold bg-white text-brand-orange-dark hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
        >
          <Phone size={18} /> Call now
        </TrackLink>
      </div>

      {/* Zigzag bottom edge */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
        height="12"
      >
        <path
          d="M0 0 L20 12 L40 0 L60 12 L80 0 L100 12 L120 0 L140 12 L160 0 L180 12 L200 0 L220 12 L240 0 L260 12 L280 0 L300 12 L320 0 L340 12 L360 0 L380 12 L400 0 L420 12 L440 0 L460 12 L480 0 L500 12 L520 0 L540 12 L560 0 L580 12 L600 0 L620 12 L640 0 L660 12 L680 0 L700 12 L720 0 L740 12 L760 0 L780 12 L800 0 L820 12 L840 0 L860 12 L880 0 L900 12 L920 0 L940 12 L960 0 L980 12 L1000 0 L1020 12 L1040 0 L1060 12 L1080 0 L1100 12 L1120 0 L1140 12 L1160 0 L1180 12 L1200 0 Z"
          fill="#f8fafc"
        />
      </svg>
    </div>
  );
}
