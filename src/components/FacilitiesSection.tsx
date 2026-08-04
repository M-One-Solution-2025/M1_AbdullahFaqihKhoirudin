'use client';

import React, { useEffect, useState } from 'react';
import { Volume2, Building2, CheckCircle2 } from 'lucide-react';
import { useAccessibility } from './AccessibilityContext';

interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export const FacilitiesSection: React.FC = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);
  const { speakText } = useAccessibility();

  useEffect(() => {
    fetch('/api/facilities')
      .then((res) => res.json())
      .then((data) => {
        setFacilities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load facilities:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="fasilitas" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-300">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
              Fasilitas Terapi &amp; Laboratorium
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ruang Pembelajaran Inklusif Modern
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md mt-3 md:mt-0 leading-relaxed font-normal">
            Memfasilitasi kebutuhan fisioterapi, integrasi sensorik Snoezelen, dan laboratorium asistif braille.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-300 shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-5 h-52 lg:h-auto bg-slate-200 relative border-b lg:border-b-0 lg:border-r border-slate-200">
                  <img
                    src={fac.imageUrl}
                    alt={fac.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900 text-amber-400 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded shadow-xs">
                    {fac.category}
                  </span>
                </div>

                <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{fac.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => speakText(`${fac.name}. ${fac.description}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      <Volume2 className="w-4 h-4 text-emerald-600" />
                      <span>Audio Deskripsi</span>
                    </button>

                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-blue-700" /> Ramah Disabilitas
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
