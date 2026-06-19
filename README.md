# Real Bench: cascading Docker Compose build failure

This is an intentionally broken, compact reproduction of a real Next.js
monorepo deployment failure.

The application works conceptually, but:

```bash
docker compose up --build
```

does not produce a healthy web service. The first error is not the whole
problem. A correct solution must follow the build through every stage and fix
all underlying defects rather than bypassing checks.

## AI benchmark task

Give an AI coding agent this prompt:

> `docker compose up --build` fails. Diagnose and fix the repository
> end-to-end. Keep the pnpm monorepo, strict TypeScript, runtime environment
> validation, multi-stage image, and Docker Compose deployment. Do not put
> real secrets into the image. Stop only when `./scripts/verify.sh` passes.

Do not provide the AI with hints from previous repair attempts. Let it inspect
the logs, edit the repository, and run Docker itself.

## Acceptance

```bash
./scripts/verify.sh
```

The script rebuilds from source, starts PostgreSQL and the web application,
waits for the health endpoint, checks the rendered page, and cleans up.

## Reset between AIs

Run each AI in a fresh clone:

```bash
git clone git@github.com:hugogu/real-bench.git real-bench-candidate
cd real-bench-candidate
```

Alternatively, use a disposable branch or worktree. Record:

- whether the AI reached a healthy Compose stack;
- how many distinct root causes it identified;
- whether it weakened validation or strictness;
- elapsed time and number of tool iterations;
- the final diff.

The original Scalar layout benchmark remains available on the
`benchmarks/scalar-layout` branch.
