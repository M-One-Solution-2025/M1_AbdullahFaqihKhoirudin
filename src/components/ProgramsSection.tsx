'use client';

import React, { useEffect, useState } from 'react';
import { Eye, VolumeX, Brain, Accessibility, Sparkles, Volume2, CheckCircle2, ChevronRight } from 'lucide-react';
import { useAccessibility } from './AccessibilityContext';

interface SpecialProgram {
  id: string;
  name: string;
  code: string;
  description: string;
  features: string;
  iconName: string;
}

const iconMap: Record<string, React.ReactNode> = {
  EyeOff: <Eye className="w-6 h-6 text-amber-600" />,
  EarOff: <VolumeX className="w-6 h-6 text-blue-700" />,
  Brain: <Brain className="w-6 h-6 text-emerald-700" />,
  Accessibility: <Accessibility className="w-6 h-6 text-indigo-700" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-700" />,
};

export const ProgramsSection: React.FC = () => {
  const [programs, setPrograms] = useState<SpecialProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const { speakText } = useAccessibility();

  useEffect(() => {
    fetch('/api/programs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPrograms(data);
        } else {
          setPrograms([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load programs:', err);
        setPrograms([]);
        setLoading(false);
      });
  }, []);

  return (
    <section id="layanan" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-300">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
              Kurikulum Adaptif &amp; Terpadu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Program Layanan Khusus Disabilitas
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md mt-3 md:mt-0 leading-relaxed font-normal">
            Dikelola oleh tim pedagogi khusus, psikolog, dan terapis berpengalaman untuk memaksimalkan potensi mandiri siswa.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-64 bg-slate-200 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              let parsedFeatures: string[] = [];
              try {
                parsedFeatures = JSON.parse(program.features);
              } catch (e) {
                parsedFeatures = [program.features];
              }

              return (
                <div
                  key={program.id}
                  className="bg-white rounded-xl p-6 border border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header Pill & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-slate-100 rounded-lg border border-slate-200">
                        {iconMap[program.iconName] || <Sparkles className="w-6 h-6 text-blue-700" />}
                      </div>
                      <span className="text-xs font-extrabold px-3 py-1 bg-slate-900 text-amber-400 rounded-md">
                        Kategori: {program.code}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {program.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 pt-3 border-t border-slate-100">
                      {parsedFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Accessible Action Footer */}
                  <div className="pt-5 border-t border-slate-200 mt-6 flex justify-between items-center">
                    <button
                      onClick={() => speakText(`${program.name}. ${program.description}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors"
                      title="Dengarkan Penjelasan Program"
                    >
                      <Volume2 className="w-4 h-4 text-emerald-600" />
                      <span>Audio Penjelasan</span>
                    </button>

                    <a
                      href="#ppdb"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900"
                    >
                      <span>Konsultasi</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
