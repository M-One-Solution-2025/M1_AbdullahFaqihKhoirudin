import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding SLB Negeri Surakarta database...');

  // Clear existing data
  await prisma.announcement.deleteMany();
  await prisma.specialProgram.deleteMany();
  await prisma.facility.deleteMany();
  await prisma.contactSubmission.deleteMany();

  // 1. Seed Special Programs
  await prisma.specialProgram.createMany({
    data: [
      {
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
    ]
  });

  // 2. Seed Announcements
  await prisma.announcement.createMany({
    data: [
      {
        title: 'Pendaftaran Peserta Didik Baru (PPDB) Inklusif Tahun Ajaran 2026/2027',
        category: 'PPDB',
        summary: 'SLB Negeri Surakarta membuka pendaftaran untuk jenjang TKLB, SDLB, SMPLB, dan SMALB dengan asesmen psikologi & pedagogi gratis.',
        content: 'SLB Negeri Surakarta secara resmi membuka Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027. Kami menyediakan tim asesmen interdisipliner (Psikolog, Dokter Spesialis, Terapis, dan Guru Pendidikan Khusus) untuk membantu menentukan program layanan yang paling sesuai bagi putra-putri Bapak/Ibu.',
        isImportant: true,
        imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Prestasi Gemilang Siswa Tunanetra di FLS2N Tingkat Nasional Surakarta',
        category: 'Prestasi',
        summary: 'Selamat kepada ananda Ahmad Fauzi yang meraih Juara 1 Lomba Menyanyi Solo FLS2N PDBK 2026.',
        content: 'Keluarga besar SLB Negeri Surakarta mengucapkan selamat dan sukses atas prestasi membanggakan yang diraih ananda Ahmad Fauzi, siswa jenjang SMALB Tunanetra, yang berhasil menyabet medali emas dalam Festival dan Lomba Seni Siswa Nasional (FLS2N) PDBK 2026 tingkat nasional.',
        isImportant: false,
        imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Workshop Pemberdayaan Vokasional Ecoprint & Batik Shibori untuk Siswa Tunarungu',
        category: 'Kegiatan',
        summary: 'Kerjasama dengan Keraton Surakarta dan UMKM Batik Lokal dalam mencetak wirausahawan disabilitas mandiri.',
        content: 'Dalam rangka meningkatkan kemandirian ekonomi lulusan, SLB Negeri Surakarta menyelenggarakan pelatihan intensif pembuatan Ecoprint dan Batik Shibori. Pelatihan ini dibimbing langsung oleh pengrajin batik terkemuka dari Surakarta.',
        isImportant: false,
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
      }
    ]
  });

  // 3. Seed Facilities
  await prisma.facility.createMany({
    data: [
      {
        name: 'Ruang Terapi Integrasi Sensorik & Snoezelen',
        category: 'Terapi & Sensorik',
        description: 'Dilengkapi pencahayaan serat optik multi-warna, matras empuk, dan alat stimulasi vestibular untuk menenangkan anak dengan autism & hambatan emosi.',
        imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
      },
      {
        name: 'Laboratorium Komputer & Assistive Technology',
        category: 'Akademik Digital',
        description: 'Unit komputer berperangkat lunak pembaca layar (NVDA/JAWS), keyboard Braille refreshable, dan mouse head-tracker.',
        imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800'
      },
      {
        name: 'Klinik Fisioterapi & Hydrotherapy',
        category: 'Rehabilitasi Fisik',
        description: 'Alat latih berjalan (treadmill adaptif), hydropool hangat, dan tim terapis fisik profesional untuk siswa tunadaksa.',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
      },
      {
        name: 'Bengkel Vokasional & Galeri Karya Siswa',
        category: 'Keterampilan Wirausaha',
        description: 'Tempat produksi batik, sablon, pertukangan kayu ringan, serta galeri pameran hasil karya siswa SLB Negeri Surakarta.',
        imageUrl: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800'
      }
    ]
  });

  console.log('Seeding complete successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
