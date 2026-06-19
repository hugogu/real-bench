#!/bin/sh
set -eu

compose() {
  docker compose "$@"
}

cleanup() {
  compose down --volumes --remove-orphans >/dev/null 2>&1 || true
}

trap cleanup EXIT
cleanup

compose up --build --detach

attempt=0
until body="$(curl --fail --silent http://127.0.0.1:${WEB_PORT:-3100}/api/health 2>/dev/null)"; do
  attempt=$((attempt + 1))
  if [ "$attempt" -ge 30 ]; then
    compose ps
    compose logs web
    exit 1
  fi
  sleep 2
done

echo "$body" | grep -q '"state":"ready"'
curl --fail --silent "http://127.0.0.1:${WEB_PORT:-3100}/" \
  | grep -q 'Cascading Docker Build Benchmark'

echo "Docker Compose benchmark passed."
