# Project Context & Gotchas

Centralized record of project-specific quirks, constraints, and non-obvious patterns.

## [Environment] - Established Cleanup Patterns

**Symptom:** Workspace might accumulate `.next` artifacts or lingering node processes.
**Root Cause:** Standard Next.js development flow.
**Solution/Workaround:**
- Use `npm run nuke` to forcefully kill node processes and clear the `.next` directory.
- Defined in `package.json`: `"nuke": "taskkill /F /IM node.exe /T & rd /s /q .next"`

**Affected Components:**
- package.json
- node_modules
- .next/

**Last Updated:** 2026-04-09
**Discovered By:** Antigravity (during rule internalization)
**Status:** Active

## [Security] - Hardcoded Admin Credentials

**Symptom:** Admin login credentials visible in source code or client-side logic.
**Root Cause:** Temporary/legacy development shortcuts (`admin/admin123`).
**Solution/Workaround:** DO NOT use these in production. Implement proper JWT/Middleware.
**Affected Components:** Login page, Auth logic.

## [Architecture] - Monolithic Components

**Symptom:** Files like `admin` or main components exceed 800-1600 lines.
**Root Cause:** Logic bundling without modularization.
**Solution/Workaround:** Be prepared for high token usage when reading these files; use `view_file` with line ranges.
**Affected Components:** Admin dashboards, main page components.

## [Testing] - Environment Isolation

**Symptom:** Tests fail or hang due to database contention.
**Root Cause:** Real PostgreSQL usage in tests requires `.env.test` configuration.
**Solution/Workaround:** Ensure `.env.test` is polarized before running `pnpm test`.
**Affected Components:** `tests/` directory, Vitest config.
