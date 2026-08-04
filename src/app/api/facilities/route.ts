import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const fallbackFacilities = [
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

export async function GET() {
  try {
    const facilities = await prisma.facility.findMany();
    if (facilities && facilities.length > 0) {
      return NextResponse.json(facilities);
    }
    return NextResponse.json(fallbackFacilities);
  } catch (error) {
    console.error('Error fetching facilities from DB, returning fallback:', error);
    return NextResponse.json(fallbackFacilities);
  }
}
