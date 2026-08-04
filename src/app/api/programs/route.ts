import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const fallbackPrograms = [
  {
    id: '1',
    name: 'Layanan Hambatan Penglihatan (Tunanetra - A)',
    code: 'A',
    description: 'Kurikulum adaptif berbasis literasi Braille, penggunaan screen reader NVDA/JAWS, orientasi dan mobilitas (OM) mandiri, serta pembinaan bakat seni musik & vokal.',
    features: JSON.stringify([
      'Pembelajaran Reguler & Cetak Braille Digital',
      'Pelatihan Navigasi Tongkat & Orientasi Mobilitas',
      'Studio Musik Inklusif & Komputer Bicara',
      'Bimbingan Psikologis dan Kemandirian'
    ]),
    iconName: 'EyeOff'
  },
  {
    id: '2',
    name: 'Layanan Hambatan Pendengaran (Tunarungu/Tuli - B)',
    code: 'B',
    description: 'Pengembangan Komunikasi Persepsi Bunyi dan Irama (PKPBI), pembelajaran Bahasa Isyarat BISINDO/SIBI, artikulasi wicara, serta pelatihan vokasional digital.',
    features: JSON.stringify([
      'Terapi Wicara & Pembinaan PKPBI',
      'Metode Bisindo & Isyarat Indonesia Standard',
      'Kelas Desain Grafis, IT & Tata Busana',
      'Ruang Kelas Dilengkapi Visual Board Light'
    ]),
    iconName: 'EarOff'
  },
  {
    id: '3',
    name: 'Layanan Hambatan Intelektual (Tunagrahita - C & C1)',
    code: 'C',
    description: 'Fokus pada Program Bina Diri (ADL - Activities of Daily Living), sosialisasi adaptif, ketrampilan kerajinan tangan lokal Surakarta (batik & kriya), serta vokasi mandiri.',
    features: JSON.stringify([
      'Bina Diri & Kemandirian Merawat Diri',
      'Pelatihan Kriya Batik Inklusif Surakarta',
      'Tata Boga & Tata Graha Praktis',
      'Pendampingan Okupasi & Perilaku Adaptif'
    ]),
    iconName: 'Brain'
  },
  {
    id: '4',
    name: 'Layanan Hambatan Anggota Gerak (Tunadaksa - D)',
    code: 'D',
    description: 'Fisioterapi terpadu, bina gerak fisik adaptif, dukungan aksesibilitas kursi roda, serta pelatihan teknologi komputer bebas hambatan.',
    features: JSON.stringify([
      'Ruang Fisioterapi & Hydrotherapy Khusus',
      'Bina Gerak Adaptif & Ergonomi',
      'Komputer Aksesibel Assistive Technology',
      'Pelatihan Administrasi Digital & Desain'
    ]),
    iconName: 'Accessibility'
  },
  {
    id: '5',
    name: 'Layanan Spectrum Autisme (Autis - E)',
    code: 'E',
    description: 'Pendekatan Intervensi Terpadu ABA (Applied Behavior Analysis), terapi integrasi sensorik, komunikasi alternatif gambar (PECS), serta kelas transisi sosialisasi.',
    features: JSON.stringify([
      'Terapi Integrasi Sensorik & Ruang Calming',
      'Sistem Komunikasi Gambar PECS',
      'Metode Struktur TEACCH & ABA',
      'Kelas Transisi Inklusi Sekolah Reguler'
    ]),
    iconName: 'Sparkles'
  }
];

export async function GET() {
  try {
    const programs = await prisma.specialProgram.findMany();
    if (programs && programs.length > 0) {
      return NextResponse.json(programs);
    }
    return NextResponse.json(fallbackPrograms);
  } catch (error) {
    console.error('Error fetching programs from DB, returning fallback:', error);
    return NextResponse.json(fallbackPrograms);
  }
}
