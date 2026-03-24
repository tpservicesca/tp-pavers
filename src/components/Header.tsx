'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#services', label: 'SERVICES' },
  { href: '#us', label: 'ABOUT US' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#faq', label: 'FAQ' },
  { href: '#map', label: 'SERVICE AREA' },
  { href: '#contact', label: 'CONTACT' },
  { href: '/blog', label: 'BLOG' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('header')) setMenuOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  return (
    <>
      {/* Overlay for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <header className="fixed top-0 left-0 w-full z-[9999] transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-[5vw] rounded-b-[5px] min-h-[55px] mx-auto transition-all duration-500 ${
            scrolled
              ? 'w-[97%] rounded-b-[3px] bg-black/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)]'
              : 'w-[80%] bg-black'
          }`}
        >
          <div className="flex items-center">
            <a href="#">
              <Image
                src="/images/tp-pavers-logo-192.png"
                alt="TP Pavers Services California"
                width={200}
                height={70}
                className="h-[70px] w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Nav - inside nav, inherits nav width */}
          <ul className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative block text-white text-base font-semibold uppercase py-[18px] px-3.5 tracking-[0.5px] transition-colors duration-300 hover:text-brand-orange after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-[60%]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col cursor-pointer gap-[5px] p-2.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-[25px] h-[3px] bg-white rounded-[3px] transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-x-[5px] translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`w-[25px] h-[3px] bg-white rounded-[3px] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-[25px] h-[3px] bg-white rounded-[3px] transition-all duration-300 ${
                menuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </nav>

        {/* Mobile Nav - outside nav, matches nav width */}
        <ul
          className={`md:hidden flex flex-col items-center bg-black rounded-b-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out mx-auto ${
            scrolled ? 'w-[97%]' : 'w-[80%]'
          } ${
            menuOpen ? 'max-h-[500px] py-3 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white text-base font-semibold uppercase py-3 px-8 tracking-[0.5px] transition-colors duration-300 hover:text-brand-orange text-center"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
