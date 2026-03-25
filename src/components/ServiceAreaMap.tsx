'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    google?: any;
    initMap?: () => void;
  }
}

interface CityInfo {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  county: string;
}

const counties: Record<string, CityInfo[]> = {
  'Contra Costa': [
    { name: 'San Ramon', slug: 'san-ramon', lat: 37.7799, lng: -121.9780, county: 'Contra Costa' },
    { name: 'Dublin', slug: 'dublin', lat: 37.7022, lng: -121.9358, county: 'Contra Costa' },
    { name: 'Danville', slug: 'danville', lat: 37.8216, lng: -121.9999, county: 'Contra Costa' },
    { name: 'Alamo', slug: 'alamo', lat: 37.8504, lng: -122.0325, county: 'Contra Costa' },
    { name: 'Walnut Creek', slug: 'walnut-creek', lat: 37.9101, lng: -122.0652, county: 'Contra Costa' },
    { name: 'Concord', slug: 'concord', lat: 37.9780, lng: -122.0311, county: 'Contra Costa' },
    { name: 'Pleasant Hill', slug: 'pleasant-hill', lat: 37.9480, lng: -122.0608, county: 'Contra Costa' },
    { name: 'Martinez', slug: 'martinez', lat: 38.0194, lng: -122.1341, county: 'Contra Costa' },
    { name: 'Pittsburg', slug: 'pittsburg', lat: 38.0280, lng: -121.8847, county: 'Contra Costa' },
    { name: 'Antioch', slug: 'antioch', lat: 38.0049, lng: -121.8058, county: 'Contra Costa' },
    { name: 'Brentwood', slug: 'brentwood', lat: 37.9317, lng: -121.6958, county: 'Contra Costa' },
    { name: 'Oakley', slug: 'oakley', lat: 37.9974, lng: -121.7125, county: 'Contra Costa' },
    { name: 'Clayton', slug: 'clayton', lat: 37.9410, lng: -121.9358, county: 'Contra Costa' },
    { name: 'Lafayette', slug: 'lafayette', lat: 37.8858, lng: -122.1180, county: 'Contra Costa' },
    { name: 'Orinda', slug: 'orinda', lat: 37.8771, lng: -122.1797, county: 'Contra Costa' },
    { name: 'Moraga', slug: 'moraga', lat: 37.8349, lng: -122.1297, county: 'Contra Costa' },
    { name: 'El Cerrito', slug: 'el-cerrito', lat: 37.9161, lng: -122.3122, county: 'Contra Costa' },
    { name: 'Richmond', slug: 'richmond', lat: 37.9358, lng: -122.3478, county: 'Contra Costa' },
    { name: 'San Pablo', slug: 'san-pablo', lat: 37.9622, lng: -122.3458, county: 'Contra Costa' },
    { name: 'Pinole', slug: 'pinole', lat: 38.0044, lng: -122.2989, county: 'Contra Costa' },
    { name: 'Hercules', slug: 'hercules', lat: 38.0172, lng: -122.2886, county: 'Contra Costa' },
    { name: 'El Sobrante', slug: 'el-sobrante', lat: 37.9772, lng: -122.2953, county: 'Contra Costa' },
    { name: 'Bay Point', slug: 'bay-point', lat: 38.0289, lng: -121.9614, county: 'Contra Costa' },
    { name: 'Discovery Bay', slug: 'discovery-bay', lat: 37.9086, lng: -121.6006, county: 'Contra Costa' },
    { name: 'Rodeo', slug: 'rodeo', lat: 38.0333, lng: -122.2669, county: 'Contra Costa' },
    { name: 'Crockett', slug: 'crockett', lat: 38.0525, lng: -122.2128, county: 'Contra Costa' },
    { name: 'Kensington', slug: 'kensington', lat: 37.9107, lng: -122.2803, county: 'Contra Costa' },
  ],
  'Alameda': [
    { name: 'Livermore', slug: 'livermore', lat: 37.6819, lng: -121.7680, county: 'Alameda' },
    { name: 'Pleasanton', slug: 'pleasanton', lat: 37.6624, lng: -121.8747, county: 'Alameda' },
    { name: 'Oakland', slug: 'oakland', lat: 37.8044, lng: -122.2712, county: 'Alameda' },
    { name: 'Berkeley', slug: 'berkeley', lat: 37.8716, lng: -122.2727, county: 'Alameda' },
    { name: 'Fremont', slug: 'fremont', lat: 37.5485, lng: -121.9886, county: 'Alameda' },
    { name: 'Hayward', slug: 'hayward', lat: 37.6688, lng: -122.0808, county: 'Alameda' },
    { name: 'Alameda', slug: 'alameda', lat: 37.7652, lng: -122.2416, county: 'Alameda' },
    { name: 'San Leandro', slug: 'san-leandro', lat: 37.7249, lng: -122.1561, county: 'Alameda' },
    { name: 'Union City', slug: 'union-city', lat: 37.5934, lng: -122.0439, county: 'Alameda' },
    { name: 'Newark', slug: 'newark', lat: 37.5297, lng: -122.0402, county: 'Alameda' },
    { name: 'Castro Valley', slug: 'castro-valley', lat: 37.6941, lng: -122.0864, county: 'Alameda' },
    { name: 'San Lorenzo', slug: 'san-lorenzo', lat: 37.6811, lng: -122.1247, county: 'Alameda' },
    { name: 'Emeryville', slug: 'emeryville', lat: 37.8313, lng: -122.2852, county: 'Alameda' },
    { name: 'Piedmont', slug: 'piedmont', lat: 37.8244, lng: -122.2317, county: 'Alameda' },
    { name: 'Albany', slug: 'albany', lat: 37.8869, lng: -122.2978, county: 'Alameda' },
  ],
  'Solano': [
    { name: 'Vallejo', slug: 'vallejo', lat: 38.1041, lng: -122.2566, county: 'Solano' },
    { name: 'Benicia', slug: 'benicia', lat: 38.0494, lng: -122.1586, county: 'Solano' },
    { name: 'American Canyon', slug: 'american-canyon', lat: 38.1749, lng: -122.2608, county: 'Solano' },
    { name: 'Fairfield', slug: 'fairfield', lat: 38.2494, lng: -122.0400, county: 'Solano' },
    { name: 'Vacaville', slug: 'vacaville', lat: 38.3566, lng: -121.9877, county: 'Solano' },
    { name: 'Suisun City', slug: 'suisun-city', lat: 38.2388, lng: -122.0172, county: 'Solano' },
    { name: 'Dixon', slug: 'dixon', lat: 38.4455, lng: -121.8233, county: 'Solano' },
  ],
  'Marin': [
    { name: 'San Rafael', slug: 'san-rafael', lat: 37.9735, lng: -122.5311, county: 'Marin' },
    { name: 'Novato', slug: 'novato', lat: 38.1074, lng: -122.5697, county: 'Marin' },
    { name: 'Mill Valley', slug: 'mill-valley', lat: 37.9060, lng: -122.5419, county: 'Marin' },
    { name: 'Sausalito', slug: 'sausalito', lat: 37.8591, lng: -122.4853, county: 'Marin' },
    { name: 'Tiburon', slug: 'tiburon', lat: 37.8735, lng: -122.4567, county: 'Marin' },
    { name: 'Corte Madera', slug: 'corte-madera', lat: 37.9255, lng: -122.5275, county: 'Marin' },
    { name: 'Larkspur', slug: 'larkspur', lat: 37.9341, lng: -122.5353, county: 'Marin' },
    { name: 'San Anselmo', slug: 'san-anselmo', lat: 37.9746, lng: -122.5617, county: 'Marin' },
    { name: 'Fairfax', slug: 'fairfax', lat: 37.9871, lng: -122.5889, county: 'Marin' },
  ],
  'San Mateo': [
    { name: 'Redwood City', slug: 'redwood-city', lat: 37.4852, lng: -122.2364, county: 'San Mateo' },
    { name: 'San Mateo', slug: 'san-mateo-city', lat: 37.5630, lng: -122.3255, county: 'San Mateo' },
    { name: 'Daly City', slug: 'daly-city', lat: 37.6879, lng: -122.4702, county: 'San Mateo' },
    { name: 'South San Francisco', slug: 'south-san-francisco', lat: 37.6547, lng: -122.4077, county: 'San Mateo' },
    { name: 'San Bruno', slug: 'san-bruno', lat: 37.6305, lng: -122.4111, county: 'San Mateo' },
    { name: 'Burlingame', slug: 'burlingame', lat: 37.5841, lng: -122.3660, county: 'San Mateo' },
    { name: 'San Carlos', slug: 'san-carlos', lat: 37.5072, lng: -122.2608, county: 'San Mateo' },
    { name: 'Foster City', slug: 'foster-city', lat: 37.5586, lng: -122.2711, county: 'San Mateo' },
    { name: 'Pacifica', slug: 'pacifica', lat: 37.6138, lng: -122.4869, county: 'San Mateo' },
    { name: 'Half Moon Bay', slug: 'half-moon-bay', lat: 37.4636, lng: -122.4286, county: 'San Mateo' },
  ],
  'Santa Clara': [
    { name: 'San Jose', slug: 'san-jose', lat: 37.3382, lng: -121.8863, county: 'Santa Clara' },
    { name: 'Sunnyvale', slug: 'sunnyvale', lat: 37.3688, lng: -122.0363, county: 'Santa Clara' },
    { name: 'Santa Clara', slug: 'santa-clara-city', lat: 37.3541, lng: -121.9552, county: 'Santa Clara' },
    { name: 'Mountain View', slug: 'mountain-view', lat: 37.3861, lng: -122.0839, county: 'Santa Clara' },
    { name: 'Milpitas', slug: 'milpitas', lat: 37.4323, lng: -121.8996, county: 'Santa Clara' },
    { name: 'Cupertino', slug: 'cupertino', lat: 37.3230, lng: -122.0322, county: 'Santa Clara' },
    { name: 'Campbell', slug: 'campbell', lat: 37.2872, lng: -121.9500, county: 'Santa Clara' },
    { name: 'Los Gatos', slug: 'los-gatos', lat: 37.2266, lng: -121.9746, county: 'Santa Clara' },
  ],
  'San Francisco': [
    { name: 'San Francisco', slug: 'san-francisco', lat: 37.7749, lng: -122.4194, county: 'San Francisco' },
  ],
};

const countyColors: Record<string, string> = {
  'Contra Costa': '#E8740C',
  'Alameda': '#2563EB',
  'Solano': '#16A34A',
  'Marin': '#9333EA',
  'San Mateo': '#DC2626',
  'Santa Clara': '#0891B2',
  'San Francisco': '#CA8A04',
};

const allCities = Object.values(counties).flat();
const totalCities = allCities.length;
const countyNames = Object.keys(counties);

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);

  useEffect(() => {
    if (window.google?.maps) {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBI6Vup5IKvfvlyvdhV_9nipF5FXaVnZ04&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      setMapLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      delete window.initMap;
    };
  }, []);

  const createMarkers = useCallback((filterCounty: string | null) => {
    const map = mapInstanceRef.current;
    if (!map || !window.google?.maps) return;

    // Clear existing markers
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    const citiesToShow = filterCounty
      ? counties[filterCounty] || []
      : allCities;

    const bounds = new window.google.maps.LatLngBounds();

    citiesToShow.forEach((city) => {
      const color = countyColors[city.county] || '#E8740C';

      const marker = new window.google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map,
        title: city.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: color,
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
        },
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 220px; font-family: sans-serif;">
            <h3 style="margin: 0 0 4px 0; font-size: 15px; color: #1a1a1a;">${city.name}</h3>
            <span style="display: inline-block; background: ${color}; color: white; padding: 2px 10px; border-radius: 12px; font-size: 11px; font-weight: bold;">${city.county} County</span>
            <br/>
            <a href="/${city.slug}" style="display: inline-block; margin-top: 8px; color: ${color}; font-size: 13px; font-weight: 600; text-decoration: none;">
              View services →
            </a>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
        setSelectedCity(city);
      });

      bounds.extend(marker.getPosition());
      markersRef.current.push(marker);
    });

    if (citiesToShow.length > 1) {
      map.fitBounds(bounds, { top: 40, bottom: 40, left: 40, right: 40 });
    } else if (citiesToShow.length === 1) {
      map.setCenter({ lat: citiesToShow[0].lat, lng: citiesToShow[0].lng });
      map.setZoom(13);
    }
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google?.maps) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.8, lng: -122.1 },
      zoom: 9,
      styles: [
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
        { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        { featureType: 'water', stylers: [{ color: '#c9e7f5' }] },
        { featureType: 'landscape', stylers: [{ color: '#f0f4e8' }] },
        { featureType: 'road.highway', stylers: [{ color: '#fcd4a4' }] },
      ],
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    mapInstanceRef.current = map;
    createMarkers(null);
  }, [mapLoaded, createMarkers]);

  useEffect(() => {
    if (mapInstanceRef.current) {
      createMarkers(activeCounty);
    }
  }, [activeCounty, createMarkers]);

  const visibleCities = activeCounty ? counties[activeCounty] || [] : allCities;

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
                  <span className="block text-2xl font-bold">{totalCities}</span>
                  <span className="text-sm">Cities</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold">{countyNames.length}</span>
                  <span className="text-sm">Counties</span>
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

          {/* County Filter Buttons */}
          <div className="bg-white px-6 pt-6 pb-2 border-t border-slate-200">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Filter by County
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCounty(null)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCounty === null
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Counties
              </button>
              {countyNames.map((county) => (
                <button
                  key={county}
                  onClick={() => setActiveCounty(activeCounty === county ? null : county)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    activeCounty === county
                      ? 'text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  style={
                    activeCounty === county
                      ? { backgroundColor: countyColors[county] }
                      : {}
                  }
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: countyColors[county] }}
                  />
                  {county}
                  <span className="text-xs opacity-70">({counties[county].length})</span>
                </button>
              ))}
            </div>
          </div>

          {/* City Pills */}
          <div className="bg-slate-50 px-6 pb-6 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap justify-center gap-2 mb-4 max-h-[200px] overflow-y-auto">
              {visibleCities.map((city) => (
                <a
                  key={city.slug}
                  href={`/${city.slug}`}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedCity?.slug === city.slug
                      ? 'bg-brand-orange text-white'
                      : 'bg-white text-brand-black border border-slate-200 hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  <MapPin size={12} /> {city.name}
                </a>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              Professional paver installation across the San Francisco Bay Area &amp; beyond
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
