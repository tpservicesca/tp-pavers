import CounterAnimation from './CounterAnimation';
import Reviews from './Reviews';

export default function About() {
  return (
    <section id="us" className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-[60px] items-stretch">
          {/* Video */}
          <div className="relative h-full">
            <div className="relative rounded-xl overflow-hidden shadow-[6px_6px_18px_0px_rgba(0,0,0,0.3)] h-full">
              <video controls className="w-full h-full object-cover rounded-xl">
                <source type="video/mp4" src="/video/tp-services.mp4" />
              </video>
              {/* Logo Overlay */}
              <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 bg-white/[0.92] px-[25px] py-5 rounded-[10px] text-center">
                <div className="flex flex-col items-center gap-0.5">
                  <span className="font-oswald text-[2rem] font-bold text-brand-black leading-none">TP</span>
                  <svg className="my-1" width="30" height="30" viewBox="0 0 100 100" fill="none">
                    <rect x="30" y="10" width="14" height="14" rx="1" transform="rotate(45 37 17)" fill="#1a1a1a" />
                    <rect x="46" y="10" width="14" height="14" rx="1" transform="rotate(45 53 17)" fill="#1a1a1a" />
                    <rect x="30" y="26" width="14" height="14" rx="1" transform="rotate(45 37 33)" fill="#1a1a1a" />
                    <rect x="46" y="26" width="14" height="14" rx="1" transform="rotate(45 53 33)" fill="#1a1a1a" />
                  </svg>
                  <span className="font-oswald text-[1.5rem] font-semibold text-brand-black leading-none">PAVERS</span>
                  <span className="text-[0.55rem] text-slate-500 tracking-[2px] uppercase">CALIFORNIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
              ABOUT US
            </div>
            <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-5 leading-[1.2]">
              Our History
            </h2>
            <div className="text-slate-600 text-[0.95rem] leading-[1.8] mb-10 space-y-4">
              <p>
                TP Pavers is a family-owned company with over 20 years of experience specializing in outdoor transformations across the San Francisco Bay Area. Based in Pinole, California, we provide high-quality paver installation, hardscape design, and landscaping services tailored to enhance residential and commercial properties.
              </p>
              <p>
                Our team is committed to delivering durable, visually appealing outdoor spaces using premium materials and expert craftsmanship. We combine professional-grade results with personalized customer service and competitive pricing, making us a trusted choice for homeowners throughout the Bay Area.
              </p>
              <p>
                At TP Pavers, we stand behind our work with a 10-year warranty, ensuring long-lasting results and complete customer satisfaction.
              </p>
            </div>
            <CounterAnimation />
            <Reviews />
          </div>
        </div>
      </div>
    </section>
  );
}
