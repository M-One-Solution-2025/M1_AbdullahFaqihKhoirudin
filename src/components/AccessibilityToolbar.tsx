'use client';

import React, { useState, useEffect } from 'react';
import { useAccessibility } from './AccessibilityContext';
import { ZoomIn, ZoomOut, Contrast, Volume2, VolumeX, RotateCcw } from 'lucide-react';

export const AccessibilityToolbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const {
    fontScale,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    highContrast,
    toggleHighContrast,
    speakText,
    isSpeaking,
    stopSpeaking,
  } = useAccessibility();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside
      aria-label="Panel Aksesibilitas"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 bg-slate-900/95 text-white p-2.5 rounded-full shadow-2xl backdrop-blur border border-slate-700"
    >
      <span className="text-xs font-bold px-2 hidden sm:inline-block text-amber-400">
        Aksesibilitas:
      </span>

      {/* Font Size Controls */}
      <button
        onClick={decreaseFontSize}
        aria-label="Kecilkan Ukuran Teks"
        title="Kecilkan Ukuran Teks"
        className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
      >
        <ZoomOut className="w-4 h-4" />
      </button>

      <button
        onClick={resetFontSize}
        aria-label="Reset Ukuran Teks"
        title={`Reset Ukuran Teks (${Math.round(fontScale * 100)}%)`}
        className="p-2 hover:bg-white/20 rounded-full transition-colors text-xs font-bold text-amber-400"
      >
        <RotateCcw className="w-4 h-4" />
      </button>

      <button
        onClick={increaseFontSize}
        aria-label="Besarkan Ukuran Teks"
        title="Besarkan Ukuran Teks"
        className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
      >
        <ZoomIn className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-white/20 my-auto" />

      {/* High Contrast Toggle */}
      <button
        onClick={toggleHighContrast}
        aria-label="Beralih Mode Kontras Tinggi"
        title={highContrast ? 'Matikan Mode Kontras Tinggi' : 'Aktifkan Mode Kontras Tinggi'}
        className={`p-2 rounded-full transition-colors ${
          highContrast ? 'bg-amber-400 text-slate-950 font-bold' : 'hover:bg-white/20 text-white'
        }`}
      >
        <Contrast className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-white/20 my-auto" />

      {/* Audio Reader */}
      {isSpeaking ? (
        <button
          onClick={stopSpeaking}
          aria-label="Hentikan Suara Pembaca"
          title="Hentikan Suara Pembaca"
          className="p-2 bg-red-600 text-white rounded-full transition-colors animate-pulse"
        >
          <VolumeX className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={() =>
            speakText(
              'Selamat datang di Portal Resmi SLB Negeri Surakarta. Sekolah luar biasa inklusif dan ramah disabilitas di Surakarta.'
            )
          }
          aria-label="Dengarkan Ringkasan Halaman"
          title="Dengarkan Ringkasan Halaman"
          className="p-2 hover:bg-white/20 text-emerald-400 rounded-full transition-colors"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      )}
    </aside>
  );
};
