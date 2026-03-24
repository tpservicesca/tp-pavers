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

export default function RetainingWallIdeas() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        A well-designed retaining wall does more than hold back soil — it transforms your outdoor space into a stunning,
        functional landscape feature. Whether you&apos;re dealing with a sloped yard, want to create tiered garden beds, or need
        to add visual drama to a flat property, <strong>retaining walls</strong> are one of the most impactful investments you
        can make in your California home.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve been designing and building retaining walls across the Bay Area for over
        20 years. From simple garden borders to large-scale structural walls, our team delivers expert craftsmanship with a{' '}
        <strong>lifetime guarantee</strong> on every project. Here are our top retaining wall ideas to inspire your next
        outdoor project.
      </p>

      <h2>1. Natural Stone Retaining Walls</h2>

      <SectionImage
        src="/images/R3.webp"
        alt="Natural stone retaining wall installation by TP Pavers in California"
      />

      <p>
        Nothing beats the timeless beauty of natural stone. Flagstone, fieldstone, and limestone retaining walls blend
        seamlessly with California landscapes, creating an organic look that only gets better with age. Each stone is unique,
        giving your wall a one-of-a-kind character that manufactured materials simply can&apos;t replicate.
      </p>

      <ul>
        <li><strong>Best for:</strong> Garden terraces, accent walls, natural landscaping</li>
        <li><strong>Durability:</strong> 50–100+ years with minimal maintenance</li>
        <li><strong>Style:</strong> Rustic, Mediterranean, modern farmhouse</li>
      </ul>

      <p>
        Our installation team hand-selects each stone for fit and aesthetic, ensuring your wall looks intentional —
        not random. We also install proper drainage behind every wall to prevent water damage and extend its lifespan.
      </p>

      <h2>2. Segmental Block Retaining Walls</h2>

      <SectionImage
        src="/images/R5.webp"
        alt="Segmental block retaining wall with clean lines by TP Pavers"
      />

      <p>
        Segmental retaining wall blocks are the most popular choice for residential projects — and for good reason.
        They&apos;re engineered for strength, available in dozens of colors and textures, and they interlock without mortar
        for a clean, uniform appearance.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Segmental blocks with built-in setback create a naturally battered (leaning-in) wall that&apos;s structurally
          stronger and doesn&apos;t require geogrid reinforcement for walls under 4 feet. This saves you time and money
          without sacrificing durability.
        </p>
      </div>

      <ul>
        <li><strong>Best for:</strong> Terraced yards, driveway borders, raised patios</li>
        <li><strong>Durability:</strong> 50+ years, virtually maintenance-free</li>
        <li><strong>Style:</strong> Contemporary, traditional, any home style</li>
      </ul>

      {/* CTA handled by page wrapper */}

      <h2>3. Tiered Retaining Walls with Planting Beds</h2>

      <SectionImage
        src="/images/R4.webp"
        alt="Tiered retaining wall with landscaping and planting beds"
      />

      <p>
        Why build one wall when you can create a stunning multi-level landscape? Tiered retaining walls turn steep
        slopes into usable, beautiful terraces — perfect for planting beds, seating areas, or display gardens. This
        is one of the most popular requests we get from Bay Area homeowners with hillside properties.
      </p>

      <p>
        Each tier can feature different plants, lighting, or materials for a dynamic look that adds depth and dimension
        to your yard. Our team handles the full design — from grading and drainage to plant selection and landscape lighting.
      </p>

      <h2>4. Retaining Wall with Integrated Seating</h2>

      <p>
        A retaining wall doesn&apos;t have to be just structural. By capping your wall with smooth, wide capstones or adding a
        built-in seat wall, you create functional outdoor seating that doubles as a design element. This is perfect for:
      </p>

      <ul>
        <li>Fire pit areas — seat walls around a fire pit create a cozy gathering spot</li>
        <li>Patio borders — define your outdoor living space with style</li>
        <li>Pool surrounds — elegant raised walls with integrated seating</li>
        <li>Front yard accent walls — add curb appeal and a place to sit</li>
      </ul>

      <SectionImage
        src="/images/projects/patio-curved-seatwall.webp"
        alt="Curved retaining seat wall around patio by TP Pavers"
      />

      <h2>5. Retaining Walls with Paver Patios</h2>

      <p>
        The ultimate outdoor living combo: a retaining wall paired with a beautiful{' '}
        <Link href="/paver-patios">paver patio</Link>. The wall creates the level surface, and the pavers provide a
        stunning, durable floor for your outdoor room. At TP Pavers, we specialize in this combination — we design
        the wall and patio together as one cohesive project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="relative h-[250px] rounded-xl overflow-hidden shadow-md">
          <Image src="/images/projects/patio-retaining-wall.webp" alt="Paver patio with retaining wall" fill className="object-cover" />
        </div>
        <div className="relative h-[250px] rounded-xl overflow-hidden shadow-md">
          <Image src="/images/R1.webp" alt="Retaining wall with paver integration" fill className="object-cover" />
        </div>
      </div>

      <p>
        This combination is especially popular for Bay Area homes with sloped backyards. We handle everything — excavation,
        drainage, the retaining wall, and the paver installation — so you have one team, one warranty, and one stunning result.
      </p>

      {/* Single mid-article CTA removed — final CTA is in the page wrapper */}

      <h2>6. Modern Smooth-Face Retaining Walls</h2>

      <p>
        For contemporary homes, smooth-faced concrete blocks or poured concrete retaining walls offer a sleek, minimalist
        look. These walls feature clean lines, uniform color, and a refined texture that complements modern architecture.
        Pair them with architectural landscaping — ornamental grasses, succulents, LED strip lighting — for a truly
        magazine-worthy result.
      </p>

      <h2>7. Retaining Walls for Driveways</h2>

      <SectionImage
        src="/images/R6.webp"
        alt="Retaining wall along driveway installation"
      />

      <p>
        California&apos;s hilly terrain means many driveways need retaining walls for both function and aesthetics. A well-built
        wall along your <Link href="/paver-driveways">paver driveway</Link> prevents erosion, defines the driveway edge,
        and adds serious curb appeal.
      </p>

      <h2>How to Choose the Right Retaining Wall</h2>

      <p>Choosing the right retaining wall comes down to a few key factors:</p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Wall Height', desc: 'Under 4 ft? Simple gravity wall works. Over 4 ft? You need engineered reinforcement (we handle permits too).' },
          { title: 'Soil & Drainage', desc: 'Clay soil? Steep slope? Every site is different. We evaluate your specific conditions before recommending a solution.' },
          { title: 'Aesthetic Goals', desc: 'Natural stone for rustic charm, segmental blocks for clean lines, or poured concrete for ultra-modern.' },
          { title: 'Budget & Timeline', desc: 'We offer options at every price point and provide transparent estimates so there are no surprises.' },
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

      <h2>Why California Homeowners Trust TP Pavers</h2>

      <SectionImage
        src="/images/projects/team-working.webp"
        alt="TP Pavers team installing retaining wall in California"
      />

      <p>
        With <strong>over 20 years of experience</strong> serving the Bay Area, TP Pavers isn&apos;t just another contractor.
        We&apos;re a family-owned company that takes pride in every single project. Here&apos;s what sets us apart:
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all retaining wall installations</li>
        <li><strong>Licensed and fully insured</strong> — your property is protected</li>
        <li><strong>Expert drainage design</strong> — we prevent water problems before they start</li>
        <li><strong>Permit handling</strong> — we manage the entire process for walls over 4 feet</li>
        <li><strong>One team, one warranty</strong> — we do walls, pavers, turf, and landscaping in-house</li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/concord">Concord</Link> to <Link href="/san-francisco">San Francisco</Link> to{' '}
        <Link href="/san-jose">San Jose</Link>.
      </p>

      {/* Final CTA handled by page wrapper */}
    </div>
  );
}
