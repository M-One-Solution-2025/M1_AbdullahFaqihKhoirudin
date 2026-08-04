'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, Tag, Volume2, BellRing, ArrowUpRight } from 'lucide-react';
import { useAccessibility } from './AccessibilityContext';

interface Announcement {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  imageUrl?: string;
  isImportant: boolean;
}

export const AnnouncementsSection: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const { speakText } = useAccessibility();

  useEffect(() => {
    fetch('/api/announcements')
      .then((res) => res.json())
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load announcements:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="pengumuman" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-3">
              Informasi &amp; Pengumuman Resmi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kabar Terbaru SLB Negeri Surakarta
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md mt-2 md:mt-0 leading-relaxed font-normal">
            Berita pendaftaran siswa baru, kegiatan ekstrakurikuler inklusif, dan capaian prestasi PDBK.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-slate-100 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          /* News Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {item.imageUrl && (
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-200">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {item.isImportant && (
                        <span className="absolute top-3 left-3 bg-red-700 text-white text-[11px] font-extrabold px-3 py-1 rounded shadow-xs flex items-center gap-1">
                          <BellRing className="w-3.5 h-3.5" /> PENGUMUMAN PENTING
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-700" />
                        {new Date(item.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-700">
                        <Tag className="w-3.5 h-3.5" />
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => speakText(`${item.title}. ${item.summary}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-blue-900 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-emerald-600" />
                    <span>Dengarkan</span>
                  </button>

                  <button
                    onClick={() => alert(`PENGUMUMAN RESMI:\n\n${item.title}\n\n${item.content}`)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:underline"
                  >
                    <span>Selengkapnya</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
