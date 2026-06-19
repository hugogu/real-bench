# Benchmark Instructions

- Start by running `docker compose up --build`.
- Diagnose each failure from its logs; more than one independent defect exists.
- Do not remove strict TypeScript settings or weaken environment validation at runtime.
- Keep this as a pnpm workspace and retain the multi-stage Docker build.
- Do not hard-code production secrets into an image.
- The task is complete only when `./scripts/verify.sh` passes.
