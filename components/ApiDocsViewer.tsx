'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';

export function ApiDocsViewer() {
  return <ApiReferenceReact configuration={{ url: '/api/openapi.json' }} />;
}
