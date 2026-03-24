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

export default function CurbAppealIdeas() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        First impressions matter — especially when it comes to your home. Whether you&apos;re planning to sell or simply want to be the pride of the neighborhood, investing in <strong>curb appeal ideas</strong> is one of the smartest moves you can make as a homeowner. Studies show that strong curb appeal can increase a home&apos;s value by up to 10%, and the right exterior improvements pay for themselves many times over.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been helping Bay Area homeowners boost their curb appeal for over 20 years. From stunning <Link href="/paver-driveways">paver driveways</Link> to elegant <Link href="/paver-walkways">walkways</Link> and <Link href="/retaining-walls">retaining walls</Link>, our family-owned team delivers transformative results backed by a <strong>lifetime guarantee</strong>. Here are our top curb appeal ideas that truly increase home value.
      </p>

      <h2>Upgrade Your Front Walkway</h2>

      <SectionImage
        src="/images/E7.webp"
        alt="Beautiful paver walkway enhancing home curb appeal"
      />

      <p>
        The path from your driveway or sidewalk to your front door sets the tone for your entire property. A cracked concrete walkway screams deferred maintenance, while a beautifully designed <Link href="/paver-walkways">paver walkway</Link> says &quot;this home is loved.&quot; It&apos;s one of the most impactful <strong>curb appeal ideas</strong> you can implement.
      </p>

      <p>
        Consider a gently curving walkway instead of a straight shot to the door. Curves create visual interest and slow visitors down, letting them appreciate your landscaping. Border the walkway with low plantings, decorative stones, or landscape lighting for added elegance. Matching the walkway pavers to your driveway creates a cohesive, planned aesthetic that buyers and neighbors notice immediately.
      </p>

      <ul>
        <li><strong>Quick win:</strong> Replace a concrete walkway with pavers — dramatic improvement in a few days</li>
        <li><strong>Level up:</strong> Add matching steps, a landing, and landscape lighting</li>
        <li><strong>Maximum impact:</strong> Coordinate walkway with driveway and patio pavers</li>
      </ul>

      <h2>Transform Your Driveway</h2>

      <p>
        Your driveway is the largest hardscape surface visible from the street, making it arguably the most important element in any <strong>curb appeal ideas</strong> plan. An old asphalt or cracked concrete driveway can drag down the appearance of even a recently renovated home.
      </p>

      <p>
        A <Link href="/paver-driveways">paver driveway</Link> offers a premium, high-end look that concrete and asphalt simply cannot match. With options ranging from classic brick-look pavers to natural stone and modern large-format tiles, there&apos;s a paver style for every home. The interlocking design means your driveway won&apos;t crack like concrete, and individual pavers can be replaced if damaged — protecting your investment for decades.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          The driveway apron — where your driveway meets the street — is the first thing visitors see when they approach your home. A contrasting paver color or pattern at the apron creates a welcoming &quot;entrance&quot; that frames the entire driveway and sets the tone for your property.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>Add Retaining Walls & Landscape Borders</h2>

      <SectionImage
        src="/images/E8.webp"
        alt="Retaining wall with landscape borders enhancing curb appeal"
      />

      <p>
        <Link href="/retaining-walls">Retaining walls</Link> aren&apos;t just functional — they&apos;re powerful <strong>curb appeal ideas</strong> that add dimension, structure, and visual interest to your front yard. Even on relatively flat lots, a low retaining wall along the driveway or property line creates defined planting beds and a polished, landscaped appearance.
      </p>

      <p>
        For sloped properties — common across Bay Area cities like <Link href="/oakland">Oakland</Link>, <Link href="/san-francisco">San Francisco</Link>, and the <Link href="/contra-costa-county">Contra Costa County</Link> hills — retaining walls are both essential and transformative. Tiered walls with built-in planters turn erosion-prone slopes into stunning landscape features that increase usable space and property value.
      </p>

      <ul>
        <li><strong>Low accent walls (1-2 ft):</strong> Define garden beds, frame the driveway, create visual borders</li>
        <li><strong>Medium walls (2-4 ft):</strong> Create terraces, level planting areas, add dramatic depth</li>
        <li><strong>Structural walls (4+ ft):</strong> Engineered solutions for serious slopes — we handle permits and engineering</li>
      </ul>

      <h2>Front Entry & Porch Upgrades</h2>

      <SectionImage
        src="/images/L3.webp"
        alt="Enhanced front entry with paver landing and landscaping"
      />

      <p>
        Your front entry is the culmination of your home&apos;s curb appeal journey — it&apos;s where all those <strong>curb appeal ideas</strong> come together. A well-designed entry includes more than just a nice door. Think about:
      </p>

      <ul>
        <li><strong>Paver landing:</strong> A generous paver landing at your front door provides a welcoming arrival space and protects against mud and water intrusion</li>
        <li><strong>Steps and risers:</strong> Paver or natural stone steps with matching risers create a polished, intentional transition from walkway to entry</li>
        <li><strong>Columns and pillars:</strong> Stone-veneered columns flanking the entry add architecture and presence</li>
        <li><strong>Planters and greenery:</strong> Potted plants, ornamental trees, or built-in planters soften the hardscape and add life</li>
        <li><strong>Lighting:</strong> Sconces, path lights, and step lights create ambiance and improve safety after dark</li>
      </ul>

      <h2>Landscape Lighting That Makes Everything Shine</h2>

      <SectionImage
        src="/images/L4.webp"
        alt="Landscape lighting enhancing curb appeal at night"
      />

      <p>
        One of the most underrated <strong>curb appeal ideas</strong> is landscape lighting. Proper lighting transforms your home&apos;s appearance after dark, highlights architectural features, and dramatically improves safety. The best part? Low-voltage LED landscape lights are energy-efficient and built to last for years.
      </p>

      <p>
        Key areas to light include: the driveway edges, walkway path, front entry, retaining walls, specimen trees, and any architectural details on your home&apos;s facade. Uplighting on trees creates dramatic shadows, while downlighting from eaves provides a natural moonlight effect. We integrate lighting into every hardscape project so the wiring is hidden and the fixtures are positioned perfectly.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Use warm-white LED lights (2700K-3000K) for landscape lighting. Cool white lights look harsh and institutional, while warm tones create an inviting, residential glow that makes your home feel welcoming. And always light the path to the front door — it&apos;s a safety essential.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>Putting It All Together: A Curb Appeal Action Plan</h2>

      <p>
        The most effective <strong>curb appeal ideas</strong> work together as a system. Here&apos;s our recommended order of priority for maximum impact:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: '1. Driveway First', desc: 'The largest visible surface makes the biggest impact. A paver driveway is the foundation of great curb appeal.' },
          { title: '2. Walkway Connection', desc: 'Link the driveway to the front door with a matching paver walkway. This creates flow and intentional design.' },
          { title: '3. Retaining Walls & Borders', desc: 'Add structure and dimension with walls and landscape borders. They define spaces and add visual depth.' },
          { title: '4. Lighting & Finishing Touches', desc: 'Landscape lighting, address pillars, and plantings are the details that take your curb appeal from good to extraordinary.' },
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

      <h2>Why Bay Area Homeowners Trust TP Pavers</h2>

      <p>
        Implementing these <strong>curb appeal ideas</strong> requires a team that handles everything — driveways, walkways, retaining walls, and finishing details — as one cohesive project. At <strong>TP Pavers</strong>, that&apos;s exactly what we do. With over 20 years of experience and a <strong>lifetime guarantee</strong>, we transform front yards across the Bay Area into show-stopping first impressions.
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all installations</li>
        <li><strong>One team for everything</strong> — pavers, walls, turf, drainage, and lighting</li>
        <li><strong>20+ years of Bay Area experience</strong></li>
        <li><strong>Licensed, insured, and family-owned</strong></li>
        <li><strong>Free on-site design consultation</strong></li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/livermore">Livermore</Link> to <Link href="/san-rafael">San Rafael</Link> to{' '}
        <Link href="/san-jose">San Jose</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Free Curb Appeal Consultation
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Ready to transform your home&apos;s first impression? Contact us for a free design consultation. We&apos;ll evaluate your property and create a custom curb appeal plan that fits your style and budget.
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
