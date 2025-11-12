import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Adjust the path if your prisma client is elsewhere

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Insert the message into the Messages table using Prisma
    const message = await prisma.messages.create({
      data: {
        name: data.full_name,
        email: data.email,
        subject: data.service, // Map your form's "service" field to the subject
        message: data.message,
      },
    });

    // Return a successful response
    return NextResponse.json({ success: true, message });
  } catch (error) {
    console.error('Failed to save message:', error);
    return NextResponse.json({ success: false, error: 'Failed to save message' }, { status: 500 });
  }
}
