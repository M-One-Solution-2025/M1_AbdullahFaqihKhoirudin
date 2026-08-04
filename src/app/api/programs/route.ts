import { NextResponse } from 'next/server';
import { specialProgramsData } from '@/data/portalData';

export async function GET() {
  return NextResponse.json(specialProgramsData);
}
