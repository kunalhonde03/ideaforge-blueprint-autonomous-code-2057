import { NextResponse } from 'next/server';
import { parseAutonomousData } from '@/engine/autonomousParser';

export async function POST(req: Request) {
  const payload = await req.json();
  const result = await parseAutonomousData(payload.input || '');
  return NextResponse.json({ success: true, result });
}
