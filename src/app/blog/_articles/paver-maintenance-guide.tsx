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

export default function PaverMaintenanceGuide() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        Your paver driveway, patio, or walkway is built to last a lifetime — but like any investment, a little regular <strong>paver maintenance</strong> goes a long way in keeping it looking its best. The good news? Maintaining pavers is far easier than most homeowners expect. With the right routine, your pavers will look as good in 20 years as they do today.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been installing and maintaining paver surfaces across the Bay Area for over 20 years. Our family-owned team backs every installation with a <strong>lifetime guarantee</strong>, and we&apos;re always here to help with maintenance advice and professional services. Here&apos;s your complete guide to <strong>paver maintenance</strong>.
      </p>

      <h2>Regular Cleaning: The Foundation of Paver Care</h2>

      <SectionImage
        src="/images/L5.webp"
        alt="Clean, well-maintained paver surface in California landscape"
      />

      <p>
        The most important aspect of <strong>paver maintenance</strong> is regular cleaning. Leaves, dirt, pollen, and organic debris can accumulate on your pavers, and if left too long, they break down into a film that encourages moss, algae, and staining. A simple routine keeps this in check:
      </p>

      <ul>
        <li><strong>Weekly:</strong> Sweep or blow leaves and debris off the surface — a standard leaf blower works perfectly</li>
        <li><strong>Monthly:</strong> Rinse the surface with a garden hose to remove fine dust and pollen buildup</li>
        <li><strong>Quarterly:</strong> Inspect for any weeds starting in joints and pull them before they establish</li>
        <li><strong>Annually:</strong> Deep clean with a pressure washer (1,500-2,000 PSI) or professional cleaning service</li>
      </ul>

      <p>
        For routine cleaning, avoid harsh chemical cleaners — they can discolor pavers and damage the joint sand. A mixture of mild dish soap and warm water handles most surface stains. For tougher jobs, specialized paver cleaners are available that are formulated to clean without causing damage.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          When pressure washing pavers, always use a fan tip (25° or 40°) — never a zero-degree tip. Hold the wand at an angle to the surface and keep it moving. Direct, perpendicular blasting can erode joint sand and damage the paver surface. Consistent, sweeping passes give the best results.
        </p>
      </div>

      <h2>Weed Prevention: Keeping Joints Clean</h2>

      <p>
        Weeds growing between pavers are the #1 <strong>paver maintenance</strong> concern homeowners have. The good news is that weeds are entirely preventable with the right approach:
      </p>

      <ul>
        <li><strong>Polymeric sand:</strong> This is the single most effective weed prevention tool. Polymeric sand hardens when wet, creating a solid joint that weeds can&apos;t penetrate. We use premium polymeric sand on every installation and recommend re-applying it when joints begin to erode.</li>
        <li><strong>Sealing:</strong> A quality paver sealer stabilizes the joint sand and creates a surface that discourages organic growth. Sealed pavers have dramatically fewer weed issues than unsealed ones.</li>
        <li><strong>Regular sweeping:</strong> Weeds need soil to germinate. When organic matter like decomposed leaves accumulates in joints, it creates a mini growing medium. Regular sweeping removes this before weeds can take hold.</li>
        <li><strong>Spot treatment:</strong> For occasional weeds that do appear, pull them by hand or use a targeted, paver-safe herbicide. Avoid broad-spectrum weed killers that can stain the surface.</li>
      </ul>

      <InlineCTA variant="secondary" />

      <h2>Joint Sand Replacement</h2>

      <SectionImage
        src="/images/L7.webp"
        alt="Paver joint sand maintenance and replacement process"
      />

      <p>
        Over time, the sand between your pavers will erode — especially on <Link href="/paver-driveways">driveways</Link> where vehicle traffic, rain, and pressure washing gradually wash it away. Depleted joint sand leads to loose pavers, increased weed growth, and ant infestations. Regular joint sand maintenance is a critical part of <strong>paver maintenance</strong>.
      </p>

      <p>
        Here&apos;s how to know when your joints need attention:
      </p>

      <ul>
        <li>Joints appear deeper than when installed (more than ⅛&quot; below the paver surface)</li>
        <li>Pavers feel slightly loose or shift when walked on</li>
        <li>Ant hills appear along paver edges or in joint lines</li>
        <li>Weeds grow more frequently despite regular cleaning</li>
        <li>Joint sand is visibly missing in areas</li>
      </ul>

      <p>
        To re-sand your joints, sweep dry polymeric sand across the surface, working it into all joints with a broom or vibrating plate compactor. Then mist the surface with water to activate the polymeric binding agents. It&apos;s a straightforward process, but getting the moisture level right is critical — too much water washes the sand out, too little won&apos;t activate it. Our team offers professional re-sanding services that ensure perfect results every time.
      </p>

      <h2>Stain Removal Guide</h2>

      <p>
        Stains happen — but with proper <strong>paver maintenance</strong> knowledge, most can be removed completely. Here&apos;s how to tackle the most common stains:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Oil & Grease', desc: 'Blot immediately with absorbent material (cat litter works great). Apply a degreaser, scrub with a stiff brush, and rinse. For old stains, a poultice or commercial paver degreaser may be needed.' },
          { title: 'Rust Stains', desc: 'Caused by metal furniture, fertilizer, or irrigation water. Use a paver-specific rust remover — never bleach, which can discolor pavers. Prevention: use furniture pads under metal legs.' },
          { title: 'Organic Stains (Leaves, Berries)', desc: 'Pressure wash with a mild detergent solution. For stubborn stains, an oxygen-based cleaner (like OxiClean) is effective and paver-safe. Regular sweeping prevents most organic staining.' },
          { title: 'Efflorescence (White Haze)', desc: 'A natural mineral deposit that appears on new pavers. It typically disappears on its own within 6-12 months. For persistent cases, an efflorescence cleaner removes it without damage.' },
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

      <h2>Sealing Schedule & Best Practices</h2>

      <SectionImage
        src="/images/E11.webp"
        alt="Professionally sealed pavers showing enhanced color and protection"
      />

      <p>
        Sealing is an optional but highly recommended part of <strong>paver maintenance</strong>. A quality sealer protects against UV fading, stains, weed growth, and joint sand erosion. Here&apos;s the recommended schedule:
      </p>

      <ul>
        <li><strong>First seal:</strong> 30-60 days after installation (allow efflorescence to clear first)</li>
        <li><strong>Re-seal schedule:</strong> Every 3-5 years for most California conditions</li>
        <li><strong>High-traffic areas:</strong> <Link href="/paver-driveways">Driveways</Link> and heavy-use <Link href="/paver-patios">patios</Link> may benefit from re-sealing every 2-3 years</li>
        <li><strong>Best season:</strong> Spring or early fall — moderate temperatures and dry weather for proper curing</li>
      </ul>

      <p>
        Always clean and re-sand your pavers thoroughly before applying sealer. Sealing over dirty or depleted joints traps problems underneath and reduces the sealer&apos;s effectiveness. Our professional sealing service includes complete surface preparation as part of every application.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Always test sealer on a small, inconspicuous area before applying it to your entire surface. Different paver materials and colors can react differently to sealers. What looks great on a gray paver may darken a cream paver more than expected. A test patch lets you see the final result before committing.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>When to Call a Professional</h2>

      <p>
        Most routine <strong>paver maintenance</strong> is manageable for homeowners. However, some situations call for professional expertise:
      </p>

      <ul>
        <li><strong>Significant settling or unevenness:</strong> Pavers that have sunk or heaved need to be lifted, the base corrected, and the pavers relaid — a job that requires professional tools and experience</li>
        <li><strong>Large-scale re-sanding:</strong> Full driveway or patio re-sanding is more efficient with professional equipment</li>
        <li><strong>Sealer application:</strong> Even coverage with commercial-grade products delivers superior, longer-lasting results</li>
        <li><strong>Stubborn stains:</strong> Professional cleaners have access to specialized chemicals and equipment</li>
        <li><strong>Drainage issues:</strong> If water pools on your pavers instead of draining, the base or grading may need attention</li>
      </ul>

      <h2>Why Trust TP Pavers for Maintenance</h2>

      <p>
        At <strong>TP Pavers</strong>, we don&apos;t just install and walk away. We build long-term relationships with our clients, providing ongoing <strong>paver maintenance</strong> support and services whenever needed. Our team has 20+ years of experience maintaining paver surfaces in the Bay Area&apos;s unique conditions.
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all installations</li>
        <li><strong>Professional cleaning, sanding, and sealing services</strong></li>
        <li><strong>20+ years of Bay Area experience</strong></li>
        <li><strong>Family-owned</strong> — we&apos;re invested in your long-term satisfaction</li>
        <li><strong>Free maintenance consultations</strong></li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/concord">Concord</Link> to <Link href="/fremont">Fremont</Link> to{' '}
        <Link href="/san-francisco">San Francisco</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Professional Paver Maintenance Services
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Need help keeping your pavers in perfect condition? Contact us for professional cleaning, re-sanding, sealing, and repair services. We&apos;ll restore your pavers to like-new condition.
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
