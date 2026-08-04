import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const programs = await prisma.specialProgram.findMany();
    return NextResponse.json(programs);
  } catch (error) {
    console.error('Error fetching special programs:', error);
    return NextResponse.json({ error: 'Failed to fetch programs' }, { status: 500 });
  }
}
