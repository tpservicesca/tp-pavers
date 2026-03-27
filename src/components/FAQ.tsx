'use client';

import { useState } from 'react';
import { faqsColumn1, faqsColumn2 } from '@/data/faqs';
import type { FAQ as FAQType } from '@/data/faqs';
import { TrackLink } from './TrackLink';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-left font-redhat">
          FAQ&apos;S
        </div>
        <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-left mb-10 leading-[1.2]">
          Common questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
          <div className="flex flex-col gap-[15px]">
            {faqsColumn1.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
          </div>
          <div className="flex flex-col gap-[15px]">
            {faqsColumn2.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
            <TrackLink
              href="tel:+15106500080"
              event="phone_call"
              category="Contact"
              label="tel:+15106500080"
              className="flex justify-center items-center gap-2 bg-gradient-to-br from-brand-orange to-brand-orange-light text-white py-4 px-[30px] rounded-[10px] text-[1.05rem] font-bold text-center transition-all duration-300 shadow-[0_4px_15px_rgba(234,88,12,0.25)] hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(234,88,12,0.35)]"
            >
              &#x1F4DE; Call now
            </TrackLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: FAQType }) {
  const [open, setOpen] = useState(faq.defaultOpen ?? false);

  return (
    <div className="border-[3px] border-brand-orange-dark rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_15px_rgba(234,88,12,0.1)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-[18px] px-[22px] bg-white border-none cursor-pointer text-left font-poppins text-[0.95rem] font-bold text-brand-black gap-[15px] leading-[1.4]"
      >
        <span>{faq.question}</span>
        <span
          className={`text-[0.75rem] shrink-0 text-brand-black transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          &#9660;
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="px-[22px] pb-[18px] text-slate-600 text-[0.9rem] leading-[1.6]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
