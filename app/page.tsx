import Link from 'next/link';
import { AppShell } from '@/components/AppShell';

export default function HomePage() {
  return (
    <AppShell>
      <section className="home-card">
        <h1>Developer portal</h1>
        <p>The application works, but the interactive API reference has a layout regression.</p>
        <Link href="/api-docs">Open API documentation</Link>
      </section>
    </AppShell>
  );
}
