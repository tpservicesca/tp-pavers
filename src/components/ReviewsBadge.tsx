import { Star } from 'lucide-react';

// Reseñas REALES del perfil de Google de TP Pavers (Place ID ChIJQfN_Xeh3hYARywJh0mDcm6I, 3201 Ramona St, Pinole):
// 5.0 · 10 reseñas medidas por Places API el 6-oct-2026 (el JSON-LD decía 50 sin fuente). Reemplaza el maquetado falso Reviews.tsx
// ("Caning Repair · hace 8 meses"). Si cambia el conteo, actualizar aquí Y en layout.tsx.
export const GOOGLE_RATING = '5.0';
export const GOOGLE_REVIEW_COUNT = 10;
export const GOOGLE_REVIEWS_URL = 'https://search.google.com/local/reviews?placeid=ChIJQfN_Xeh3hYARywJh0mDcm6I';

export default function ReviewsBadge() {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center">
        <span className="inline-flex items-center gap-1" aria-label={`${GOOGLE_RATING} out of 5 stars`}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={20} className="text-amber-400" fill="currentColor" strokeWidth={0} />
          ))}
        </span>
        <span className="text-brand-black font-bold text-lg">{GOOGLE_RATING}</span>
        <span className="inline-flex items-center gap-2 text-slate-700 text-[0.95rem]">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Rated 5 stars by {GOOGLE_REVIEW_COUNT} homeowners on Google
        </span>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange font-semibold hover:underline text-[0.95rem]"
        >
          Read our reviews &rarr;
        </a>
        <span className="text-slate-500 text-sm">Licensed &amp; Insured &middot; 10-Year Warranty &middot; Family-owned, Contra Costa &amp; Tri-Valley</span>
      </div>
    </div>
  );
}
