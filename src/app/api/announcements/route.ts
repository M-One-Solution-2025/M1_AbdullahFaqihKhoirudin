import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const fallbackAnnouncements = [
  {
    id: '1',
    title: 'Pendaftaran Peserta Didik Baru (PPDB) Inklusif Tahun Ajaran 2026/2027',
    category: 'PPDB',
    summary: 'SLB Negeri Surakarta membuka pendaftaran untuk jenjang TKLB, SDLB, SMPLB, dan SMALB dengan asesmen psikologi & pedagogi gratis.',
    content: 'SLB Negeri Surakarta secara resmi membuka Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027. Kami menyediakan tim asesmen interdisipliner (Psikolog, Dokter Spesialis, Terapis, dan Guru Pendidikan Khusus) untuk membantu menentukan program layanan yang paling sesuai bagi putra-putri Bapak/Ibu.',
    date: new Date().toISOString(),
    isImportant: true,
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Prestasi Gemilang Siswa Tunanetra di FLS2N Tingkat Nasional Surakarta',
    category: 'Prestasi',
    summary: 'Selamat kepada ananda Ahmad Fauzi yang meraih Juara 1 Lomba Menyanyi Solo FLS2N PDBK 2026.',
    content: 'Keluarga besar SLB Negeri Surakarta mengucapkan selamat dan sukses atas prestasi membanggakan yang diraih ananda Ahmad Fauzi, siswa jenjang SMALB Tunanetra, yang berhasil menyabet medali emas dalam Festival dan Lomba Seni Siswa Nasional (FLS2N) PDBK 2026 tingkat nasional.',
    date: new Date().toISOString(),
    isImportant: false,
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Workshop Pemberdayaan Vokasional Ecoprint & Batik Shibori untuk Siswa Tunarungu',
    category: 'Kegiatan',
    summary: 'Kerjasama dengan Keraton Surakarta dan UMKM Batik Lokal dalam mencetak wirausahawan disabilitas mandiri.',
    content: 'Dalam rangka meningkatkan kemandirian ekonomi lulusan, SLB Negeri Surakarta menyelenggarakan pelatihan intensif pembuatan Ecoprint dan Batik Shibori. Pelatihan ini dibimbing langsung oleh pengrajin batik terkemuka dari Surakarta.',
    date: new Date().toISOString(),
    isImportant: false,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
  }
];

export async function GET() {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: { date: 'desc' },
    });
    if (announcements && announcements.length > 0) {
      return NextResponse.json(announcements);
    }
    return NextResponse.json(fallbackAnnouncements);
  } catch (error) {
    console.error('Error fetching announcements from DB, returning fallback:', error);
    return NextResponse.json(fallbackAnnouncements);
  }
}
