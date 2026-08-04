import { NextResponse } from 'next/server';
import { facilitiesData } from '@/data/portalData';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(facilitiesData);
}
