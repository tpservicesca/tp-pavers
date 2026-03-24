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

export default function PermeablePaversGuide() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        As California faces increasingly strict stormwater regulations and homeowners look for sustainable ways to improve their properties, <strong>permeable pavers</strong> have emerged as one of the smartest driveway and hardscape solutions available. These innovative paving systems allow rainwater to filter through the surface and into the ground below — reducing runoff, preventing flooding, and helping recharge local groundwater supplies.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been installing permeable pavers across the Bay Area for over 20 years. As a family-owned company with a <strong>lifetime guarantee</strong> on every project, we help California homeowners make environmentally responsible choices without sacrificing beauty or durability. Here&apos;s everything you need to know about permeable pavers and why they might be the perfect fit for your next project.
      </p>

      <h2>What Are Permeable Pavers?</h2>

      <SectionImage
        src="/images/D2.webp"
        alt="Permeable paver driveway installation by TP Pavers in the Bay Area"
      />

      <p>
        <strong>Permeable pavers</strong> are specially designed paving units that allow water to pass through the surface and into a prepared aggregate base beneath. Unlike traditional concrete or asphalt — which create impervious surfaces that send rainwater rushing into storm drains — permeable pavers work with nature to manage stormwater right where it falls.
      </p>

      <p>
        There are several types of permeable paving systems, but the most common for residential driveways and patios are interlocking concrete pavers with widened joints. These joints are filled with small aggregate stone instead of sand, creating channels for water to flow downward through a layered base of gravel and crushed stone before soaking into the native soil.
      </p>

      <p>
        The result? A beautiful, durable surface that functions as its own stormwater management system. No puddles, no runoff, no contribution to local flooding — just clean, filtered water returning to the earth.
      </p>

      <h2>How Do Permeable Pavers Work?</h2>

      <p>
        The science behind permeable pavers is elegant in its simplicity. The system relies on multiple layers working together:
      </p>

      <ul>
        <li><strong>Surface layer:</strong> Interlocking pavers with spacer bars that create consistent gaps between each unit</li>
        <li><strong>Joint fill:</strong> Small crushed aggregate (not sand) fills the joints, allowing water to pass through</li>
        <li><strong>Bedding layer:</strong> A thin layer of small aggregate that supports the pavers and provides initial filtration</li>
        <li><strong>Base reservoir:</strong> A deep layer of open-graded aggregate that stores water temporarily as it percolates into the soil</li>
        <li><strong>Subgrade:</strong> The native soil, which absorbs the filtered water over time</li>
      </ul>

      <p>
        When rain falls on a permeable paver surface, it flows through the joints and into the reservoir base. This base can hold a significant volume of water — enough to handle even heavy California rainstorms — and slowly releases it into the ground over hours or days. The system essentially mimics natural ground absorption that existed before development.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          The base reservoir under permeable pavers can be designed to hold different volumes of water depending on your soil type and local rainfall data. In Bay Area clay soils, we typically install a deeper base with an underdrain to ensure the system performs flawlessly year after year.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>Benefits of Choosing Permeable Pavers</h2>

      <SectionImage
        src="/images/D3.webp"
        alt="Eco-friendly permeable paver driveway with excellent drainage"
      />

      <p>
        The advantages of <strong>permeable pavers</strong> extend far beyond stormwater management. Here&apos;s why more California homeowners are choosing this eco-friendly solution for their <Link href="/paver-driveways">driveways</Link>, <Link href="/paver-patios">patios</Link>, and <Link href="/paver-walkways">walkways</Link>:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Stormwater Management', desc: 'Eliminates surface runoff, prevents puddles and flooding, and reduces strain on municipal storm drains.' },
          { title: 'Groundwater Recharge', desc: 'Filtered rainwater percolates into the soil, replenishing local aquifers — critical in drought-prone California.' },
          { title: 'Pollution Reduction', desc: 'The aggregate base acts as a natural filter, trapping oils, heavy metals, and sediments before they reach groundwater.' },
          { title: 'Heat Island Reduction', desc: 'Permeable surfaces absorb less heat than asphalt, keeping your property and neighborhood cooler in summer.' },
          { title: 'Durability & Strength', desc: 'Interlocking permeable pavers are just as strong as traditional pavers — rated for vehicular traffic and heavy loads.' },
          { title: 'Design Flexibility', desc: 'Available in a wide range of colors, patterns, and textures to complement any home style.' },
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

      <h2>California Stormwater Regulations & Permeable Pavers</h2>

      <p>
        California has some of the strictest stormwater regulations in the country, and they&apos;re only getting tighter. Many Bay Area cities and counties now require new construction and major renovations to incorporate stormwater management features on-site. <strong>Permeable pavers</strong> are one of the most effective — and attractive — ways to meet these requirements.
      </p>

      <p>
        In areas like <Link href="/contra-costa-county">Contra Costa County</Link>, <Link href="/alameda-county">Alameda County</Link>, and <Link href="/san-mateo-county">San Mateo County</Link>, projects that add significant impervious surface area may trigger C.3 stormwater requirements. Installing permeable pavers can help you avoid expensive retention systems or bioswales, since the pavers themselves serve as your stormwater treatment facility.
      </p>

      <p>
        Some municipalities even offer incentives — like reduced stormwater fees or expedited permits — for homeowners who install permeable paving systems. Our team at TP Pavers stays current with local regulations across the Bay Area and can advise you on whether permeable pavers make sense for your specific project and jurisdiction.
      </p>

      <h2>Permeable Paver Maintenance: What to Expect</h2>

      <SectionImage
        src="/images/D5.webp"
        alt="Well-maintained permeable paver driveway in California"
      />

      <p>
        One of the most common questions we get is about maintaining <strong>permeable pavers</strong>. The good news? They&apos;re surprisingly low-maintenance. Here&apos;s what&apos;s involved:
      </p>

      <ul>
        <li><strong>Regular sweeping or vacuuming:</strong> Periodically remove debris from the surface and joints to keep the system draining properly. A standard leaf blower works great for routine maintenance.</li>
        <li><strong>Joint aggregate replenishment:</strong> Over time, some of the small aggregate in the joints may wash away or compact. Top off the joints every year or two to maintain optimal permeability.</li>
        <li><strong>Avoid sealing:</strong> Unlike traditional pavers, permeable pavers should not be sealed — sealer would block the water flow that makes the system work.</li>
        <li><strong>Professional cleaning:</strong> Every 2–3 years, consider having the joints professionally vacuumed and refilled to restore maximum drainage capacity.</li>
      </ul>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Keep landscaping beds adjacent to your permeable paver driveway properly mulched and edged. Soil and mulch washing onto the pavers is the #1 cause of clogged joints. A clean border means less maintenance and better performance.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>Are Permeable Pavers Right for Your Property?</h2>

      <p>
        <strong>Permeable pavers</strong> work beautifully for driveways, patios, walkways, pool decks, and parking areas. They&apos;re particularly well-suited for:
      </p>

      <ul>
        <li>Properties with drainage problems or standing water issues</li>
        <li>New construction projects that need to meet stormwater requirements</li>
        <li>Homeowners who want an eco-friendly alternative to traditional hardscaping</li>
        <li>Properties near creeks, wetlands, or sensitive waterways</li>
        <li>Anyone who wants to eliminate puddles and ice on their driveway</li>
      </ul>

      <p>
        However, permeable pavers aren&apos;t ideal for every situation. Steep slopes, extremely poor-draining soils, or areas with high water tables may require additional engineering. That&apos;s why a professional site evaluation is essential — and it&apos;s something we provide free of charge.
      </p>

      <h2>Why Bay Area Homeowners Trust TP Pavers</h2>

      <p>
        Installing permeable pavers correctly requires specialized knowledge and experience. The base preparation, aggregate selection, and grading are critical to long-term performance. At <strong>TP Pavers</strong>, we&apos;ve been building permeable paver systems throughout the Bay Area for over two decades. Our team understands local soil conditions, drainage patterns, and municipal regulations — so your installation performs perfectly from day one.
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all paver installations</li>
        <li><strong>20+ years of experience</strong> with Bay Area soils and conditions</li>
        <li><strong>Full-service approach</strong> — we handle design, excavation, base prep, and installation</li>
        <li><strong>Licensed and insured</strong> — your property is always protected</li>
        <li><strong>Free on-site consultations</strong> — we evaluate your property and recommend the best solution</li>
      </ul>

      <p>
        We proudly serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/concord">Concord</Link> to <Link href="/san-francisco">San Francisco</Link> to{' '}
        <Link href="/san-jose">San Jose</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Free Permeable Paver Consultation
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Curious whether permeable pavers are right for your driveway or patio? Contact us for a free site evaluation and estimate. We&apos;ll assess your property and recommend the perfect solution.
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
