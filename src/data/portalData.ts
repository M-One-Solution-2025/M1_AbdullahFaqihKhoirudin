export interface SpecialProgram {
  id: string;
  name: string;
  code: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface Announcement {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  imageUrl?: string;
  isImportant: boolean;
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  programType: string;
  message: string;
  createdAt: string;
}

export const specialProgramsData: SpecialProgram[] = [
  {
    id: '1',
    name: 'Layanan Hambatan Penglihatan (Tunanetra - A)',
    code: 'A',
    description: 'Kurikulum adaptif berbasis literasi Braille, penggunaan screen reader NVDA/JAWS, orientasi dan mobilitas (OM) mandiri, serta pembinaan bakat seni musik & vokal.',
    features: [
      'Pembelajaran Reguler & Cetak Braille Digital',
      'Pelatihan Navigasi Tongkat & Orientasi Mobilitas',
      'Studio Musik Inklusif & Komputer Bicara',
      'Bimbingan Psikologis dan Kemandirian'
    ],
    iconName: 'EyeOff'
  },
  {
    id: '2',
    name: 'Layanan Hambatan Pendengaran (Tunarungu/Tuli - B)',
    code: 'B',
    description: 'Pengembangan Komunikasi Persepsi Bunyi dan Irama (PKPBI), pembelajaran Bahasa Isyarat BISINDO/SIBI, artikulasi wicara, serta pelatihan vokasional digital.',
    features: [
      'Terapi Wicara & Pembinaan PKPBI',
      'Metode Bisindo & Isyarat Indonesia Standard',
      'Kelas Desain Grafis, IT & Tata Busana',
      'Ruang Kelas Dilengkapi Visual Board Light'
    ],
    iconName: 'EarOff'
  },
  {
    id: '3',
    name: 'Layanan Hambatan Intelektual (Tunagrahita - C & C1)',
    code: 'C',
    description: 'Fokus pada Program Bina Diri (ADL - Activities of Daily Living), sosialisasi adaptif, ketrampilan kerajinan tangan lokal Surakarta (batik & kriya), serta vokasi mandiri.',
    features: [
      'Bina Diri & Kemandirian Merawat Diri',
      'Pelatihan Kriya Batik Inklusif Surakarta',
      'Tata Boga & Tata Graha Praktis',
      'Pendampingan Okupasi & Perilaku Adaptif'
    ],
    iconName: 'Brain'
  },
  {
    id: '4',
    name: 'Layanan Hambatan Anggota Gerak (Tunadaksa - D)',
    code: 'D',
    description: 'Fisioterapi terpadu, bina gerak fisik adaptif, dukungan aksesibilitas kursi roda, serta pelatihan teknologi komputer bebas hambatan.',
    features: [
      'Ruang Fisioterapi & Hydrotherapy Khusus',
      'Bina Gerak Adaptif & Ergonomi',
      'Komputer Aksesibel Assistive Technology',
      'Pelatihan Administrasi Digital & Desain'
    ],
    iconName: 'Accessibility'
  },
  {
    id: '5',
    name: 'Layanan Spectrum Autisme (Autis - E)',
    code: 'E',
    description: 'Pendekatan Intervensi Terpadu ABA (Applied Behavior Analysis), terapi integrasi sensorik, komunikasi alternatif gambar (PECS), serta kelas transisi sosialisasi.',
    features: [
      'Terapi Integrasi Sensorik & Ruang Calming',
      'Sistem Komunikasi Gambar PECS',
      'Metode Struktur TEACCH & ABA',
      'Kelas Transisi Inklusi Sekolah Reguler'
    ],
    iconName: 'Sparkles'
  }
];

export const announcementsData: Announcement[] = [
  {
    id: '1',
    title: 'Pendaftaran Peserta Didik Baru (PPDB) Inklusif Tahun Ajaran 2026/2027',
    category: 'PPDB',
    summary: 'SLB Negeri Surakarta membuka pendaftaran untuk jenjang TKLB, SDLB, SMPLB, dan SMALB dengan asesmen psikologi & pedagogi gratis.',
    content: 'SLB Negeri Surakarta secara resmi membuka Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027. Kami menyediakan tim asesmen interdisipliner (Psikolog, Dokter Spesialis, Terapis, dan Guru Pendidikan Khusus) untuk membantu menentukan program layanan yang paling sesuai bagi putra-putri Bapak/Ibu.',
    date: '2026-08-01T08:00:00.000Z',
    isImportant: true,
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Prestasi Gemilang Siswa Tunanetra di FLS2N Tingkat Nasional Surakarta',
    category: 'Prestasi',
    summary: 'Selamat kepada ananda Ahmad Fauzi yang meraih Juara 1 Lomba Menyanyi Solo FLS2N PDBK 2026.',
    content: 'Keluarga besar SLB Negeri Surakarta mengucapkan selamat dan sukses atas prestasi membanggakan yang diraih ananda Ahmad Fauzi, siswa jenjang SMALB Tunanetra, yang berhasil menyabet medali emas dalam Festival dan Lomba Seni Siswa Nasional (FLS2N) PDBK 2026 tingkat nasional.',
    date: '2026-07-25T08:00:00.000Z',
    isImportant: false,
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Workshop Pemberdayaan Vokasional Ecoprint & Batik Shibori untuk Siswa Tunarungu',
    category: 'Kegiatan',
    summary: 'Kerjasama dengan Keraton Surakarta dan UMKM Batik Lokal dalam mencetak wirausahawan disabilitas mandiri.',
    content: 'Dalam rangka meningkatkan kemandirian ekonomi lulusan, SLB Negeri Surakarta menyelenggarakan pelatihan intensif pembuatan Ecoprint dan Batik Shibori. Pelatihan ini dibimbing langsung oleh pengrajin batik terkemuka dari Surakarta.',
    date: '2026-07-15T08:00:00.000Z',
    isImportant: false,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
  }
];

export const facilitiesData: Facility[] = [
  {
    id: '1',
    name: 'Ruang Terapi Integrasi Sensorik & Snoezelen',
    category: 'Terapi & Sensorik',
    description: 'Dilengkapi pencahayaan serat optik multi-warna, matras empuk, dan alat stimulasi vestibular untuk menenangkan anak dengan autism & hambatan emosi.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Laboratorium Komputer & Assistive Technology',
    category: 'Akademik Digital',
    description: 'Unit komputer berperangkat lunak pembaca layar (NVDA/JAWS), keyboard Braille refreshable, dan mouse head-tracker.',
    imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Klinik Fisioterapi & Hydrotherapy',
    category: 'Rehabilitasi Fisik',
    description: 'Alat latih berjalan (treadmill adaptif), hydropool hangat, dan tim terapis fisik profesional untuk siswa tunadaksa.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Bengkel Vokasional & Galeri Karya Siswa',
    category: 'Keterampilan Wirausaha',
    description: 'Tempat produksi batik, sablon, pertukangan kayu ringan, serta galeri pameran hasil karya siswa SLB Negeri Surakarta.',
    imageUrl: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800'
  }
];

// Helper functions for browser localStorage persistence
const STORAGE_KEY = 'slb_surakarta_ppdb_submissions';

export const getLocalSubmissions = (): ContactSubmission[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading localStorage:', e);
    return [];
  }
};

export const saveLocalSubmission = (submission: Omit<ContactSubmission, 'id' | 'createdAt'>): ContactSubmission => {
  const current = getLocalSubmissions();
  const newSubmission: ContactSubmission = {
    ...submission,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  const updated = [newSubmission, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return newSubmission;
};
