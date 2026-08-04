'use client';

import React from 'react';
import { Heart, Building, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Institution Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-xl">
                SLB
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight block">SLB NEGERI SURAKARTA</span>
                <span className="text-xs text-amber-400">Pendidikan Inklusif Kota Surakarta</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Sekolah Luar Biasa Negeri Surakarta berada di bawah naungan Dinas Pendidikan Provinsi Jawa Tengah, memberikan layanan pendidikan khusus, fisioterapi, dan bina vokasional mandiri.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-bold text-amber-400 uppercase tracking-wider block">Layanan Disabilitas</span>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Tunanetra (Hambatan Penglihatan)</a></li>
              <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Tunarungu (Hambatan Pendengaran)</a></li>
              <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Tunagrahita (Hambatan Intelektual)</a></li>
              <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Tunadaksa (Hambatan Fisik)</a></li>
              <li><a href="#layanan" className="hover:text-amber-300 transition-colors">Autisme (Sensory Integration)</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-bold text-amber-400 uppercase tracking-wider block">Sekretariat PPDB</span>
            <p className="text-slate-300 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Jl. HOS Cokroaminoto No.28, Jagalan, Jebres, Kota Surakarta, Jawa Tengah 57162</span>
            </p>
            <p className="text-slate-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>(0271) 644-890</span>
            </p>
            <p className="text-slate-300 flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>info@slbnegerisurakarta.sch.id</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; 2026 SLB Negeri Surakarta. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-1.5">
            <span>Dirancang dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>untuk LO &bull; Next.js + SQLite</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
