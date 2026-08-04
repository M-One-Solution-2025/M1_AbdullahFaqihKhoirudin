'use client';

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Accessibility, Calendar, BookOpen, Award, Building } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Official Government Top Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Resmi
            </span>
            <span className="font-medium text-slate-300">
              Dinas Pendidikan Kota Surakarta &bull; SLB Negeri Surakarta
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Surakarta, Jawa Tengah
            </span>
            <a href="tel:0271644890" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> (0271) 644-890
            </a>
            <a href="mailto:info@slbnegerisurakarta.sch.id" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> Kontak PPDB
            </a>
          </div>
        </div>
      </div>

      {/* Main Institution Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Authentic School Crest & Title */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-lg bg-blue-900 border border-blue-800 flex items-center justify-center text-amber-400 font-extrabold text-xl shadow-xs group-hover:bg-blue-950 transition-colors">
            SLB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold text-slate-900 tracking-tight">
                SLB NEGERI SURAKARTA
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                Akreditasi A
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Sekolah Luar Biasa Negeri Inklusif &amp; Terpadu Kota Surakarta
            </p>
          </div>
        </a>

        {/* Humanistic Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#layanan" className="hover:text-blue-800 flex items-center gap-1.5 transition-colors">
            <BookOpen className="w-4 h-4 text-blue-700" /> Layanan Khusus
          </a>
          <a href="#pengumuman" className="hover:text-blue-800 flex items-center gap-1.5 transition-colors">
            <Calendar className="w-4 h-4 text-blue-700" /> Pengumuman &amp; Berita
          </a>
          <a href="#fasilitas" className="hover:text-blue-800 flex items-center gap-1.5 transition-colors">
            <Building className="w-4 h-4 text-blue-700" /> Fasilitas Terapi
          </a>
          <a href="#ppdb" className="hover:text-blue-800 flex items-center gap-1.5 transition-colors">
            <Award className="w-4 h-4 text-blue-700" /> PPDB 2026
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#ppdb"
            className="bg-blue-900 hover:bg-blue-950 text-amber-300 font-bold text-sm px-5 py-2.5 rounded-lg shadow-xs hover:shadow transition-all border border-blue-800 flex items-center gap-2"
          >
            <Accessibility className="w-4 h-4 text-amber-400" />
            <span>Pendaftaran PPDB</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
          aria-label="Buka Navigasi"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
          <a
            href="#layanan"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-800 font-semibold border-b border-slate-100"
          >
            Program Layanan Khusus (A, B, C, D, Autis)
          </a>
          <a
            href="#pengumuman"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-800 font-semibold border-b border-slate-100"
          >
            Pengumuman &amp; Berita Resmi Sekolah
          </a>
          <a
            href="#fasilitas"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-800 font-semibold border-b border-slate-100"
          >
            Fasilitas Terapi &amp; Laboratorium Inklusif
          </a>
          <a
            href="#ppdb"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-800 font-semibold border-b border-slate-100"
          >
            Informasi Pendaftaran PPDB 2026
          </a>
          <a
            href="#ppdb"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-blue-900 text-amber-300 font-bold py-3 rounded-lg shadow-xs"
          >
            Formulir Pendaftaran PPDB
          </a>
        </div>
      )}
    </header>
  );
};
