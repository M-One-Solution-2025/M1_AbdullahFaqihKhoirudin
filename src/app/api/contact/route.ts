import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, programType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || '',
        programType: programType || 'Umum / PPDB',
        message,
      },
    });

    return NextResponse.json({ success: true, data: submission });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
