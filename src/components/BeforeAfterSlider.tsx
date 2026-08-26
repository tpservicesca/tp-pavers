"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeSrcMobile?: string;
  afterSrcMobile?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeSrcMobile,
  afterSrcMobile,
  beforeAlt = "Before",
  afterAlt = "After",
}: Props) {
  const [sliderPos, setSliderPos] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  // Touch gesture: decide direction first so vertical swipes keep scrolling the page
  const [touchActive, setTouchActive] = useState(false);
  const touchState = useRef<{ x: number; y: number; phase: "pending" | "drag" | "scroll" }>({
    x: 0,
    y: 0,
    phase: "pending",
  });

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    touchState.current = { x: t.clientX, y: t.clientY, phase: "pending" };
    setTouchActive(true);
  }, []);

  useEffect(() => {
    if (!touchActive) return;

    const handleTouchMove = (e: TouchEvent) => {
      const s = touchState.current;
      const t = e.touches[0];
      if (s.phase === "pending") {
        const dx = Math.abs(t.clientX - s.x);
        const dy = Math.abs(t.clientY - s.y);
        if (dx < 8 && dy < 8) return;
        s.phase = dx > dy ? "drag" : "scroll";
      }
      if (s.phase === "drag") {
        e.preventDefault();
        updatePosition(t.clientX);
      }
    };
    const handleTouchEnd = () => {
      if (touchState.current.phase === "pending") {
        // Simple tap: move the divider to the tapped spot
        updatePosition(touchState.current.x);
      }
      touchState.current.phase = "pending";
      setTouchActive(false);
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [touchActive, updatePosition]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const handleEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-col-resize select-none"
      style={{ touchAction: "pan-y" }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight") setSliderPos((p) => Math.min(100, p + 2));
      }}
    >
      {/* After image (full background) */}
      <Image
        src={isMobile && afterSrcMobile ? afterSrcMobile : afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
        unoptimized
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src={isMobile && beforeSrcMobile ? beforeSrcMobile : beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="100vw"
          style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100vw" }}
          priority
          unoptimized
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
            <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-20 sm:top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full uppercase tracking-wider">
        Before
      </div>
      <div className="absolute top-20 sm:top-4 right-4 z-10 bg-brand-orange/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full uppercase tracking-wider">
        After
      </div>
    </div>
  );
}
