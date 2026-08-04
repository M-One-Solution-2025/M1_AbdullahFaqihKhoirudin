import { NextResponse } from 'next/server';
import { facilitiesData } from '@/data/portalData';

export async function GET() {
  return NextResponse.json(facilitiesData);
}
