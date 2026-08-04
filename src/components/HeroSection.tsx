'use client';

import React from 'react';
import { Volume2, ChevronRight, CheckCircle, Award, Heart, Sparkles, MapPin } from 'lucide-react';
import { useAccessibility } from './AccessibilityContext';

export const HeroSection: React.FC = () => {
  const { speakText } = useAccessibility();

  const heroSpeech =
    'Selamat datang di Portal Resmi Sekolah Luar Biasa Negeri Surakarta. Kami menyelenggarakan pendidikan inklusif berkualitas, terapi tumbuh kembang terpadu, dan pelatihan vokasional mandiri untuk putra-putri disabilitas.';

  return (
    <section className="relative bg-slate-900 text-white border-b-4 border-amber-500 overflow-hidden">
      {/* Subtle Grid Accent Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Government Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded flex items-center gap-1.5 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Sekolah Negeri Inklusif
              </span>
              <span className="bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1 rounded flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Surakarta, Jawa Tengah
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Pendidikan Khusus &amp; Terapi Terpadu Bagi <span className="text-amber-400 underline decoration-amber-500/50 decoration-wavy underline-offset-8">Setiap Anak Disabilitas</span>
            </h1>

            {/* Humanistic Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              SLB Negeri Surakarta berkomitmen mencetak generasi disabilitas yang mandiri, berkarakter, dan berdaya saing melalui kurikulum khusus adaptif, ruang terapi modern, serta fasilitas asistif berstandar nasional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ppdb"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-lg shadow hover:shadow-lg transition-all text-sm flex items-center gap-2"
              >
                <span>Pendaftaran PPDB 2026</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => speakText(heroSpeech)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold px-6 py-3.5 rounded-lg shadow-xs hover:shadow transition-all text-sm flex items-center gap-2"
                title="Dengarkan Sambutan Pembuka Sekolah"
              >
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span>Dengarkan Audio Sambutan</span>
              </button>
            </div>

            {/* Trust Bulletins */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Asesmen Khusus Gratis</span>
                  <span className="text-slate-400">Psikolog &amp; Terapis Ahli</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Aksesibilitas 100%</span>
                  <span className="text-slate-400">Fasilitas Ramah Disabilitas</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Keterampilan Vokasi</span>
                  <span className="text-slate-400">Batik, Ecoprint &amp; IT</span>
                </div>
              </div>
            </div>

          </div>

          {/* Institutional Information Card - Right Column */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                    Pusat Layanan Disabilitas
                  </span>
                  <h2 className="text-lg font-bold text-white">Profil Singkat Sekolah</h2>
                </div>
                <span className="p-2.5 bg-blue-900/60 rounded-lg text-amber-400 border border-blue-800">
                  <Sparkles className="w-5 h-5" />
                </span>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/80 space-y-1">
                  <span className="text-slate-400 font-semibold block">NPSN / Izin Operasional:</span>
                  <span className="text-white font-bold text-sm">20328901 &bull; Kemenristekdikti RI</span>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/80 space-y-1">
                  <span className="text-slate-400 font-semibold block">Jenjang Pendidikan Khusus:</span>
                  <span className="text-white font-bold text-sm">TKLB, SDLB, SMPLB, &amp; SMALB</span>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/80 space-y-1">
                  <span className="text-slate-400 font-semibold block">Lokasi Geografis:</span>
                  <span className="text-white font-bold text-sm">Jebres, Kota Surakarta (Solo)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#layanan"
                  className="w-full bg-slate-900 hover:bg-slate-950 text-slate-200 border border-slate-700 font-bold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Jelajahi 5 Layanan Khusus Disabilitas</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
