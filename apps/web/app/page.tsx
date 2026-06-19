import { statusSchema } from '@real-bench/shared';
import { env } from '@/src/server/config/env';
import { appRouter } from '@/src/server/router/root';

export default function HomePage() {
  const status = statusSchema.parse({
    service: 'real-bench',
    state: 'ready',
  });

  return (
    <main>
      <h1>Cascading Docker Build Benchmark</h1>
      <p data-testid="status">
        {status.service} is {status.state}
      </p>
      <p>{appRouter.routeCount} routes initialized.</p>
      <small>Configured for {new URL(env.DATABASE_URL).hostname}.</small>
    </main>
  );
}
