import { MapPin } from 'lucide-react';

export default function ServiceAreaMap() {
  return (
    <section id="map" className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
          BAY AREA
        </div>
        <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-[50px] leading-[1.2]">
          We&apos;re local, and everywhere
        </h2>
        <div className="relative bg-white rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden border-2 border-orange-200">
          {/* Map Header */}
          <div className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white p-8 flex flex-col md:flex-row justify-between items-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10" />
            <div className="relative z-[1] text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-[1.5rem] md:text-[2rem] font-bold mb-2 text-white">
                Interactive Service Map
              </h3>
              <p className="opacity-90 text-base">
                Click on any marker to see detailed information about our services in that area
              </p>
            </div>
            <div className="relative z-[1] bg-white/20 p-4 rounded-[10px] backdrop-blur-[10px] border border-white/30">
              <div className="flex gap-8 text-white justify-center">
                <div className="text-center">
                  <span className="block text-2xl font-bold">28</span>
                  <span>Cities</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold">100+</span>
                  <span>Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[400px] md:h-[600px] w-full bg-slate-100 flex flex-col items-center justify-center gap-4 text-slate-500">
            <MapPin size={64} className="text-brand-orange" />
            <p className="text-lg font-semibold text-brand-black">Interactive Map Coming Soon</p>
            <p className="text-sm text-slate-500 max-w-md text-center">
              Serving the entire San Francisco Bay Area including East Bay, North Bay, and Peninsula — 28 cities and counting.
            </p>
          </div>

          {/* Map Footer */}
          <div className="bg-slate-50 p-8 text-center border-t border-slate-200">
            <p className="mb-4 text-slate-500 text-base">
              Serving the entire San Francisco Bay Area with professional paver installation
            </p>
            <span className="inline-flex items-center bg-gradient-to-br from-brand-orange to-brand-orange-light text-white py-2 px-6 rounded-full text-base font-bold">
              &#x1F4CD; 20+ Years Local Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
