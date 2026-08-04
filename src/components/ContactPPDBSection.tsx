'use client';

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export const ContactPPDBSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programType: 'Layanan Hambatan Penglihatan (Tunanetra - A)',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          programType: 'Layanan Hambatan Penglihatan (Tunanetra - A)',
          message: '',
        });
      } else {
        const err = await res.json();
        setErrorMsg(err.error || 'Gagal mengirim formulir pendaftaran.');
      }
    } catch (e) {
      console.error(e);
      setErrorMsg('Koneksi terputus. Silakan coba beberapa saat lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="ppdb" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Institutional Contact Info - Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full inline-block">
              Pendaftaran &amp; Asesmen Gratis
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Konsultasi PPDB &amp; Pendaftaran Siswa Baru
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Silakan isi formulir konsultasi resmi di bawah ini. Tim psikolog dan terapis pendamping SLB Negeri Surakarta akan segera menghubungi Anda untuk menentukan jadwal asesmen awal.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 text-slate-700 text-sm">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900">Alamat Sekolah:</span>
                  <span>Jl. HOS Cokroaminoto No.28, Jagalan, Jebres, Kota Surakarta, Jawa Tengah 57162</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900">Telepon &amp; WhatsApp PPDB:</span>
                  <span>(0271) 644-890 &bull; +62 812-3456-7890</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900">Email Resmi Layanan:</span>
                  <span>info@slbnegerisurakarta.sch.id</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Jaminan Kerahasiaan Data:</strong> Seluruh data calon siswa disimpan secara pribadi di database lokal SLB Negeri Surakarta.
              </span>
            </div>

          </div>

          {/* Form Card - Right Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-300 rounded-2xl p-6 sm:p-10 shadow-xs">
            {success ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-extrabold text-slate-900">Formulir Berhasil Diterima!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Data calon siswa telah tersimpan dengan aman di database lokal SQLite SLB Negeri Surakarta. Tim sekretariat PPDB akan segera menghubungi kontak telepon Anda.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-blue-900 text-amber-300 font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-blue-950 transition-colors"
                >
                  Kirim Formulir Konsultasi Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Formulir Konsultasi &amp; Pendaftaran PPDB 2026
                  </h3>
                  <p className="text-xs text-slate-500">Lengkapi data orang tua / wali di bawah ini (* wajib diisi)</p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-100 border border-red-200 text-red-800 text-xs font-bold rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Nama Lengkap Orang Tua / Wali *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Contoh: Drs. Bambang Wijaya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Nomor Telepon / WhatsApp Active *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Alamat Surat Elektronik (Email) *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="programType" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Pilihan Program Layanan
                    </label>
                    <select
                      id="programType"
                      value={formData.programType}
                      onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white text-slate-900"
                    >
                      <option>Layanan Hambatan Penglihatan (Tunanetra - A)</option>
                      <option>Layanan Hambatan Pendengaran (Tunarungu - B)</option>
                      <option>Layanan Hambatan Intelektual (Tunagrahita - C)</option>
                      <option>Layanan Hambatan Anggota Gerak (Tunadaksa - D)</option>
                      <option>Layanan Spectrum Autisme (Autis - E)</option>
                      <option>Asesmen &amp; Konsultasi Awal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Catatan Khusus Mengenai Calon Siswa *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Sebutkan usia anak, riwayat Asesmen/Terapi sebelumnya, serta harapan Bapak/Ibu..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none bg-white text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-900 hover:bg-blue-950 text-amber-300 font-bold py-3.5 rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 border border-blue-800"
                >
                  {submitting ? (
                    <span>Proses Memasukkan Ke SQLite...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Kirim Pendaftaran &amp; Simpan Ke Database Lokal</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
