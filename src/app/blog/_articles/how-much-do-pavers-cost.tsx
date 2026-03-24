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

export default function HowMuchDoPaversCost() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        &quot;<strong>How much do pavers cost</strong>?&quot; — it&apos;s one of the first questions every California homeowner asks when planning a driveway, patio, or walkway project. The honest answer is: it depends. Paver projects vary widely based on material choice, project size, site conditions, and design complexity. In this guide, we&apos;ll break down all the factors that influence pricing so you can plan your project with confidence.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been installing paver surfaces across the Bay Area for over 20 years. As a family-owned company with a <strong>lifetime guarantee</strong>, we believe in transparency — which is why we provide free, detailed estimates for every project. While we can&apos;t give a one-size-fits-all price, we can help you understand exactly what goes into the cost of your specific project.
      </p>

      <h2>Factors That Affect Paver Cost</h2>

      <SectionImage
        src="/images/R7.webp"
        alt="Paver installation project showing various factors that affect cost"
      />

      <p>
        When asking &quot;<strong>how much do pavers cost</strong>,&quot; it&apos;s important to understand that the final price is determined by several interconnected factors. Here are the main variables:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Paver Material Type', desc: 'Standard concrete pavers are the most affordable. Natural stone (travertine, bluestone, granite) costs significantly more. Porcelain pavers fall in between. Each material has different durability and aesthetic properties.' },
          { title: 'Project Size', desc: 'Larger projects benefit from economies of scale — the per-square-foot cost typically decreases as the project grows. A 200 sq ft patio will cost more per square foot than a 1,000 sq ft driveway.' },
          { title: 'Design Complexity', desc: 'Simple running bond patterns are faster and more material-efficient. Intricate patterns like herringbone or custom designs require more cuts, more labor, and generate more waste.' },
          { title: 'Site Conditions', desc: 'Existing surface removal, slope grading, drainage requirements, soil type, and access difficulty all affect labor and material needs. A flat, clear site costs less than a sloped lot with poor soil.' },
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

      <h2>Material Types & Their Cost Tiers</h2>

      <p>
        One of the biggest factors in <strong>how much do pavers cost</strong> is the material you choose. Here&apos;s a general overview of the main material categories from most affordable to premium:
      </p>

      <ul>
        <li><strong>Standard concrete interlocking pavers:</strong> The most popular and cost-effective option. Available in a wide range of colors, shapes, and textures. Excellent durability and the broadest design flexibility. This is what most homeowners choose for <Link href="/paver-driveways">driveways</Link> and <Link href="/paver-patios">patios</Link>.</li>
        <li><strong>Tumbled or textured concrete pavers:</strong> A step up from standard, these pavers have an aged or natural stone look created through a tumbling process. They offer more character and visual depth at a moderate price increase.</li>
        <li><strong>Porcelain pavers:</strong> Ultra-modern, extremely low maintenance, and available in stunning faux-stone and faux-wood finishes. Porcelain is harder and more stain-resistant than concrete but comes at a higher material cost.</li>
        <li><strong>Natural stone pavers:</strong> Travertine, bluestone, flagstone, and granite offer unmatched natural beauty. Each piece is unique. Natural stone is the premium choice for luxury installations and carries the highest material cost.</li>
      </ul>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Don&apos;t choose pavers based on material cost alone. Consider the total value — including longevity, maintenance requirements, and aesthetic impact. A slightly more expensive paver that lasts decades and requires less maintenance can actually be more economical over time than the cheapest option.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>What&apos;s Included in a Professional Paver Installation</h2>

      <SectionImage
        src="/images/R8.webp"
        alt="Professional paver installation process showing base preparation"
      />

      <p>
        When evaluating <strong>how much do pavers cost</strong>, make sure you understand what&apos;s included in the estimate. A reputable contractor&apos;s price should cover the full installation process, not just laying pavers on the ground:
      </p>

      <ul>
        <li><strong>Demolition and removal:</strong> Removing your existing surface (concrete, asphalt, etc.) and disposing of debris properly</li>
        <li><strong>Excavation:</strong> Digging to the proper depth for the base system — typically 8-10 inches for driveways, 6-8 inches for patios</li>
        <li><strong>Base preparation:</strong> Installing and compacting multiple layers of aggregate to create a stable, well-draining foundation</li>
        <li><strong>Edge restraints:</strong> Aluminum or concrete borders that keep pavers from shifting outward over time</li>
        <li><strong>Sand bedding:</strong> A precise layer of sand that pavers are set into for level, uniform installation</li>
        <li><strong>Paver installation:</strong> Laying and cutting pavers according to the design pattern</li>
        <li><strong>Polymeric sand:</strong> Filling joints with premium polymeric sand that hardens to prevent weeds and ant infestations</li>
        <li><strong>Compaction:</strong> Final vibrating compaction that locks all pavers into place</li>
        <li><strong>Cleanup:</strong> Removing all construction debris and leaving your property clean</li>
      </ul>

      <p>
        At TP Pavers, all of these steps are included in every estimate. Beware of contractors who quote a low price but exclude essential steps like proper base preparation or polymeric sand — these shortcuts lead to premature failure.
      </p>

      <h2>Project Type & Size Considerations</h2>

      <p>
        The type and size of your project significantly impacts <strong>how much do pavers cost</strong>. Here&apos;s how different project types compare:
      </p>

      <ul>
        <li><strong><Link href="/paver-walkways">Walkways</Link>:</strong> Typically the smallest projects. The narrow width means more edge cutting per square foot, but the overall cost is lower due to smaller total area.</li>
        <li><strong><Link href="/paver-patios">Patios</Link>:</strong> Mid-range in both size and cost. Design complexity varies widely — a simple rectangular patio costs less than one with curves, built-in fire pit, or seat walls.</li>
        <li><strong><Link href="/paver-driveways">Driveways</Link>:</strong> Require a heavier base system for vehicle traffic, which adds to preparation costs. However, the larger area means better per-square-foot pricing.</li>
        <li><strong>Pool decks:</strong> Require specific paver types rated for pool environments and non-slip surfaces. Additional drainage considerations add to the project scope.</li>
        <li><strong>Full property transformations:</strong> When you combine driveway, walkway, patio, and <Link href="/retaining-walls">retaining walls</Link> in one project, you get the best overall value because of shared mobilization, equipment, and material deliveries.</li>
      </ul>

      <h2>How to Get an Accurate Estimate</h2>

      <SectionImage
        src="/images/R9.webp"
        alt="TP Pavers team providing on-site estimate for paver project"
      />

      <p>
        Online cost calculators and national averages can give you a rough ballpark, but they can&apos;t account for your specific site conditions, local material availability, and Bay Area labor markets. The only way to get an accurate answer to &quot;<strong>how much do pavers cost</strong>&quot; for your project is a professional on-site estimate.
      </p>

      <p>
        Here&apos;s what to look for in a quality estimate:
      </p>

      <ul>
        <li><strong>On-site visit:</strong> Any contractor who quotes a price without seeing your property is guessing. Site conditions affect pricing significantly.</li>
        <li><strong>Detailed line items:</strong> A good estimate breaks down demolition, base work, materials, labor, and any additional features separately.</li>
        <li><strong>Material specifications:</strong> The estimate should specify the exact paver brand, style, and color — not just &quot;concrete pavers.&quot;</li>
        <li><strong>Base system details:</strong> How deep is the aggregate base? What type of sand? What edge restraint? These details determine longevity.</li>
        <li><strong>Warranty information:</strong> What&apos;s covered and for how long? At TP Pavers, we include a lifetime guarantee on every project.</li>
        <li><strong>Timeline:</strong> A clear start date and estimated completion timeframe.</li>
      </ul>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Get at least 2-3 estimates and compare them carefully. The lowest price isn&apos;t always the best value. Look at what&apos;s included, the contractor&apos;s experience and reviews, and the warranty offered. A well-installed paver surface with a lifetime guarantee is worth more than a cheap installation that fails in a few years.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>The ROI of Paver Installation</h2>

      <p>
        While understanding <strong>how much do pavers cost</strong> upfront is important, it&apos;s equally important to consider the return on investment. Pavers consistently deliver strong ROI in several ways:
      </p>

      <ul>
        <li><strong>Home value increase:</strong> A paver driveway or patio can significantly increase your home&apos;s market value, with real estate professionals reporting strong returns on hardscape investments</li>
        <li><strong>Longevity:</strong> With a 50+ year lifespan, pavers outlast concrete (15-25 years) and asphalt (10-15 years) — meaning you invest once instead of replacing multiple times</li>
        <li><strong>Low maintenance costs:</strong> Pavers require minimal ongoing maintenance compared to concrete (which cracks) or asphalt (which needs re-sealing every 2-3 years)</li>
        <li><strong>Curb appeal:</strong> The visual impact is immediate and lasting — pavers make your property stand out in the neighborhood and on real estate listings</li>
        <li><strong>Repairability:</strong> If damage occurs, you replace individual pavers — not the entire surface. This dramatically reduces lifetime maintenance costs.</li>
      </ul>

      <h2>Why Choose TP Pavers for Your Project</h2>

      <p>
        When you&apos;re ready to move beyond &quot;<strong>how much do pavers cost</strong>&quot; and into actually planning your project, TP Pavers is here to help. Our free, no-obligation estimates are detailed, transparent, and tailored to your specific property and goals.
      </p>

      <ul>
        <li><strong>Free on-site estimates</strong> — we visit your property and provide a detailed, line-item quote</li>
        <li><strong>Lifetime guarantee</strong> on all installations</li>
        <li><strong>20+ years of Bay Area experience</strong></li>
        <li><strong>Family-owned and operated</strong> — we treat every project like it&apos;s our own home</li>
        <li><strong>Transparent pricing</strong> — no hidden fees, no surprises</li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/walnut-creek">Walnut Creek</Link> to <Link href="/oakland">Oakland</Link> to{' '}
        <Link href="/san-jose">San Jose</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Get Your Free Paver Estimate
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Every project is unique, and the best way to know exactly what your paver project will cost is a free, on-site estimate from our experienced team. No obligation, no pressure — just honest numbers.
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
              Request Free Estimate <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
