import { NextResponse } from 'next/server';

const document = {
  openapi: '3.1.0',
  info: {
    title: 'Real Bench API',
    version: '1.0.0',
    description: 'Minimal API used by the debugging fixture.',
  },
  tags: [
    {
      name: 'Authentication',
      description: 'Session endpoints',
    },
    {
      name: 'Pages',
      description: 'Wiki page endpoints',
    },
  ],
  paths: {
    '/auth/session': {
      get: {
        tags: ['Authentication'],
        summary: 'Get the current session',
        responses: {
          '200': {
            description: 'Current session',
          },
        },
      },
    },
    '/pages': {
      get: {
        tags: ['Pages'],
        summary: 'List pages',
        responses: {
          '200': {
            description: 'Page collection',
          },
        },
      },
    },
  },
};

export function GET() {
  return NextResponse.json(document);
}
