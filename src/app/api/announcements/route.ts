import { NextResponse } from 'next/server';
import { announcementsData } from '@/data/portalData';

export async function GET() {
  return NextResponse.json(announcementsData);
}
