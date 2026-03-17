import type { Metadata } from "next";
import { Poppins, Oswald, Red_Hat_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins-var",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald-var",
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-redhat-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavers in California! - TP Services",
  description:
    "Quality materials that stand the test of time. Professional pavers, retaining walls, and landscaping services in the San Francisco Bay Area.",
  icons: {
    icon: [
      { url: "/images/cropped-TP-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/tp-pavers-logo-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/tp-pavers-logo-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${oswald.variable} ${redHatDisplay.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WYM186DG5B"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WYM186DG5B');
            gtag('config', 'AW-17134217839');
          `}
        </Script>
        {/* Event snippet for Page view conversion */}
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17134217839/EtBFCMDt_-EaEO_Uneo_',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </Script>
      </head>
      <body className="text-[#333] bg-white leading-[1.7] antialiased">
        {children}
      </body>
    </html>
  );
}
