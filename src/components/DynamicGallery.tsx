'use client';
import dynamic from 'next/dynamic';

const DynamicGallery = dynamic(() => import('./Gallery'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-xl animate-pulse flex items-center justify-center">
      <p className="text-gray-400">Loading gallery...</p>
    </div>
  ),
});

export default DynamicGallery;
