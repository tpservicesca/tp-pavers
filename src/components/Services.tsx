import Image from 'next/image';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
          FEATURED SERVICES:
        </div>
        <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-[50px] leading-[1.2]">
          Expert Paver Installation for Patios, Driveways &amp; Outdoor Spaces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[900px] mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(234,88,12,0.15)]"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={400}
                height={220}
                className="w-full h-[220px] object-cover"
                loading="lazy"
              />
              <div className="p-[25px] flex flex-col flex-grow">
                <h3 className="text-[1.4rem] font-bold text-brand-black mb-2.5">
                  {service.name}
                </h3>
                <p className="text-[0.95rem] text-slate-600 leading-[1.6] mb-5">
                  {service.description}
                </p>
                <ul className="p-0 m-0 mb-[25px] flex-grow">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="service-feature text-slate-600 mb-2.5 flex items-start text-[0.95rem]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block bg-gradient-to-br from-brand-orange to-brand-orange-light text-white py-3.5 px-[25px] rounded-lg font-bold text-center transition-all duration-300 shadow-[0_4px_15px_rgba(234,88,12,0.2)] hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(234,88,12,0.3)]"
                >
                  Get a quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
