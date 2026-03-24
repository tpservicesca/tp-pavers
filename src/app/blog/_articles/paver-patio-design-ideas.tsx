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

export default function PaverPatioDesignIdeas() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-oswald prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline">
      <p className="text-xl text-gray-600 leading-relaxed !mt-0">
        A paver patio is so much more than a flat surface in your backyard — it&apos;s the foundation of your outdoor living space. The right design can turn an ordinary yard into a stunning retreat that reflects your personal style and adds significant value to your home. If you&apos;re looking for <strong>paver patio ideas</strong> and design inspiration, we&apos;ve compiled our favorite layouts, patterns, and color combinations from over two decades of installations.
      </p>

      <p>
        At <strong>TP Pavers</strong>, we&apos;ve designed and built hundreds of paver patios across the Bay Area. As a family-owned company with a <strong>lifetime guarantee</strong> on every project, we combine creative design with expert craftsmanship. Here are the <strong>paver patio ideas</strong> that our clients love most.
      </p>

      <h2>Herringbone Pattern: The Timeless Classic</h2>

      <SectionImage
        src="/images/P6.webp"
        alt="Herringbone paver patio pattern installed by TP Pavers"
      />

      <p>
        The herringbone pattern is arguably the most popular and visually striking of all <strong>paver patio ideas</strong>. Pavers are laid at 45° or 90° angles to create a zigzag pattern that&apos;s not only beautiful but also one of the strongest interlocking configurations available. This pattern distributes weight evenly across the surface, making it ideal for driveways and patios that see heavy furniture or foot traffic.
      </p>

      <p>
        Herringbone works with virtually any paver shape and size, but rectangular pavers in a 2:1 ratio (like 4&quot;×8&quot; or 6&quot;×12&quot;) create the most classic look. For a modern twist, try oversized pavers in a herringbone layout — the larger units create a bolder, more contemporary feel.
      </p>

      <ul>
        <li><strong>Best for:</strong> <Link href="/paver-driveways">Driveways</Link>, patios, pool decks, high-traffic areas</li>
        <li><strong>Style vibe:</strong> Classic elegance, transitional, traditional</li>
        <li><strong>Difficulty:</strong> Moderate — requires precise cutting at borders</li>
      </ul>

      <h2>Running Bond: Clean and Contemporary</h2>

      <p>
        Running bond (also called a stretcher bond) is a simple, linear pattern where pavers are offset by half their length — think of a classic brick wall laid on the ground. This is one of the most versatile <strong>paver patio ideas</strong> because it works with any architectural style, from cottage charm to ultra-modern minimalism.
      </p>

      <p>
        The clean lines of running bond draw the eye in one direction, which you can use strategically to make a narrow patio appear wider or a short walkway appear longer. For added interest, alternate paver colors in every other row or add a contrasting soldier course border.
      </p>

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Running bond is the most material-efficient pattern because it generates the least waste from cuts at the edges. If you&apos;re working with premium pavers like natural stone or porcelain, running bond helps you get the most beauty from your budget.
        </p>
      </div>

      <InlineCTA variant="secondary" />

      <h2>Basketweave & Pinwheel Patterns</h2>

      <SectionImage
        src="/images/P8.webp"
        alt="Basketweave paver patio pattern with decorative border"
      />

      <p>
        For homeowners who want their <strong>paver patio ideas</strong> to stand out from the neighbors, basketweave and pinwheel patterns offer eye-catching alternatives. Basketweave arranges pairs of pavers in alternating horizontal and vertical sets, creating a woven texture that&apos;s particularly beautiful in warm, earthy tones.
      </p>

      <p>
        Pinwheel (or windmill) pattern uses a combination of square and rectangular pavers arranged around a central point. This creates a geometric, medallion-like effect across the entire surface. It&apos;s an excellent choice for defined patio spaces and courtyard areas where you want the pattern to be the star of the show.
      </p>

      <ul>
        <li><strong>Basketweave best for:</strong> Garden patios, cottage-style homes, Mediterranean aesthetics</li>
        <li><strong>Pinwheel best for:</strong> Courtyards, accent areas, formal gardens</li>
        <li><strong>Color tip:</strong> Two-tone color schemes make these patterns pop</li>
      </ul>

      <h2>Color Combinations That Wow</h2>

      <p>
        Beyond pattern, color is where your <strong>paver patio ideas</strong> really come to life. Modern pavers are available in an incredible range of colors — from warm sandstone and terracotta to cool slate gray and charcoal. The right combination depends on your home&apos;s exterior, your personal taste, and the mood you want to create.
      </p>

      <SectionImage
        src="/images/E5.webp"
        alt="Beautiful paver color combination on California patio"
      />

      <p>Here are some of our most popular color combinations for Bay Area homes:</p>

      <ul>
        <li><strong>Warm Blend:</strong> Mix of tan, brown, and terracotta for a Mediterranean feel — perfect for stucco homes</li>
        <li><strong>Cool Contemporary:</strong> Charcoal pavers with light gray borders for a modern, sleek look</li>
        <li><strong>Natural Elegance:</strong> Earth-toned pavers with random color variation that mimics natural stone</li>
        <li><strong>Bold Contrast:</strong> Dark field pavers with a bright cream or white border for dramatic definition</li>
        <li><strong>Monochromatic:</strong> Single color in varying shades for subtle texture without visual clutter</li>
      </ul>

      <h2>Design Tips for Stunning Paver Patios</h2>

      <SectionImage
        src="/images/E6.webp"
        alt="Expertly designed paver patio with border detail by TP Pavers"
      />

      <p>
        After designing hundreds of patios, we&apos;ve learned what elevates good <strong>paver patio ideas</strong> to great ones. Here are our insider design tips:
      </p>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Add a Decorative Border', desc: 'A soldier course or contrasting border frames your patio like a picture frame, giving it a polished, intentional look that separates amateur from professional design.' },
          { title: 'Mix Materials Thoughtfully', desc: 'Combine pavers with natural stone accents, decorative pebble bands, or concrete borders. Variety adds richness, but limit yourself to 2-3 materials to avoid visual chaos.' },
          { title: 'Create Defined Zones', desc: 'Use different patterns or colors to delineate areas — a circular pattern under the dining table, herringbone for the main field, a different color for the cooking zone.' },
          { title: 'Consider Scale', desc: 'Large pavers make small spaces feel bigger. Small pavers create intricate detail in larger areas. Match paver size to your patio proportions.' },
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

      <div className="bg-orange-50 border-l-4 border-brand-orange p-5 rounded-r-xl my-8 not-prose">
        <p className="font-bold text-gray-900 mb-2">💡 Pro Tip from Our Team</p>
        <p className="text-gray-700">
          Always view paver samples outdoors in natural light before making your final selection. Colors look dramatically different under store lighting versus California sunshine. We bring full-size samples to your property so you can see exactly how they&apos;ll look next to your home.
        </p>
      </div>

      {/* CTA handled by page wrapper */}

      <h2>Integrating Your Patio with the Landscape</h2>

      <p>
        The best <strong>paver patio ideas</strong> don&apos;t exist in isolation — they connect seamlessly with the surrounding landscape. Consider how your patio relates to <Link href="/paver-walkways">walkways</Link>, garden beds, <Link href="/retaining-walls">retaining walls</Link>, and <Link href="/synthetic-turf">turf areas</Link>. Curved patio edges that flow into planting beds feel more organic than sharp 90° corners. A matching paver walkway connecting your patio to the driveway or side yard creates visual continuity throughout your property.
      </p>

      <p>
        Lighting is another crucial element. Low-voltage LED lights along patio edges, built into <Link href="/retaining-walls">retaining walls</Link>, or recessed into steps transform your patio from a daytime space into a magical evening retreat. We integrate lighting design into every patio project to ensure your outdoor space shines around the clock.
      </p>

      <h2>Why Choose TP Pavers for Your Patio Design</h2>

      <p>
        Turning your <strong>paver patio ideas</strong> into reality requires a team that understands both design and installation. At <strong>TP Pavers</strong>, we combine creative vision with over 20 years of hands-on experience to deliver patios that are as beautiful as they are durable.
      </p>

      <ul>
        <li><strong>Lifetime guarantee</strong> on all patio installations</li>
        <li><strong>Free design consultation</strong> — we create a custom layout tailored to your space</li>
        <li><strong>Expert pattern installation</strong> — precision cuts and perfect alignment on every project</li>
        <li><strong>Full-service team</strong> — pavers, retaining walls, turf, drainage, and lighting</li>
        <li><strong>Family-owned for 20+ years</strong> — Bay Area roots, Bay Area pride</li>
      </ul>

      <p>
        We serve homeowners across <Link href="/contra-costa-county">Contra Costa County</Link>,{' '}
        <Link href="/alameda-county">Alameda County</Link>, <Link href="/marin-county">Marin County</Link>,{' '}
        <Link href="/san-mateo-county">San Mateo County</Link>, <Link href="/santa-clara-county">Santa Clara County</Link>,
        and <Link href="/solano-county">Solano County</Link> — from{' '}
        <Link href="/walnut-creek">Walnut Creek</Link> to <Link href="/fremont">Fremont</Link> to{' '}
        <Link href="/san-francisco">San Francisco</Link>.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-10 not-prose">
        <div className="text-center">
          <p className="font-oswald text-2xl md:text-3xl font-bold mb-2">
            Free Paver Patio Design Consultation
          </p>
          <p className="text-gray-300 mb-5 max-w-lg mx-auto">
            Have paver patio ideas you&apos;d love to bring to life? Contact us for a free on-site design consultation. We&apos;ll help you choose the perfect pattern, colors, and layout for your space.
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
