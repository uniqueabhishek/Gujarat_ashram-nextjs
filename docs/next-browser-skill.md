# Skill: Next.js Browser Inspection (@vercel/next-browser)

This skill enables AI coding agents to inspect, debug, and understand a running Next.js application by providing programmatic access to browser-level data and framework-specific insights.

## Core Capabilities

1. **Component Inspection:** Retrieve React component trees, props, hooks, and state.
2. **PPR Analysis:** Identify static vs. dynamic regions and blocked `Suspense` boundaries.
3. **Network & Logs:** Monitor network requests and console output in real-time.
4. **Visual State:** Capture text-based snapshots or recorded filmstrips of the UI.
5. **Session Management:** Maintain a persistent Chromium instance for fast, iterative inspection.

## Commands Reference

### Initialization
- `npx next-browser open <url>`
  Starts the browser daemon and navigates to the specified URL. Must be called before any inspection commands.
- `npx next-browser close`
  Terminates the browser session and daemon.

### Inspection
- `npx next-browser tree`
  Prints the full React component tree with unique IDs.
- `npx next-browser tree <id>`
  Inspects a specific component's props, hooks, and state.
- `npx next-browser snapshot`
  Captures a text-based representation of the visible UI state.
- `npx next-browser network`
  Lists all network requests made during the session.
- `npx next-browser logs`
  Retrieves browser console logs.
- `npx next-browser ppr`
  Analyzes Partial Prerendering status.

## Usage Guide for AI Agents

### Locating UI Elements
To find a component mentioned by the user (e.g., "the blue button"):
1. Run `npx next-browser tree`.
2. Scan the output for relevant names (e.g., `Button`, `HeroSection`).
3. Use `npx next-browser tree <id>` to verify it has the expected text/props.

### Debugging Hydration/Runtime Errors
If the server reports success but the client is broken:
1. Run `npx next-browser logs` to check for runtime errors.
2. Run `npx next-browser ppr` to see if Suspense boundaries are behaving as expected.

### Verifying Code Changes
After editing a file:
1. Wait for Next.js to hot-reload.
2. Run `npx next-browser snapshot` to confirm the visual change.
3. Run `npx next-browser tree <id>` to ensure props are updated.

## Troubleshooting

- **"browser not open":** Ensure `npx next-browser open <url>` was run and hasn't timed out.
- **Hung Session:** Run `npx next-browser close` followed by a fresh `open` command.
- **Inconsistent Tree:** IDs are valid only until the next full page navigation. Recapture the tree if the URL changes.

> [!IMPORTANT]
> Always ensure the Next.js dev server is running before attempting to open a browser session.
