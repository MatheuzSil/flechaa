// app/api/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '../../../../utils/auth';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const decoded = await verifyToken(token);

  if (!decoded || typeof decoded !== 'object' || !decoded.userId) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    return NextResponse.json({ name: decoded.name }, { status: 200 });
  } catch (err) {
    console.error('Failed to fetch user:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
