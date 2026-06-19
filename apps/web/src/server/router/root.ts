import { pageRouter } from './routes/pages';

type Router = {
  name: string;
};

export const createRouter = (name: string): Router => ({ name });

export const appRouter = {
  routes: [pageRouter],
  routeCount: 1,
};
