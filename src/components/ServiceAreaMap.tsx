'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface CityInfo {
  name: string;
  lat: number;
  lng: number;
  description: string;
  projects: string;
}

const cities: CityInfo[] = [
  {
    name: 'San Ramon',
    lat: 37.7799,
    lng: -121.9780,
    description: 'Premium paver installations for upscale residential communities.',
    projects: '20+ Projects',
  },
  {
    name: 'Dublin',
    lat: 37.7022,
    lng: -121.9358,
    description: 'Custom driveways, patios, and outdoor living spaces.',
    projects: '25+ Projects',
  },
  {
    name: 'Pleasanton',
    lat: 37.6624,
    lng: -121.8747,
    description: 'Elegant hardscape designs for homes and businesses.',
    projects: '30+ Projects',
  },
  {
    name: 'Livermore',
    lat: 37.6819,
    lng: -121.7680,
    description: 'Durable paver solutions for wine country properties.',
    projects: '15+ Projects',
  },
  {
    name: 'Alamo',
    lat: 37.8504,
    lng: -122.0325,
    description: 'Luxury outdoor transformations in prestigious neighborhoods.',
    projects: '10+ Projects',
  },
  {
    name: 'Danville',
    lat: 37.8216,
    lng: -121.9999,
    description: 'Beautiful patios and walkways for Danville homeowners.',
    projects: '20+ Projects',
  },
];

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);

  useEffect(() => {
    // Check if Google Maps script is already loaded
    if (window.google?.maps) {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBI6Vup5IKvfvlyvdhV_9nipF5FXaVnZ04&callback=initMap`;
    script.async = true;
    script.defer = true;

    (window as unknown as Record<string, () => void>).initMap = () => {
      setMapLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      delete (window as unknown as Record<string, () => void>).initMap;
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google?.maps) return;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 37.7500, lng: -121.9500 },
      zoom: 11,
      styles: [
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
        { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'water',
          stylers: [{ color: '#c9e7f5' }],
        },
        {
          featureType: 'landscape',
          stylers: [{ color: '#f0f4e8' }],
        },
        {
          featureType: 'road.highway',
          stylers: [{ color: '#fcd4a4' }],
        },
      ],
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    cities.forEach((city) => {
      const marker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map,
        title: city.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#E8740C',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 3,
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 220px; font-family: sans-serif;">
            <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #1a1a1a;">${city.name}</h3>
            <p style="margin: 0 0 6px 0; font-size: 13px; color: #555; line-height: 1.4;">${city.description}</p>
            <span style="display: inline-block; background: #E8740C; color: white; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: bold;">${city.projects}</span>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
        setSelectedCity(city);
      });
    });
  }, [mapLoaded]);

  return (
    <section id="map" className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
          SERVICE AREA
        </div>
        <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-[50px] leading-[1.2]">
          We&apos;re local, and everywhere
        </h2>
        <div className="relative bg-white rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden border-2 border-orange-200">
          {/* Map Header */}
          <div className="bg-gradient-to-br from-brand-orange to-brand-orange-light text-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10" />
            <div className="relative z-[1] text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-[1.3rem] md:text-[1.8rem] font-bold mb-2 text-white">
                Our Service Area
              </h3>
              <p className="opacity-90 text-sm md:text-base">
                Click on any marker to learn about our services in that city
              </p>
            </div>
            <div className="relative z-[1] bg-white/20 p-4 rounded-[10px] backdrop-blur-[10px] border border-white/30">
              <div className="flex gap-8 text-white justify-center">
                <div className="text-center">
                  <span className="block text-2xl font-bold">6</span>
                  <span className="text-sm">Cities</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold">120+</span>
                  <span className="text-sm">Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="relative">
            <div ref={mapRef} className="h-[350px] md:h-[500px] w-full" />
            {!mapLoaded && (
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center gap-4 text-slate-500">
                <MapPin size={48} className="text-brand-orange animate-pulse" />
                <p className="text-base font-semibold text-brand-black">Loading map...</p>
              </div>
            )}
          </div>

          {/* City Pills */}
          <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-200">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {cities.map((city) => (
                <span
                  key={city.name}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCity?.name === city.name
                      ? 'bg-brand-orange text-white'
                      : 'bg-white text-brand-black border border-slate-200 hover:border-brand-orange'
                  }`}
                >
                  <MapPin size={14} /> {city.name}
                </span>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              Serving the Tri-Valley &amp; Contra Costa County with professional paver installation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
