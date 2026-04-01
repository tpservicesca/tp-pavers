"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function AutoTracker() {
  useEffect(() => {
    function getPageName(): string {
      const path = window.location.pathname;
      if (path === "/") return "home";
      return path.replace(/^\//, "").replace(/\//g, "_") || "home";
    }

    function getButtonLocation(el: HTMLElement): string {
      const section = el.closest("section");
      if (section?.id) return section.id;
      if (el.closest("header")) return "header";
      if (el.closest("footer")) return "footer";
      if (el.closest('[id="home"], .hero-bg')) return "hero";
      if (el.closest('[class*="orange-strip"], [class*="strip"]')) return "orange_strip";
      return "page";
    }

    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement;
      const anchor = el.closest("a");
      const button = el.closest("button");
      const clickable = anchor || button;
      if (!clickable) return;

      const page = getPageName();
      const location = getButtonLocation(clickable as HTMLElement);
      const text = clickable.textContent?.trim()?.substring(0, 60) || "unknown";
      const href = anchor?.href || anchor?.getAttribute("href") || "";

      if (typeof window.gtag !== "function") return;

      // Phone call clicks
      if (href.startsWith("tel:")) {
        window.gtag("event", "call_click", {
          page,
          button_location: location,
          button_text: text,
          phone_number: href.replace("tel:", ""),
        });
        return;
      }

      // Email clicks
      if (href.startsWith("mailto:")) {
        window.gtag("event", "email_click", {
          page,
          button_location: location,
          email: href.replace("mailto:", ""),
        });
        return;
      }

      // Contact form / free estimate CTA
      if (href.includes("#contact") || href.includes("/free-estimate") || href.includes("/contact")) {
        window.gtag("event", "cta_click", {
          page,
          cta_text: text,
          cta_type: "contact",
          button_location: location,
        });
        return;
      }

      // Service page clicks
      if (href.includes("/paver-") || href.includes("/retaining-walls") ||
          href.includes("/synthetic-turf") || href.includes("/services")) {
        window.gtag("event", "service_click", {
          page,
          service_page: href.split("/").pop() || "services",
          button_text: text,
          button_location: location,
        });
        return;
      }

      // City page clicks (Pavers cities)
      if (href.includes("/livermore") || href.includes("/dublin") ||
          href.includes("/pleasanton") || href.includes("/san-ramon") ||
          href.includes("/danville") || href.includes("/alamo")) {
        window.gtag("event", "city_click", {
          page,
          city: href.split("/").pop() || "city",
          button_location: location,
        });
        return;
      }

      // Blog clicks
      if (href.includes("/blog")) {
        window.gtag("event", "blog_click", {
          page,
          blog_post: href.split("/").pop() || "blog",
          button_location: location,
        });
        return;
      }

      // WhatsApp clicks
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        window.gtag("event", "whatsapp_click", {
          page,
          button_location: location,
        });
        return;
      }

      // Any styled button
      const isStyledButton = button ||
        clickable.classList.toString().match(/bg-orange|bg-white|rounded-lg|btn|cta|font-bold/);
      if (isStyledButton) {
        window.gtag("event", "button_click", {
          page,
          button_text: text,
          button_location: location,
          button_href: href.substring(0, 100) || "none",
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
