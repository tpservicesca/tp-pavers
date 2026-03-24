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

export default function BackyardPatioIdeas() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        California&apos;s incredible weather means your backyard isn&apos;t just extra space — it&apos;s an extension of your home. With over 260 days of sunshine per year in the Bay Area, a beautifully designed patio becomes your outdoor living room, dining room, and entertainment hub all in one. If you&apos;re searching for <strong>backyard patio ideas</strong> that work perfectly with California&apos;s climate and lifestyle, you&apos;re in the right place.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been transforming Bay Area backyards for over 20 years. As a family-owned company backed by a <strong>lifetime guarantee</strong>, we bring expert craftsmanship and creative design to every patio project. Here are our favorite backyard patio ideas to inspire your outdoor transformation.
      </p>

      <h2>Classic Paver Patio with Elegant Patterns</h2>

      <SectionImage
        src="/images/P2.webp"
        alt="Beautiful paver patio with elegant pattern design by TP Pavers"
      />

      <p>
        A <Link href="/paver-patios">paver patio</Link> is the gold standard for California outdoor living. Unlike poured concrete, pavers offer endless design possibilities — from herringbone and running bond to fan patterns and custom borders. The interlocking design means individual pavers can be replaced if damaged, making your investment truly long-lasting.
      </p>

      <p>
        When exploring <strong>backyard patio ideas</strong>, consider how the paver pattern can define different zones in your outdoor space. A herringbone pattern creates a classic, formal feel, while a random ashlar layout offers a more relaxed, natural appearance. Our design team helps you choose the perfect pattern, color, and texture to complement your home&apos;s architecture.
      </p>

      <ul>
        <li><strong>Best materials:</strong> Interlocking concrete pavers, natural stone, travertine, porcelain</li>
        <li><strong>Popular patterns:</strong> Herringbone, running bond, basketweave, ashlar</li>
        <li><strong>Ideal for:</strong> Entertaining, dining, lounging, all-purpose outdoor living</li>
      </ul>

      <h2>Fire Pit Patio for Year-Round Entertaining</h2>

      <SectionImage
        src="/images/P3.webp"
        alt="Backyard patio with fire pit area designed by TP Pavers"
      />

      <p>
        One of the most popular <strong>backyard patio ideas</strong> we install is a dedicated fire pit area. Even in California, evenings can get cool — especially in Bay Area cities like <Link href="/concord">Concord</Link>, <Link href="/walnut-creek">Walnut Creek</Link>, and <Link href="/san-ramon">San Ramon</Link>. A built-in fire pit extends your patio season to 365 days and creates a natural gathering spot for family and friends.
      </p>

      <p>
        We design fire pit patios with complementary seat walls, curved layouts, and carefully chosen pavers that can withstand heat exposure. The fire pit itself can be gas-powered for convenience or wood-burning for that authentic campfire experience. Either way, it becomes the centerpiece of your backyard.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          When designing a fire pit patio, leave at least 6-8 feet of clearance between the fire pit edge and any seating or structures. This provides comfortable heat distribution and meets California fire safety codes. We handle all code requirements as part of your project.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>Outdoor Kitchen & Dining Patio</h2>

      <p>
        For the ultimate <strong>backyard patio ideas</strong> upgrade, consider an outdoor kitchen. California&apos;s climate is perfect for year-round outdoor cooking, and a well-designed patio with built-in grilling station, countertops, and dining area can completely transform how your family uses the backyard.
      </p>

      <p>
        The key to a successful outdoor kitchen patio is proper planning. You need a level, stable paver surface that can support the weight of stone countertops and appliances. You also need to plan for utility connections — gas, water, and electrical — before the pavers go down. At TP Pavers, we coordinate with licensed plumbers and electricians to ensure everything is ready before installation day.
      </p>

      <ul>
        <li><strong>Must-have features:</strong> Built-in grill, prep counter, seating bar, storage cabinets</li>
        <li><strong>Nice-to-have:</strong> Pizza oven, beverage refrigerator, sink, ambient lighting</li>
        <li><strong>Paver choice:</strong> Thick, durable pavers with non-slip texture for kitchen areas</li>
      </ul>

      <h2>Multi-Level Patio Design</h2>

      <SectionImage
        src="/images/P5.webp"
        alt="Multi-level paver patio design for California backyard"
      />

      <p>
        If your backyard has any slope at all — common throughout the Bay Area hills — a multi-level patio design turns that challenge into a stunning feature. By combining <Link href="/retaining-walls">retaining walls</Link> with paver platforms at different elevations, you create defined zones for cooking, dining, lounging, and entertaining.
      </p>

      <p>
        Multi-level <strong>backyard patio ideas</strong> also work on flat lots where you want to create visual interest and separation between activity zones. A raised dining area feels more intimate, while a sunken lounge space creates a cozy, sheltered atmosphere. Steps with integrated LED lighting connect the levels and add drama after dark.
      </p>

      <h2>California-Style Patio with Synthetic Turf</h2>

      <p>
        One of the most uniquely California <strong>backyard patio ideas</strong> is combining pavers with <Link href="/synthetic-turf">synthetic turf</Link>. This combination gives you the best of both worlds — a durable, beautiful patio surface for furniture and foot traffic, surrounded by lush green turf that never needs watering, mowing, or fertilizing.
      </p>

      <SectionImage
        src="/images/E2.webp"
        alt="Paver patio combined with synthetic turf in California backyard"
      />

      <p>
        This design is especially popular for families with kids and pets. The turf provides a soft play area while the pavers create a clean, stable surface for dining tables, grills, and seating. We install both the pavers and the turf as one integrated project — ensuring perfect transitions and proper drainage between surfaces.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          When combining pavers with synthetic turf, the transition edge is critical. We use a hidden aluminum edge restraint that creates a perfectly clean line between the paver surface and the turf — no gaps, no shifting, no visible hardware. This detail makes the difference between a DIY look and a professional installation.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>Patio Design Tips for California Homes</h2>

      <p>
        After designing hundreds of backyard patios across the Bay Area, we&apos;ve learned what works — and what doesn&apos;t — in California&apos;s unique climate. Here are our top tips:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Plan for Sun Exposure', desc: 'Map how the sun moves across your yard. Position dining areas in partial shade and lounge areas where you want full sun. A pergola or shade sail adds comfort during peak hours.' },
          { title: 'Think About Wind', desc: 'Bay Area breezes can be brisk. Use retaining walls, planting beds, or privacy screens as windbreaks for exposed patios.' },
          { title: 'Choose Light Colors Wisely', desc: 'Light-colored pavers stay cooler underfoot in summer but can create glare. We recommend warm tones that balance heat reflection and visual comfort.' },
          { title: 'Include Proper Drainage', desc: 'Even in dry California, rain events can be intense. We grade every patio with precise slope and install drainage solutions to keep water flowing away from your home.' },
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

      <h2>Why Bay Area Homeowners Choose TP Pavers</h2>

      <p>
        Your backyard patio is one of the biggest investments you&apos;ll make in your outdoor space — and it deserves expert attention. At <strong>TP Pavers</strong>, we bring over 20 years of experience, a <strong>lifetime guarantee</strong>, and a commitment to quality that&apos;s made us one of the most trusted paver contractors in the Bay Area.
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all patio installations</li>
        <li><strong>Full-service design and build</strong> — from concept to completion</li>
        <li><strong>Expert knowledge</strong> of California climate, soils, and building codes</li>
        <li><strong>One team for everything</strong> — pavers, retaining walls, turf, and landscaping</li>
        <li><strong>Family-owned values</strong> — we treat your home like our own</li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/oakland">Oakland</Link> to <Link href="/pleasanton">Pleasanton</Link> to{' '}
        <Link href="/san-jose">San Jose</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Free Backyard Patio Consultation
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Ready to bring your backyard patio ideas to life? Contact us for a free design consultation and estimate. We&apos;ll visit your property and create a custom plan tailored to your space and style.
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
