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

export default function PaversVsConcrete() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        It&apos;s the question every homeowner faces when planning a driveway, patio, or walkway project: <strong>pavers vs concrete</strong> — which one is better? Both have their place, but when you compare durability, aesthetics, long-term costs, and resale value, the answer becomes clear. This comprehensive guide breaks down everything you need to know to make the right choice for your California home.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve installed both paver and concrete surfaces for over 20 years across the Bay Area. Our family-owned team has seen firsthand how each material performs over time — and we stand behind our paver installations with a <strong>lifetime guarantee</strong>. Here&apos;s an honest, side-by-side comparison.
      </p>

      <h2>Durability: How They Hold Up Over Time</h2>

      <SectionImage
        src="/images/E9.webp"
        alt="Durable paver installation compared to concrete surface"
      />

      <p>
        When it comes to <strong>pavers vs concrete</strong>, durability is where pavers truly shine. Here&apos;s why:
      </p>

      <p>
        <strong>Concrete</strong> is a rigid slab. When the ground beneath it shifts — due to tree roots, soil expansion, earthquakes, or settling — the concrete cracks. And once concrete cracks, it&apos;s nearly impossible to repair invisibly. Patching is always visible and the patches themselves often crack again. In California, where seismic activity and expansive clay soils are common, concrete cracking isn&apos;t a question of &quot;if&quot; but &quot;when.&quot;
      </p>

      <p>
        <strong>Pavers</strong>, on the other hand, are individual units laid on a flexible base of compacted aggregate and sand. When the ground moves, pavers flex and shift with it — absorbing movement without cracking. If a single paver does get damaged (from a heavy impact, for example), you simply lift it out and replace it. The repair is invisible and the integrity of the entire surface remains intact.
      </p>

      <ul>
        <li><strong>Concrete lifespan:</strong> 15-25 years before significant cracking and deterioration</li>
        <li><strong>Paver lifespan:</strong> 50+ years with minimal maintenance — and pavers can be lifted, re-leveled, and relaid if needed</li>
      </ul>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Interlocking pavers are rated for compressive strength of 8,000+ PSI — nearly four times stronger than standard poured concrete (typically 2,500-3,000 PSI). The individual units are incredibly hard, and the flexible base system absorbs the stresses that destroy rigid concrete slabs.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>Aesthetics: Design Options Compared</h2>

      <SectionImage
        src="/images/E10.webp"
        alt="Beautiful paver design showing aesthetic advantages over plain concrete"
      />

      <p>
        In the <strong>pavers vs concrete</strong> debate, aesthetics is where pavers absolutely dominate. Standard poured concrete offers one look: a flat, gray surface. Yes, you can stamp it, stain it, or add exposed aggregate — but these decorative treatments wear off over time, fade in UV light, and can look patchy within a few years.
      </p>

      <p>
        Pavers offer an almost unlimited range of design possibilities:
      </p>

      <ul>
        <li><strong>Colors:</strong> Dozens of colors from warm earth tones to cool grays and charcoals — colors are integral to the paver, not surface-applied, so they don&apos;t fade or peel</li>
        <li><strong>Patterns:</strong> Herringbone, running bond, basketweave, ashlar, fan, and more — each creates a distinct visual character</li>
        <li><strong>Textures:</strong> Smooth, tumbled, textured, slate-look, wood-look — match any architectural style</li>
        <li><strong>Shapes:</strong> Rectangular, square, irregular, interlocking — mix and match for custom designs</li>
        <li><strong>Borders:</strong> Contrasting border pavers frame the installation for a polished, finished look</li>
      </ul>

      <p>
        With pavers, your <Link href="/paver-driveways">driveway</Link>, <Link href="/paver-patios">patio</Link>, or <Link href="/paver-walkways">walkway</Link> becomes a design feature — not just a functional surface.
      </p>

      <h2>Long-Term Cost: The Real Comparison</h2>

      <p>
        Many homeowners initially consider concrete because it appears cheaper upfront. But the <strong>pavers vs concrete</strong> cost comparison looks very different over the lifetime of your project:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Installation Cost', desc: 'Concrete has a lower initial cost per square foot. Pavers cost more upfront due to materials and labor-intensive installation. However, the gap is smaller than most people think.' },
          { title: 'Repair Costs', desc: 'Concrete repairs are expensive and always visible. Paver repairs are simple and invisible — lift the damaged unit, replace it, done. This alone can save thousands over the life of the project.' },
          { title: 'Replacement Timeline', desc: 'Concrete driveways typically need full replacement every 15-25 years. Pavers last 50+ years and can be re-leveled without replacement. One paver installation outlasts two concrete pours.' },
          { title: 'Home Value Impact', desc: 'Real estate professionals consistently report that paver driveways and patios command higher home values than concrete. The premium look translates directly to premium pricing.' },
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
        When you factor in longevity, repair costs, and home value impact, pavers are the clear winner in the long-term cost analysis. The slightly higher upfront investment pays dividends for decades.
      </p>

      <h2>Repair & Maintenance Compared</h2>

      <p>
        This is where the <strong>pavers vs concrete</strong> comparison really favors pavers. Maintenance and repair are dramatically easier:
      </p>

      <SectionImage
        src="/images/P10.webp"
        alt="Easy paver repair and maintenance compared to cracked concrete"
      />

      <p>
        <strong>Concrete maintenance:</strong> Seal every 1-2 years to prevent staining and moisture damage. When cracks appear, options are limited to patching (visible), mud-jacking (temporary), or full replacement (expensive). Stains from oil, rust, or organic matter become permanent without sealing. Tree root damage often requires full slab removal.
      </p>

      <p>
        <strong>Paver maintenance:</strong> Sweep periodically, pull occasional weeds (or seal to prevent them), and re-sand joints every few years. If you need to access underground utilities, pavers lift up and go back down — try that with concrete. Stains? Power wash. Damaged paver? Replace just that one. Settlement? Lift the affected area, add base material, and relay the pavers — good as new.
      </p>

      <h2>Resale Value: What Buyers Prefer</h2>

      <p>
        Real estate agents and home stagers overwhelmingly report that <strong>pavers vs concrete</strong> is no contest when it comes to buyer appeal. Paver driveways and patios are consistently listed among the top curb appeal features that attract buyers and justify premium pricing.
      </p>

      <p>
        In competitive Bay Area markets like <Link href="/walnut-creek">Walnut Creek</Link>, <Link href="/danville">Danville</Link>, <Link href="/pleasanton">Pleasanton</Link>, and <Link href="/san-ramon">San Ramon</Link>, homes with paver hardscaping stand out from the crowd. Buyers perceive pavers as a premium, well-maintained property feature — which translates to faster sales and higher offers.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          If you&apos;re planning to sell within 3-5 years, a paver driveway or patio is one of the highest-ROI exterior improvements you can make. The visual impact is immediate, and it signals to buyers that the property has been well cared for throughout.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>The Verdict: Why Pavers Win</h2>

      <p>
        After 20+ years of installing both pavers and concrete, here&apos;s our honest assessment of the <strong>pavers vs concrete</strong> debate:
      </p>

      <ul>
        <li><strong>Choose concrete if:</strong> Budget is your only consideration and you need the absolute lowest upfront cost for a temporary or utility-focused surface</li>
        <li><strong>Choose pavers if:</strong> You want beauty, durability, design flexibility, easy repairs, higher home value, and a surface that lasts a lifetime</li>
      </ul>

      <p>
        For the vast majority of Bay Area homeowners, pavers are the smarter long-term investment. They look better, last longer, and add more value to your property.
      </p>

      <h2>Why Choose TP Pavers</h2>

      <p>
        When you choose pavers, choosing the right installer is just as important as choosing the right material. At <strong>TP Pavers</strong>, we bring over 20 years of experience, expert base preparation, and a <strong>lifetime guarantee</strong> that gives you peace of mind for decades.
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all paver installations</li>
        <li><strong>20+ years of Bay Area experience</strong></li>
        <li><strong>Proper base engineering</strong> — the foundation that prevents settling and shifting</li>
        <li><strong>Licensed, insured, and family-owned</strong></li>
        <li><strong>Free estimates</strong> — we&apos;ll show you exactly what pavers can do for your property</li>
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
            See What Pavers Can Do for Your Home
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Ready to upgrade from concrete to pavers? Contact us for a free, no-obligation estimate. We&apos;ll show you the design options and help you choose the perfect solution for your property.
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
