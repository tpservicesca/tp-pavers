import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-[15px] right-[15px] md:bottom-[30px] md:right-[30px] z-[99998] flex flex-col gap-3 items-end">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-[18px] py-2.5 text-sm md:px-6 md:py-3.5 md:text-base rounded-[30px] font-[var(--font-poppins)] font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-orange-500 text-white hover:bg-orange-600 hover:scale-105"
      >
        <MdEmail /> Free Quote
      </a>
      <a
        href="tel:+15106500080"
        className="inline-flex items-center gap-2 px-[18px] py-2.5 text-sm md:px-6 md:py-3.5 md:text-base rounded-[50px] font-[var(--font-poppins)] font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-white text-[#333] border-2 border-[#e0e0e0] hover:border-orange-500 hover:text-orange-500 hover:scale-105"
      >
        <FaPhone /> Call Now!
      </a>
    </div>
  );
}
