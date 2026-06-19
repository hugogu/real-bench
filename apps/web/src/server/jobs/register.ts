import type PgBoss from 'pg-boss';

type Payload = {
  pageId: string;
};

export async function registerIndexer(boss: PgBoss) {
  await boss.work<Payload>(
    'index-page',
    { teamSize: 2, batchSize: 1 },
    async (job) => {
      console.log(job.data.pageId);
    },
  );
}
