import type { Metadata } from "next";
import { Poppins, Oswald, Red_Hat_Display } from "next/font/google";
import Script from "next/script";
import AutoTracker from "@/components/AutoTracker";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  weight: ["400", "600", "700"],
  variable: "--font-redhat-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Paver Installation in California | TP Pavers",
  description:
    "Expert paver installation, retaining walls, hardscape design & synthetic turf in the San Francisco Bay Area. 20+ years experience. 10-year warranty. Free estimates. Serving Contra Costa County & Tri-Valley.",
  keywords: [
    "paver installation California",
    "Bay Area pavers",
    "patio pavers San Francisco",
    "retaining wall contractor",
    "hardscape design",
    "synthetic turf installation",
    "driveway pavers",
    "TP Pavers",
    "Contra Costa County pavers",
    "San Ramon pavers",
    "Dublin paver installation",
    "Pleasanton hardscape",
    "Danville patio installation",
    "Livermore pavers",
    "Alamo hardscape contractor",
  ],
  icons: {
    icon: [
      { url: "/images/cropped-TP-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/tp-pavers-logo-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/tp-pavers-logo-180.png",
  },
  openGraph: {
    title: "Professional Paver Installation | TP Pavers",
    description:
      "Transform your outdoor space with expert paver installation, retaining walls & hardscape design. 20+ years experience in the Bay Area. Free estimates.",
    url: "https://tppavers.com",
    siteName: "TP Pavers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tppavers.com/images/P1.png",
        width: 1200,
        height: 630,
        alt: "TP Pavers - Professional Paver Installation in California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Paver Installation | TP Pavers",
    description:
      "Expert paver installation, retaining walls & hardscape design in the Bay Area. 20+ years experience. Free estimates.",
    images: ["https://tppavers.com/images/P1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google562f2deb42b843bc",
  },
  alternates: {
    canonical: "https://tppavers.com",
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
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5Z63X662');`}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K1L67NNNQV"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K1L67NNNQV');
          `}
        </Script>
        {/* Google Ads conversion tag — add when Pavers campaigns go live
        <Script id="gtag-conversion" strategy="afterInteractive">
          {${'`'}
            gtag('config', 'AW-XXXXXXXXXX');
            gtag('event', 'conversion', {
              'send_to': 'AW-XXXXXXXXXX/CONVERSION_LABEL',
              'value': 1.0,
              'currency': 'USD'
            });
          ${'`'}}
        </Script>
        */}
      </head>
      <body className="text-[#333] bg-white leading-[1.7] antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Z63X662"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TP Pavers",
              description:
                "Professional paver installation, retaining walls, hardscape design and synthetic turf in the San Francisco Bay Area. 20+ years experience with 10-year warranty.",
              url: "https://tppavers.com",
              telephone: "+1-510-650-0080",
              email: "contact@tppavers.com",
              image: "https://tppavers.com/images/P1.png",
              logo: "https://tppavers.com/images/tp-pavers-logo-192.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3201 Ramona Street",
                addressLocality: "Pinole",
                addressRegion: "CA",
                postalCode: "94564",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.004366,
                longitude: -122.298858,
              },
              areaServed: [
                "San Ramon",
                "Dublin",
                "Pleasanton",
                "Livermore",
                "Alamo",
                "Danville",
                "Walnut Creek",
                "Concord",
                "Pinole",
                "Oakland",
                "Berkeley",
                "Richmond",
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Paver & Hardscape Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Paver Installation",
                      description:
                        "Custom paver installation for patios, driveways, walkways and outdoor spaces.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Retaining Walls",
                      description:
                        "Engineered retaining walls for stability, safety and landscape design.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Synthetic Turf Installation",
                      description:
                        "Premium artificial turf installation for lawns, pet areas and play spaces.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Concrete Work",
                      description:
                        "Professional concrete work including driveways, patios, walkways and foundations.",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
                bestRating: "5",
              },
            }),
          }}
        />
        {children}
        <AutoTracker />
      </body>
    </html>
  );
}
