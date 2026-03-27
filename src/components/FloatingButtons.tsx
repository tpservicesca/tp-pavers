"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-[15px] right-[15px] md:bottom-[30px] md:right-[30px] z-[99998] flex flex-col gap-3 items-end">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-[18px] py-2.5 text-sm md:px-6 md:py-3.5 md:text-base rounded-[30px] font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-orange-500 text-white hover:bg-orange-600 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Free Quote
      </a>
      <a
        href="tel:+15106500080"
        className="inline-flex items-center gap-2 px-[18px] py-2.5 text-sm md:px-6 md:py-3.5 md:text-base rounded-[50px] font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-white text-[#333] border-2 border-[#e0e0e0] hover:border-orange-500 hover:text-orange-500 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now!
      </a>
    </div>
  );
}
