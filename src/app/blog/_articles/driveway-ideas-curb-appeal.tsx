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

export default function DrivewayIdeasCurbAppeal() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        Your driveway is the first thing people see when they visit your home — and one of the first things potential buyers notice. The right <strong>driveway ideas</strong> can dramatically transform your home&apos;s curb appeal, boost property value, and make a lasting impression. Whether you&apos;re replacing a cracked concrete slab or designing a brand-new approach, paver driveways offer unmatched beauty and durability.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been transforming Bay Area driveways for over 20 years. Our family-owned team specializes in <Link href="/paver-driveways">paver driveway installations</Link> that combine stunning design with the <strong>lifetime guarantee</strong> our clients have come to expect. Here are our top driveway ideas to boost your home&apos;s curb appeal.
      </p>

      <h2>The Power of a Driveway Transformation</h2>

      <p>
        Nothing illustrates the impact of great <strong>driveway ideas</strong> better than a before-and-after comparison. Take a look at this transformation from one of our Bay Area projects:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="relative h-[250px] rounded-xl overflow-hidden shadow-md">
          <Image src="/images/hero-before.webp" alt="Before: old cracked concrete driveway" fill className="object-cover" />
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">BEFORE</div>
        </div>
        <div className="relative h-[250px] rounded-xl overflow-hidden shadow-md">
          <Image src="/images/hero-after.webp" alt="After: beautiful paver driveway by TP Pavers" fill className="object-cover" />
          <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">AFTER</div>
        </div>
      </div>

      <p>
        The difference is dramatic. A worn, cracked concrete driveway makes even a beautiful home look neglected. Replace it with interlocking pavers, and suddenly the entire property feels polished, intentional, and well-cared-for. That&apos;s the power of investing in the right <strong>driveway ideas</strong>.
      </p>

      <h2>Paver Driveway Design Patterns</h2>

      <SectionImage
        src="/images/D6.webp"
        alt="Beautiful paver driveway with herringbone pattern by TP Pavers"
      />

      <p>
        One of the biggest advantages of choosing pavers for your driveway is the incredible variety of patterns available. Each pattern creates a different mood and complements different architectural styles:
      </p>

      <ul>
        <li><strong>Herringbone:</strong> The strongest interlock pattern — ideal for driveways because it distributes vehicle weight evenly and resists shifting</li>
        <li><strong>Running bond:</strong> Clean, linear look that elongates the driveway and complements modern homes</li>
        <li><strong>Basketweave:</strong> Traditional woven pattern perfect for colonial, craftsman, and Mediterranean homes</li>
        <li><strong>Random ashlar:</strong> Mixed paver sizes create a natural stone look with sophisticated character</li>
        <li><strong>Fan or circle pattern:</strong> European-inspired design that creates a dramatic focal point, especially in motor courts</li>
      </ul>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          For driveways, we always recommend herringbone or running bond patterns — they provide the strongest interlock and best resist the lateral forces from vehicle turning and braking. Some patterns that look great on patios can shift over time when used on driveways without proper engineering.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>Material Options for Your Driveway</h2>

      <p>
        When exploring <strong>driveway ideas</strong>, the material you choose matters as much as the pattern. Here are the most popular options we install:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Interlocking Concrete Pavers', desc: 'The most popular choice. Incredibly durable, available in endless colors and shapes, and easy to repair if damaged. They flex with the ground instead of cracking.' },
          { title: 'Natural Stone Pavers', desc: 'Travertine, bluestone, and granite offer unmatched elegance. Each piece is unique. Premium material for homes that demand the very best.' },
          { title: 'Porcelain Pavers', desc: 'Ultra-modern, virtually zero maintenance, and available in stunning faux-wood and faux-stone finishes. Extremely stain-resistant.' },
          { title: 'Permeable Pavers', desc: 'Eco-friendly option that allows rainwater to filter through. Meets California stormwater requirements while looking beautiful.' },
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

      <h2>Driveway Ideas That Maximize ROI</h2>

      <SectionImage
        src="/images/P9.webp"
        alt="Elegant paver driveway increasing home value and curb appeal"
      />

      <p>
        A new driveway isn&apos;t just about looks — it&apos;s one of the smartest investments you can make in your property. According to real estate experts, curb appeal improvements like a paver driveway can significantly increase your home&apos;s market value and reduce time on market when selling.
      </p>

      <p>
        Here are the <strong>driveway ideas</strong> that deliver the best return on investment:
      </p>

      <ul>
        <li><strong>Replace cracked concrete with pavers:</strong> The single most impactful driveway upgrade. The visual difference is dramatic and buyers love the premium look.</li>
        <li><strong>Add a decorative border:</strong> A contrasting border frame costs relatively little extra but makes the driveway look custom and high-end.</li>
        <li><strong>Extend to a paver walkway:</strong> Connect your driveway to the front door with a matching <Link href="/paver-walkways">paver walkway</Link> for a cohesive, polished look.</li>
        <li><strong>Include landscape lighting:</strong> Low-voltage lights along the driveway edge create nighttime drama and improve safety.</li>
        <li><strong>Coordinate with other hardscaping:</strong> Match your driveway pavers to your <Link href="/paver-patios">patio</Link> and <Link href="/retaining-walls">retaining walls</Link> for a unified property aesthetic.</li>
      </ul>

      <h2>Creative Driveway Accents & Details</h2>

      <p>
        The details separate an ordinary driveway from an extraordinary one. Here are some creative <strong>driveway ideas</strong> and accents that elevate any installation:
      </p>

      <ul>
        <li><strong>Contrasting apron:</strong> A different paver color or pattern at the street entrance creates a welcoming threshold</li>
        <li><strong>Center medallion:</strong> A circular or diamond pattern in the middle of a motor court makes a jaw-dropping focal point</li>
        <li><strong>Paver-and-turf ribbons:</strong> Strips of <Link href="/synthetic-turf">synthetic turf</Link> between paver tracks create a European estate look while reducing impervious surface area</li>
        <li><strong>Heated driveway systems:</strong> Radiant heating under pavers eliminates ice and puddles — a premium feature for luxury homes</li>
        <li><strong>Matching address pillars:</strong> Stone or paver pillars at the driveway entrance with your house number add instant prestige</li>
      </ul>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Consider the view from inside your home, not just from the street. Many homeowners spend more time looking at their driveway through a window than standing at the curb. Design a driveway that looks beautiful from every angle — including above.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>Why Bay Area Homeowners Trust TP Pavers</h2>

      <p>
        Your driveway is one of the largest visible surfaces on your property — getting it right matters. At <strong>TP Pavers</strong>, we bring over 20 years of experience, a meticulous installation process, and a <strong>lifetime guarantee</strong> to every driveway project. Our team handles everything from design and excavation to base preparation, paver installation, and final sealing.
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all driveway installations</li>
        <li><strong>20+ years of Bay Area experience</strong> — we know local soils and conditions</li>
        <li><strong>Proper base engineering</strong> — 6-8&quot; compacted aggregate base for driveways that never settle</li>
        <li><strong>Licensed, insured, and permit-ready</strong></li>
        <li><strong>Family-owned</strong> — your driveway is our reputation</li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/danville">Danville</Link> to <Link href="/oakland">Oakland</Link> to{' '}
        <Link href="/palo-alto">Palo Alto</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Free Driveway Design Consultation
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Ready to transform your driveway? Contact us for a free on-site consultation. We&apos;ll evaluate your property, discuss your driveway ideas, and provide a detailed estimate — no obligation.
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
