import Link from 'next/link';
import type { ReactNode } from 'react';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="app-header" data-testid="host-app-header">
        <strong>Acme Developer Portal</strong>
        <nav aria-label="Application">
          <Link href="/">Home</Link>
        </nav>
      </header>
      <main className="app-content">{children}</main>
    </div>
  );
}
