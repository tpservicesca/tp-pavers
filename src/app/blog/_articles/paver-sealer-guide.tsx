import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Phone, ChevronRight } from 'lucide-react';
import { InlineCTA } from '../[slug]/page';

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden my-8 shadow-lg">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function PaverSealerGuide() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        You&apos;ve invested in a beautiful paver driveway, patio, or walkway — now it&apos;s time to protect that investment. Applying the right <strong>paver sealer</strong> is one of the most important steps you can take to keep your pavers looking brand new for years to come. Sealer protects against stains, fading, weed growth, and the wear and tear of California&apos;s sun and weather.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been installing and maintaining paver surfaces across the Bay Area for over 20 years. Our family-owned team knows exactly which <strong>paver sealer</strong> works best for every situation — and we back every installation with a <strong>lifetime guarantee</strong>. Here&apos;s your complete guide to choosing, applying, and maintaining paver sealer.
      </p>

      <h2>Why Sealing Your Pavers Matters</h2>

      <SectionImage
        src="/images/E3.webp"
        alt="Sealed paver surface showing enhanced color and protection"
      />

      <p>
        Unsealed pavers are porous. Over time, they absorb moisture, oil, and organic stains that become increasingly difficult to remove. California&apos;s intense UV rays fade colors, and the gaps between pavers become highways for weeds and ants. A quality <strong>paver sealer</strong> addresses all of these problems:
      </p>

      <ul>
        <li><strong>Color protection:</strong> Sealer blocks UV rays that fade and dull paver colors over time</li>
        <li><strong>Stain resistance:</strong> Creates a barrier against oil, grease, wine, and food spills</li>
        <li><strong>Weed & ant prevention:</strong> Sealer hardens the joint sand, making it much harder for weeds to take root and ants to excavate</li>
        <li><strong>Erosion prevention:</strong> Keeps joint sand in place during rain and washing, maintaining structural integrity</li>
        <li><strong>Enhanced appearance:</strong> Depending on the type, sealer can deepen colors, add a subtle sheen, or create a dramatic wet look</li>
      </ul>

      <p>
        Think of <strong>paver sealer</strong> like sunscreen for your hardscape — it doesn&apos;t change what&apos;s underneath, but it protects it from the elements that cause aging and deterioration.
      </p>

      <h2>Types of Paver Sealers: Which One Is Right for You?</h2>

      <p>
        Not all paver sealers are created equal. The right choice depends on the look you want, the type of pavers you have, and how much maintenance you&apos;re willing to do. Here are the main categories:
      </p>

      <h3>1. Natural Look / Matte Sealer</h3>
      <p>
        This type of <strong>paver sealer</strong> provides invisible protection without changing the appearance of your pavers. They maintain the original color and texture while still blocking stains and UV damage. Natural look sealers are perfect for homeowners who love their pavers exactly as they are and just want protection.
      </p>

      <h3>2. Color Enhancing Sealer</h3>
      <p>
        Enhancing sealers deepen the natural color of your pavers, making reds richer, grays darker, and earth tones more vibrant. The effect is similar to what pavers look like when wet — but permanent. This is our most popular recommendation for <Link href="/paver-patios">paver patios</Link> and <Link href="/paver-walkways">walkways</Link> because it revives colors that have dulled over time.
      </p>

      <h3>3. Wet Look / High-Gloss Sealer</h3>
      <p>
        For maximum visual impact, wet look sealers create a glossy, polished appearance that makes pavers look perpetually fresh and clean. This <strong>paver sealer</strong> type works beautifully on darker pavers and creates a striking contrast with surrounding landscaping. However, high-gloss sealers can be slippery when wet, so they&apos;re best for areas with good drainage and limited foot traffic during rain.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          For driveways and high-traffic areas, we recommend a color-enhancing sealer with a matte or semi-gloss finish. It provides great protection and visual improvement without becoming slippery. For decorative patios, a wet look sealer can create a stunning showcase effect.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>When Should You Seal Your Pavers?</h2>

      <SectionImage
        src="/images/E4.webp"
        alt="Professional paver sealing process on a California patio"
      />

      <p>
        Timing is everything when it comes to <strong>paver sealer</strong> application. Here&apos;s what you need to know:
      </p>

      <ul>
        <li><strong>New installations:</strong> Wait at least 30-60 days after installation before sealing. This allows any efflorescence (white mineral deposits) to work its way out naturally. Sealing too early traps efflorescence under the surface.</li>
        <li><strong>Re-sealing schedule:</strong> Most quality sealers last 3-5 years in California&apos;s climate. High-traffic areas like <Link href="/paver-driveways">driveways</Link> may need re-sealing every 2-3 years.</li>
        <li><strong>Best season:</strong> Spring and early fall are ideal for sealing in the Bay Area. You want dry weather with moderate temperatures — too hot and the sealer dries too quickly, leaving streaks.</li>
        <li><strong>Weather window:</strong> You need at least 24-48 hours of dry weather after application for proper curing.</li>
      </ul>

      <h2>DIY vs. Professional Paver Sealing</h2>

      <p>
        While applying <strong>paver sealer</strong> is something motivated homeowners can tackle, there&apos;s a significant difference between DIY results and professional application. Here&apos;s an honest comparison:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Surface Preparation', desc: 'Professionals pressure wash and deep-clean the surface, remove all stains, and re-sand joints before sealing. DIY often skips these critical steps.' },
          { title: 'Product Quality', desc: 'Pros use commercial-grade sealers that last 2-3x longer than consumer products available at hardware stores.' },
          { title: 'Application Technique', desc: 'Even coverage is crucial. Professionals use commercial sprayers and rollers for streak-free results. Uneven application creates blotchy, peeling sealer.' },
          { title: 'Joint Sand Stabilization', desc: 'Before sealing, joints should be filled with polymeric sand that hardens and locks in place. Pros ensure this step is done correctly.' },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-brand-orange mt-0.5 shrink-0" size={20} />
              <div>
                <p className="font-bold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p>
        At TP Pavers, our sealing service includes full surface cleaning, joint sand replacement with premium polymeric sand, and commercial-grade sealer application. The result is a finish that looks flawless and protects your pavers for years.
      </p>

      <h2>Paver Sealer Maintenance Tips</h2>

      <SectionImage
        src="/images/L2.webp"
        alt="Well-maintained sealed paver walkway in a California landscape"
      />

      <p>
        Once your <strong>paver sealer</strong> is applied, a little regular maintenance goes a long way in extending its life:
      </p>

      <ul>
        <li><strong>Regular sweeping:</strong> Remove leaves, dirt, and debris before they break down and stain the surface</li>
        <li><strong>Prompt stain cleanup:</strong> Blot oil or food spills immediately — sealed pavers resist stains, but prolonged exposure can still discolor the surface</li>
        <li><strong>Gentle cleaning:</strong> Use a garden hose or low-pressure washer for routine cleaning. Avoid harsh chemicals that can degrade the sealer</li>
        <li><strong>Watch for wear signs:</strong> When water no longer beads on the surface and colors start to dull, it&apos;s time to re-seal</li>
        <li><strong>Avoid de-icing salts:</strong> While less relevant in California, chemical de-icers can damage both pavers and sealer</li>
      </ul>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Keep a small amount of touch-up sealer on hand for high-traffic spots. Entry points and areas where you frequently move furniture may wear through sealer faster than the rest of the surface. A quick spot treatment can extend the time between full re-sealing.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>Why Trust TP Pavers for Paver Sealing</h2>

      <p>
        Sealing is the finishing touch that protects your entire hardscape investment. At <strong>TP Pavers</strong>, we don&apos;t just install pavers — we help you maintain them for a lifetime. Our team uses only premium, commercial-grade sealers and follows a meticulous prep-and-apply process that ensures lasting results.
      </p>

      <ul>
        <li><strong>20+ years of experience</strong> with Bay Area paver installations and maintenance</li>
        <li><strong>Lifetime guarantee</strong> on all paver installations</li>
        <li><strong>Commercial-grade products</strong> that outperform consumer options</li>
        <li><strong>Full-service approach</strong> — cleaning, sanding, and sealing in one visit</li>
        <li><strong>Family-owned and operated</strong> — your satisfaction is our reputation</li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Professional Paver Sealing Service
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Protect your paver investment with professional sealing. Contact us for a free estimate — we&apos;ll inspect your pavers, recommend the best sealer, and deliver a flawless finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+15106500080"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold px-6 py-3.5 rounded-full hover:bg-brand-orange-dark transition-all text-lg"
            >
              <Phone size={20} /> (510) 650-0080
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-gray-100 transition-all text-lg"
            >
              Request Quote Online <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
