import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  try {
    // Get the session
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    // Replace this with your actual database query
    const userData = {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      hasPaid: false, // Replace with actual payment status from your database
    };

    return new NextResponse(
      JSON.stringify(userData),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching user data:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}