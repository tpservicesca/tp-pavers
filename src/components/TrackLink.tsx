'use client';

import React from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface TrackLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  event: string;
  category: string;
  label: string;
  children: React.ReactNode;
}

export function TrackLink({ event, category, label, children, ...props }: TrackLinkProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        event_category: category,
        event_label: label,
        value: 1,
      });
    }
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
