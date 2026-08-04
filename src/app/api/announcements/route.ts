import { NextResponse } from 'next/server';
import { announcementsData } from '@/data/portalData';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(announcementsData);
}
