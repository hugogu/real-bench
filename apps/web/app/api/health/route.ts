import { statusSchema } from '@real-bench/shared';
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    statusSchema.parse({
      service: 'real-bench',
      state: 'ready',
    }),
  );
}
