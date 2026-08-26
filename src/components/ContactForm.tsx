'use client';

import { FormEvent } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    let ok = false;
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      ok = res.ok;
    } catch {
      ok = false;
    }
    if (!ok) {
      alert('Something went wrong sending your message. Please call us at (510) 804-1550.');
      return;
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18276139527/uD6xCOLB8cocEIeE34pE',
        value: 1.0,
        currency: 'USD',
      });
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Contact Form',
        value: 1,
      });
    }
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-left font-redhat">
          FAST AND EASY
        </div>
        <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-left mb-[35px] leading-[1.2]">
          Ready to transform your space?
        </h2>
        <form onSubmit={handleSubmit} className="max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              name="name"
              placeholder="First Name - Last Name"
              required
              className="w-full py-4 px-5 border border-slate-200 rounded-[10px] font-poppins text-[0.95rem] text-brand-black bg-white outline-none transition-all duration-300 focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(234,88,12,0.1)] placeholder:text-slate-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              pattern="[0-9\s\-]{10,15}"
              required
              className="w-full py-4 px-5 border border-slate-200 rounded-[10px] font-poppins text-[0.95rem] text-brand-black bg-white outline-none transition-all duration-300 focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(234,88,12,0.1)] placeholder:text-slate-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              name="city"
              placeholder="Project city"
              required
              className="w-full py-4 px-5 border border-slate-200 rounded-[10px] font-poppins text-[0.95rem] text-brand-black bg-white outline-none transition-all duration-300 focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(234,88,12,0.1)] placeholder:text-slate-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full py-4 px-5 border border-slate-200 rounded-[10px] font-poppins text-[0.95rem] text-brand-black bg-white outline-none transition-all duration-300 focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(234,88,12,0.1)] placeholder:text-slate-500"
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
              className="w-full py-4 px-5 border border-slate-200 rounded-[10px] font-poppins text-[0.95rem] text-brand-black bg-white outline-none transition-all duration-300 focus:border-brand-orange focus:shadow-[0_0_0_3px_rgba(234,88,12,0.1)] placeholder:text-slate-500 resize-y min-h-[140px]"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-brand-orange text-white py-3.5 px-10 rounded-lg text-base font-bold cursor-pointer border-none transition-all duration-300 shadow-[0_4px_15px_rgba(234,88,12,0.25)] hover:bg-brand-orange-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(234,88,12,0.35)] font-poppins"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
