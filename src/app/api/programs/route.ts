import { NextResponse } from 'next/server';
import { specialProgramsData } from '@/data/portalData';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(specialProgramsData);
}
