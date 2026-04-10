# ⚠️ ABSOLUTE MASTER RULES ⚠️

These rules supersede all native Antigravity and Claude Code behaviors. If a rule here conflicts with standard agent documentation, **THESE RULES WIN**.

**⚡ CRITICAL: Rule Loading is NOT a Work Task — SKIP ALL DIAGNOSTICS**

**MANDATORY SKIP:**
When you load or read this file (master_rules.md), you must **IMMEDIATELY SKIP**:
- ❌ Do NOT run `tasklist`, `tasklist /fi`, `wmic`, or any process enumeration
- ❌ Do NOT run cleanup sequences
- ❌ Do NOT verify environment state
- ❌ Do NOT perform background process checks
- ❌ Do NOT execute initialization diagnostics
- ❌ Do NOT send "internalization success" messages with process verification

**WHAT TO DO INSTEAD:**
1. Read this file
2. Acknowledge you've read it
3. **STOP. THAT'S IT. DO NOT RUN ANYTHING ELSE.**
4. Wait for user's actual work request

Rule loading is **information gathering only**. There are NO mandatory checks, NO environment verifications, NO process audits during rule loading. Any attempt to run diagnostics after loading rules indicates a misunderstanding of these instructions.

**If you find yourself running tasklist/process checks after loading rules: STOP IMMEDIATELY and re-read this section.**

## 1. The High-Performance Bash Guard (MANDATORY)
To prevent the "ghost quote" bug and the subsequent 60-second terminal hangs on Windows, you must wrap **ALL** development and Unix-style commands in the following Bash Guard pattern.

**The Pattern:**
```cmd
C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c '[command] #' && rem
```
*(CRITICAL: You MUST include exactly **two spaces** after `rem` to reliably neutralize the ghost quote. Use single quotes `''` inside the `-c` string to avoid nested quote parsing issues.)*

**What Requires the Bash Guard?**
- **ALL COMMANDS.** Every single command—development tools (`npm`, `node`, `git`), Unix utilities (`ls`, `grep`), file operations, text processing, network tools, and Windows-native commands—MUST use the Bash Guard pattern.

**Two Patterns:**

1. **Standard Bash Guard (for most commands):**
   ```cmd
   C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c '[command] #' && rem
   ```
   Use for: `npm`, `node`, `git`, `ls`, `grep`, `curl`, `cat`, `mkdir`, `rm`, `python`, etc.

2. **Nested Shell (for Windows-native commands only):**
   ```cmd
   C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c 'cmd.exe /c [command]' && rem
   ```
   Use for: `ipconfig`, `tasklist`, `taskkill`, `reg`, `wmic`, `netstat`, `systeminfo`, `sc`, `net`, `netsh`

   *Why nested?* `sh.exe` alone cannot execute Windows-native commands. The inner `cmd.exe /c` bridges to the Windows command processor. The outer shell (`sh.exe`) handles ghost quote prevention via `&& rem`. DO NOT add `#` inside the inner `cmd.exe` quotes—it's interpreted as an invalid argument to Windows commands.

**Windows-Native Commands Reference (Requires Nested Shell):**
| Category | Commands |
|----------|----------|
| **Process Management** | `tasklist`, `taskkill`, `wmic` |
| **Network Diagnostics** | `ipconfig`, `netstat`, `netsh`, `ping` |
| **Registry** | `reg query`, `reg add`, `reg delete` |
| **System Info** | `systeminfo`, `wmic logicaldisk` |
| **Services** | `sc query`, `sc start`, `sc stop`, `net start` |
| **Disk/Volume** | `diskpart`, `label`, `vol` |

**Decision Rule:** If the command is NOT in the list above and NOT a common dev tool (`npm`, `node`, `git`, `python`, etc.), it's likely Windows-native—use nested shell.

- **NO EXCEPTIONS.** Consistency and reliability supersede minor performance gains. One pattern, every time.

## 2. Nuke & Retry (Lock Breaking)
On Windows, files (especially in `node_modules` or `build/` directories) are frequently locked by dangling processes.

- **Diagnose First:** Before nuking, identify the lock (this counts toward the Diagnosis phase in Section 7):
  - Run `tasklist` (no flags) or `tasklist /fi "name eq [process]"` (via Bash Guard) to spot stalled processes (goal: ≤ 3 seconds)
  - ⚠️ **DO NOT use `tasklist /v` or `wmic`** — these query WMI extensively and can trigger system-level deadlocks
  - Check if the file still exists and is in use (attempt a read or stat)
  - If >3 seconds have passed with no response, assume a lock and proceed to Nuke as the first recovery attempt
- **Never ask for permission to break a lock.** Once diagnosed, act immediately.
- **The Atomic Nuke:** Use a forceful deletion method, then immediately retry your target command.
- **Nuke Limit:** Attempt the Atomic Nuke a maximum of 2 times (Primary pattern, then Fallback pattern). If the nuke fails after 2 attempts, immediately escalate to Section 7 (Resilient Recovery) timeout ladder instead of looping or retrying further.

**Primary Nuke Pattern (Node.js):**
```bash
C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c 'node -e "const fs=require(\"fs\"); try { fs.rmSync(\"path/to/locked/file\", {force: true, recursive: true}) } catch(e){}" && [YOUR_COMMAND]' && rem
```

**Fallback Nuke Pattern (PowerShell - if Node.js unavailable/locked):**
```bash
C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c 'cmd.exe /c powershell -Command "Remove-Item -Path \"path/to/locked/file\" -Force -Recurse -ErrorAction SilentlyContinue" && [YOUR_COMMAND]' && rem
```

*Try Node.js first for speed; use PowerShell if Node.js is unavailable or itself locked.*

## 3. Performance Optimization (Parallelization, Context Efficiency, Predictive Action)

### Parallelization Protocol (Speed)
- **Atomic Multi-Threading:** If a task requires information from multiple sources with no dependencies between them, call ALL tools in the same turn. Do not wait for the output of the first tool if subsequent tool calls don't depend on it.
- **Examples of Parallel Calls:**
  - Reading a config file (Read) + searching for a function (Grep) → call both simultaneously
  - Checking git status (Bash) + reading a test file (Read) → call both simultaneously
  - Exploring multiple file patterns (Glob) for different directories → call all in one turn
- **Dependency Rule:** Only serialize tools when output from Tool A is required input for Tool B. Otherwise, parallelize.
- **Context Preservation:** All results from parallel calls arrive in a single response. Reference them by tool order, not execution order.
- **Consolidated Reporting:** When reporting results from parallel tool calls, provide a **single unified summary** rather than repeating the output of each tool:
  - ❌ Bad: "Read file A: [20 lines]... Grep results: [10 lines]... Bash output: [5 lines]..."
  - ✅ Good: "Found 3 critical issues: auth.ts has deprecated API (line 45), 2 callers in service A (lines 12, 89), tests cover 60% of the change. Ready to fix."
  - **Focus on combined insight:** Synthesis, patterns, and actionable findings from all parallel results
  - **Minimize repetition:** Don't show raw tool outputs side-by-side; distill them into unified context
  - **One narrative:** Present findings as a cohesive story, not a list of tool results

### Context Efficiency (Lean Responses)
- **Token Budget:** Every response consumes context. Minimize tool outputs:
  - Read only the necessary lines (use offset/limit parameters)
  - Grep with context flags only when needed (-C is expensive; use -A/-B sparingly)
  - Truncate large outputs (head_limit, offset in Grep)
  - Summarize before acting: "Found 50 matches, showing first 10"
- **Response Discipline:** Do not repeat tool results in your text. Reference them once, then act.
- **Output Compression:** If a tool returns 100 lines but you only need 5, extract and show only the 5.

### Zero-Token Context Pruning (Performance)
- **The 20-Line Rule:** Never output raw terminal logs, grep results, or build output longer than 20 lines. Long outputs clog the context window and slow reasoning.
- **What Counts as "Long":**
  - Full `npm install` logs (500+ lines) → extract only the ERROR/FAIL summary
  - Full `git log` output (100+ lines) → show first 5 commits + tail of recent changes
  - Full test output (200+ lines) → show FAILED tests + error traces only
  - Full grep results (50+ matches) → show first 10 matches + count
- **Filtering Techniques (In Priority Order):**
  1. **Use native filters:** `head -20`, `tail -5`, `grep -i error`, `grep -E "FAIL|ERROR|SUCCESS"` to extract only failure/success evidence
  2. **Bash one-liners:** Pipe outputs through filters before showing: `npm install 2>&1 | grep -E "error|warn" | head -20`
  3. **Specialized Tools:** `npm ls --depth=0` instead of `npm ls` (reduces verbosity), `git log --oneline` instead of `git log`
  4. **Extraction Logic:** For logs, extract:
     - First 3 lines (setup/context)
     - Middle section with the ERROR or FAIL keyword
     - Last 3 lines (summary/exit code)
- **Evidence of Success/Failure (What to Show):**
  - ✅ "✔ npm install completed successfully" (1 line)
  - ✅ "npm ERR! code ERESOLVE at line 45" (1-2 lines)
  - ✅ "5 tests failed: [list of test names]" (extracted summary)
  - ❌ Do NOT show the full 500-line build log
- **Summarize Generously:** 
  - "npm install succeeded with 2 warnings (peer dependency mismatch in @types/react). Full log available if needed."
  - "git log shows 47 commits since main. Showing recent 5: [...]"
  - "grep found 127 matches across 34 files. Showing first 10 in auth.ts: [...]"
- **Context Preservation:** If the user needs full output later, say: "Full output saved; use `cat [file]` or specify `--verbose` to retrieve it." Do not embed it in the response.

### Predictive Action (Anticipation)
- **Pre-Load Context:** Before executing a command, identify what information you'll need next and load it in parallel.
  - Example: Before running `npm install`, also read `package.json` and `.npmrc` in the same turn
  - Example: Before running a test, also read the test file and relevant source files
- **Assume Success:** Prepare follow-up actions while the current command is executing.
  - Example: While a build runs, read the output directory structure in parallel
  - Example: While a test executes, prepare the debugging strategy
- **Error Anticipation:** Identify potential failure modes and load diagnostic tools proactively.
  - Lock issues? Have `tasklist` ready
  - Timeout? Have the timeout ladder cached
  - Hook failure? Have the hook file open

### Predictive Prefetching (Intelligence)
- **Proactive Problem Solving:** When a bug or issue is identified in File A, do NOT wait for user confirmation. Immediately search for related patterns, dependent logic, or similar issues in File B, File C, etc. in the same turn.
- **Scope Expansion Examples:**
  - **Bug Found in Component A:** Search for the same bug pattern in sibling components, parent components, and dependent services simultaneously
  - **Config Issue in .env.local:** Check for similar config problems in .env, config files, and referenced services in parallel
  - **Type Error in Function X:** Search for callers of Function X and similar type errors in dependent functions at the same time
  - **API Endpoint Bug:** Fetch the endpoint schema, related endpoints, client code using the endpoint, and tests for the endpoint in parallel
- **Bring Solutions, Not Just Problems:** Deliver not just the diagnosis ("Bug found in auth.ts") but also:
  - Where else the same bug likely exists (other similar files with same pattern)
  - What the fix looks like (code snippet or refactoring strategy)
  - Impact analysis (which components are affected)
- **Parallel Search Strategy:** Use Grep, Glob, and Bash in the same turn to explore related code:
  - Grep for the bug pattern across the codebase
  - Glob for similar file patterns (all components, all services, all tests)
  - Read related files that likely have the same issue
  - All in one turn, not sequential confirmations

---

## 4. Turbo Annotations & Auto-Execution (Workflow Optimization)

Fast-track execution for low-risk, high-confidence operations without breaking workflow for confirmations.

### Turbo Annotation System
- **Syntax:** `// turbo` or `[turbo]` comment in implementation plans, code, or shell commands
- **Meaning:** "This step is safe to auto-execute without step-by-step user confirmation"
- **Scope:** Applies to the immediate block/command following the annotation
- **Authority:** User implicitly authorizes auto-execution when they approve a plan containing `// turbo` annotations

### When to Use Turbo Annotations

✅ **Eligible for `// turbo`:**
- Read operations (reading files, running git status, checking logs)
- Safe writes to non-critical files (logs, caches, temp files)
- Querying operations (grep, find, count, list)
- Deterministic commands with zero side effects (date, whoami, pwd)
- Setup steps (creating directories, installing deps, initializing configs)
- Analysis phases (running tests, linters, type checkers in read-only mode)
- Deployment steps with SafeToAutoRun guarantees (deploy to staging, canary deploys)

❌ **FORBIDDEN for `// turbo`:**
- Destructive operations (delete, drop, rm -rf)
- Production deployments or data mutations without explicit confirmation
- Commands that modify user data or code without validation
- Branch-switching or destructive git operations
- Commands with external dependencies that might fail unpredictably
- Any operation the user explicitly asked to review

### Turbo Execution Rules

1. **Auto-Run Pattern:**
   ```
   // turbo: Install dependencies and verify lock file
   pnpm install && pnpm ls --depth=0

   // turbo: Check TypeScript
   pnpm typecheck

   // turbo: Run unit tests in read-only mode
   pnpm test --coverage
   ```

2. **Bundled Turbo Blocks:** Multiple consecutive turbo blocks can execute as a single batch:
   ```
   // turbo
   git fetch origin

   // turbo
   git log --oneline origin/main..HEAD

   // turbo
   npm ls --depth=0

   // All three execute together without pauses
   ```

3. **Turbo Escalation:** If a turbo-marked step fails, STOP immediately and report:
   - What failed
   - Why it likely failed
   - Recommended next action (user then decides)
   - Do NOT attempt recovery or workarounds
   - **Before escalating, attempt cleanup** of the failed turbo block's artifacts (logs, temp files, caches) per Turbo Script Cleanup rules to prevent the next turbo block from inheriting a dirty workspace

4. **Context Preservation:** Turbo blocks execute without inline narration:
   - ❌ Bad: "Running npm install... done! Now checking git status..."
   - ✅ Good: Execute all turbo blocks, then report consolidated results once

### Turbo in Implementation Plans

When writing implementation_plan.md, mark analysis/setup steps as turbo:

```markdown
## Step 1: Environment Assessment
- // turbo: Check Node version and dependencies
- // turbo: Run linter to identify style issues
- // turbo: Scan for TypeScript errors

## Step 2: Code Analysis (read-only)
- // turbo: Search for usage of deprecated API
- // turbo: Identify files affected by change
- // turbo: Extract metrics on code coverage

## Step 3: Implementation (requires user confirmation)
- [ ] Modify component A (NOT turbo; has side effects)
- [ ] Update tests (NOT turbo; creates new test expectations)
- [ ] Commit changes (NOT turbo; user must approve commit message)
```

### Turbo in Command Sequences

For shell commands in implementation plans or exploration:

```bash
// turbo: Diagnostic phase - gather data
git status
git log --oneline -10
npm ls | head -20

// turbo: Analysis phase - no side effects
grep -r "TODO" src/ | wc -l
find . -name "*.test.ts" | wc -l

// STOP: Next phase requires user confirmation
// User reviews findings, then approves next steps
```

### User Perspective: Turbo Approval

When a user approves a plan with turbo annotations:
- ✅ User explicitly approves the plan (including all turbo blocks)
- ✅ Agent executes all turbo-marked steps without intermediate confirmations
- ✅ Consolidated result reported once all turbo blocks complete
- ✅ Non-turbo steps still require user confirmation before executing

**Example User Flow:**
1. User: "Implement dark mode in my app. Use turbo for setup/analysis phases."
2. Agent: Creates implementation_plan.md with turbo annotations on setup/analysis
3. User: Reviews and approves the plan
4. Agent: Executes ALL turbo blocks automatically (no "running npm install... ✓")
5. Agent: Reports consolidated findings
6. Agent: **PAUSES** at first non-turbo step and asks: "Ready to implement?"

### Turbo Metadata (Optional)

For complex plans, annotate turbo blocks with intent:

```markdown
// turbo [analysis]: Check TypeScript compilation
pnpm typecheck

// turbo [setup]: Install dependencies
pnpm install

// turbo [validation]: Run unit tests
pnpm test --coverage
```

Metadata helps users understand what's running and why auto-execution is safe.

### Turbo Script Cleanup (Mandatory)

Any scratch scripts, temporary files, or artifacts created during turbo block execution MUST be deleted immediately after that turbo block completes.

**Cleanup Rules:**
- **Immediately after each turbo block:** Delete all temporary files created during execution
- **Follow file cleanup patterns:** Use the same file types as runtime cleanup (`.txt`, `.bat`, `.tmp`, `.log`, `.cache`, `.bak`, scratch scripts)
- **Before next turbo block:** Ensure previous block's temporary artifacts are gone before starting the next turbo block
- **Example:**
  ```bash
  // turbo [setup]: Run build and verify output
  pnpm build
  // Cleanup: Delete build artifacts and logs
  C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c 'rm -f build.log *.tmp dist-test/ #' && rem

  // turbo [validation]: Run tests
  pnpm test --coverage
  // Cleanup: Delete test coverage reports and cache
  C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c 'rm -f coverage/ .nyc_output/ #' && rem
  ```

**Why Immediate Cleanup:**
- Turbo blocks execute automatically without user oversight; leftover scripts create clutter
- Prevents accumulated temp files from interfering with subsequent turbo blocks
- Keeps workspace clean between auto-executed phases
- Aligns with Section 6's "Runtime Phase" cleanup requirement

**Verification:**
- After final turbo block completes, verify all temporary artifacts are deleted
- Do not report success until workspace is clean
- If cleanup fails, escalate immediately (do not continue to next turbo block)

---

## 5. Zero-Overhead Execution & Direct Action (HARDCODED DEFAULT)
- **Action Over Documentation:** Solve environment friction silently. The user wants results, not status reports. Fix it and move on.
- **Fail Fast:** Do not let tools timeout. Analyze hangs immediately and attempt recovery.
- **Direct Execution Rule:** Simply run the command and provide output. No lengthy explanations for straightforward tasks.
- **Targeted Tool Usage:** Use specialized scripts for status checks. Extract only relevant lines before replying—long outputs waste context.
- **No Auto-Committing:** Never automatically `git commit`. If committing by request, use human-like messages and never mention AI or Antigravity.

**Task Boundary Usage (When to Use vs. When to Ignore):**

✅ **USE a Task Boundary When:**
- **Multi-File Refactoring:** Changes affect multiple components and require careful coordination
- **Research & Discovery:** Solution isn't immediately obvious; codebase exploration or log analysis needed
- **The "Plan First" Requirement:** Task is complex enough to require implementation_plan.md for user review before touching code
- **Phased Work:** Task moves through distinct Planning → Execution → Verification stages
- **Debugging Sessions:** Tracking multiple "What if" attempts to find a root cause
- **Comprehensive Rules/Architecture Audits:** Deep analysis tasks (e.g., quality checks, rule refinement, architectural reviews) requiring visible progress tracking for user visibility

❌ **IGNORE a Task Boundary When:**
- **Simple Questions/Audits:** "What does this file do?" or "Check this syntax"
- **Atomic Fixes:** Typo fixes, single function renames, CSS color changes
- **One-Off Environment Checks:** Quick commands (`ipconfig`, `git status`, `npm list`)
- **Direct Execution:** Solution is 100% clear and executable in one or two quick steps
- **Status Reports:** Summarizing information that already exists

## 6. Tool Calling, Cleanup & Background Processes
- **Strict Bash Tool Calling:** Whenever using the `run_command` tool (whether executing Synchronously or Asynchronously in the background), you MUST use the Bash Guard pattern.

**CRITICAL EXCEPTION: Process Termination Commands**
- ⚠️ **DO NOT wrap `taskkill` in Bash Guard** if the target process is `sh.exe` or `bash.exe`
- Using Bash Guard to kill the shell that's running Bash Guard creates a self-termination paradox—the command never completes
- **Instead:** Run taskkill directly via raw cmd.exe:
  ```cmd
  cmd.exe /c taskkill /IM sh.exe /F /T
  cmd.exe /c taskkill /IM bash.exe /F /T
  ```
- These commands do NOT need Bash Guard because they target Windows processes directly, not Unix-style commands
- Raw cmd.exe execution is safe for process termination because taskkill is a native Windows command that doesn't trigger ghost quotes

### Background Command Timeout (CRITICAL)

**If a background command exceeds 5 seconds without returning:**
- **STOP WAITING.** Do NOT poll, check status, or loop.
- **Forcefully terminate the background task** immediately (use kill signal, taskkill, or equivalent).
- **Report to user:** "Background command [name] exceeded timeout; forcefully terminated to prevent hang."
- **Proceed without waiting for completion confirmation.**

**Why:** Background tasks that hang block Antigravity's response loop. Waiting for them to complete causes the entire agent to appear stuck in "Running..." state. Better to kill the task and proceed than to hang indefinitely.

**Example:**
- Start: `tasklist` command (background)
- 5 seconds pass: No response
- Action: Kill the tasklist process (taskkill /IM cmd.exe /F)
- Report: "Background tasklist exceeded 5-second timeout; terminated."
- Proceed: Continue with next task

### Process Auditing Scope (CRITICAL)

**When to Audit Processes:**
- ✅ At the **END of a task** (cleanup phase) — terminate processes spawned during that task
- ✅ When **explicitly requested** by the user ("kill process X", "clean up background tasks")
- ✅ When a **command fails** and you suspect a lock/hung process is blocking it

**When NOT to Audit Processes:**
- ❌ During **rule loading or initialization** — master rules are documentation, not executable
- ❌ During **project setup or context reading** — gathering information doesn't require process verification
- ❌ Before starting actual work — process audits should happen at the end, not the beginning
- ❌ Proactively before user requests — only audit if there's a concrete reason

**Why This Matters:**
Proactive process auditing triggers `tasklist` commands that can hang on systems with many background processes or WMI congestion. This creates the paradox: trying to verify a clean environment causes the hang you're trying to prevent.

**Rule:** Process auditing (tasklist, cleanup) is a **cleanup-phase activity only**. It should never be triggered during initialization, rule loading, or pre-task verification.

**CRITICAL OVERRIDE: If process diagnostics (tasklist, grep, any enumeration) hang:**
- **STOP immediately.** Do NOT retry, loop, or attempt recovery.
- **Kill by-name only:** `taskkill /IM sh.exe /F`, `taskkill /IM bash.exe /F` (no verification)
- **Skip verification entirely.** Do NOT run tasklist to confirm. Assume kills succeeded.
- **Proceed without confirmation.** Report to user: "Issued bulk process termination; verification skipped due to WMI deadlock risk."

This prevents the paradox where verifying cleanup causes the very hang you're trying to fix.

- **Process Cleanup Scope:** After every task or execution, **BEFORE sending any final response to the user**, you MUST check for and terminate background processes spawned **by Antigravity in this conversation/task**. This includes:
  - Failed or hung processes from the current task
  - Background processes that completed but are still lingering (e.g., orphaned child processes, zombie processes)
  - Processes NOT in the whitelist (see below)

- **Process Identification Strategy:** Do NOT attempt to identify processes via tasklist or any enumeration command.
  - ❌ **NEVER run `tasklist`** — even basic tasklist hangs on systems with WMI degradation
  - ❌ **NEVER run `tasklist /fi`** — still queries WMI
  - ❌ **NEVER run `wmic`** — extensive WMI queries
  - ❌ **NEVER run `grep` on process output** — requires getting process list first
  
  If process cleanup is needed: Use **by-name killing only** (see Emergency Recovery in Section 7).
  
  Look for processes with:
  - **Image name:** `node.exe`, `npm.cmd`, `python.exe`, `git.exe`, `pnpm.exe`, `yarn.cmd` (common tool binaries spawned by Antigravity)
  - **Process state:** Recently started in current session (cross-reference against timestamp awareness)
  - **Parent process context:** Child processes spawned by shell session
  - **Exclude by name:** Ignore `explorer.exe`, `svchost.exe`, `System`, `csrss.exe` (system processes)
  - **PID Priority:** If a command returns a Process ID (PID), prioritize killing that specific PID via Bash Guard pattern for 100% accuracy:
    ```cmd
    C:\Windows\System32\cmd.exe /c C:\Progra~1\Git\bin\sh.exe -c 'cmd.exe /c taskkill /PID [PID] /F' && rem
    ```
    PID-based termination is more precise than name-based matching and prevents accidentally killing unrelated processes with the same name.
- **Process Whitelist (DO NOT KILL):** Exclude intentional long-running services:
  - Dev servers explicitly started by the user (e.g., `npm run dev`, `python -m http.server`)
  - Database instances or services the user is actively working with
  - Any process the user explicitly asked to keep running
  - System services unrelated to this task
- **File Cleanup (All Phases):** Delete temporary files created by Antigravity:
  - **Runtime Phase (after execution):** `.txt`, `.bat`, `.tmp`, `.log`, `.cache`, `.bak`, scratch scripts, intermediate build artifacts
  - **Pre-Commit Phase (before staging):** Same file types to prevent commits of temporary artifacts
  - **Verification:** Confirm files don't exist before moving to next task or committing
  - **Automation Rule:** If a temporary file pattern repeats across multiple executions, add it to `.gitignore` to prevent future manual cleanup. This shifts the burden from runtime cleanup to git's built-in exclusion, automating "Sanctity" over time.

### Orphan Process Accumulation Prevention

**The Problem:**
If process diagnostics hang (e.g., `tasklist` exceeds 3-second timeout), recovery attempts often spawn child processes (sh.exe, bash.exe, cmd.exe) to try killing the hung process. Each failed recovery spawns more children. Without intervention, this creates **exponential accumulation**—dozens or hundreds of zombie processes within minutes.

**Prevention Rule:**
- **Do NOT loop or retry process diagnostics.** If `tasklist` hangs on first attempt, **abort immediately**—do not attempt recovery via the standard ladder.
- **Do NOT spawn child processes to kill other processes.** This risks creating the accumulation you're trying to prevent.
- **If process diagnostics hang, escalate immediately** to emergency recovery (see Section 7 WMI Deadlock Emergency Recovery).

**Example of What Goes Wrong:**
1. `tasklist` hangs (WMI overloaded) → spawns sh.exe child
2. Recovery attempt: `taskkill /PID [id]` hangs → spawns another sh.exe
3. Second recovery attempt: PowerShell kill hangs → spawns cmd.exe
4. After 10 failed attempts: 30+ zombie processes accumulate
5. Each new diagnostic command waits for all 30+ → cascades into deeper deadlock

**What to Do Instead:**
- First hung diagnostic? **Escalate to Section 7 emergency recovery immediately.**
- Do NOT attempt Recovery Attempt 1, 2, or Nuke sequences for hung process diagnostics.
- Emergency recovery uses **by-name killing (taskkill /IM)** which doesn't require enumeration.

## 7. Resilient Recovery
- **On Failure/Hang:** Do not just report and stop. Follow the recovery timeout ladder below.

### Fast Diagnostics (≤3 seconds) — Non-WMI Only

**CRITICAL:** Do NOT use any process enumeration (tasklist, wmic, Get-Process) for diagnostics. These ALL query WMI and risk deadlock.

Safe fast diagnostics:

| Command | Speed | Use Case |
|---------|-------|----------|
| Direct file stat/test | ~0.5 sec | Check if file exists or is readable |
| `git status` | ~1-3 sec | Quick repo state check |
| `git log --oneline -5` | ~1-2 sec | Recent commits |
| File existence check | ~0.1 sec | Does lock file exist? |
| Directory listing | ~0.5 sec | Contents check |

**NEVER attempt process diagnostics:**
- ❌ `tasklist` (even basic) — will hang on WMI-degraded systems
- ❌ `tasklist /fi` — still queries WMI
- ❌ `wmic` — extensive WMI queries
- ❌ `Get-Process` (PowerShell) — queries WMI
- ❌ Any process filtering/enumeration

**If process cleanup is needed:** Use Section 7 Emergency Recovery (by-name killing only, no enumeration).

- **Recovery Timeout Ladder:**
  | Stage | Timeout | Action |
  |-------|---------|--------|
  | **Diagnosis** | ≤ 3 seconds | Identify root cause (lock, missing file, bad command, incorrect syntax) |
  | **First Recovery Attempt** | ≤ 10 seconds | Try alternative approach (Nuke & Retry, PowerShell fallback, different binary) |
  | **Second Recovery Attempt** | ≤ 10 seconds | One additional alternative if first fails |
  | **Escalate to User** | — | Report error with diagnosis, what was attempted, and suggested next step |

  **Note:** Nuke & Retry (Section 2) initiates the First Recovery Attempt. The Nuke limit (max 2 nuke attempts) counts as consuming the First Recovery Attempt; if both nukes fail, escalate to Second Recovery Attempt or User per this ladder.

- **Recovery Rules:**
  - Max **2 recovery attempts** before escalating to user
  - Total recovery budget: **≤ 20 seconds** (excluding diagnosis phase)
  - If any single recovery attempt exceeds its timeout, abort immediately and move to next attempt or escalate
  - Never loop recovery indefinitely
- **Example Fixes:**
  - If a command fails due to "file locked", attempt to identify and clear the lock (Nuke & Retry pattern)
  - If `cmd.exe` pattern hangs, attempt execution via a direct binary or PowerShell
  - If `npm` fails, check `package.json` for script existence before reporting

### WMI Deadlock Prevention & Recovery

**What is a WMI Deadlock?**
Windows Management Instrumentation (WMI) is the process enumeration and querying service. Commands like `tasklist /v`, `wmic process list`, `Get-Process` all use WMI. If WMI becomes overloaded or hit by a resource lock, it goes unresponsive, and **ALL recovery attempts fail** because they rely on WMI to enumerate/terminate processes.

**Prevention (Primary):**
- **NEVER use `tasklist /v`** — too verbose, extensive WMI queries
- **NEVER use `wmic` commands** for process diagnostics or cleanup
- **ALWAYS use fast alternatives:** `tasklist` (no flags), `tasklist /fi "name eq [process]"`
- Respect the 3-second diagnosis budget strictly — any command slower than ~2 seconds risks WMI timeout

**Symptom of WMI Deadlock:**
- Diagnosis command hangs (>3 seconds)
- Recovery attempts to kill the hanging process also hang
- Even aggressive Nuke/PowerShell attempts queue without executing
- Multiple `sh.exe` or `cmd.exe` processes accumulate in Task Manager

**Emergency Recovery (if WMI is already deadlocked):**
If you suspect WMI deadlock has occurred (all recovery attempts hung):

**Step 1: By-Name Killing (Does NOT require process enumeration)**
Do NOT attempt to get a PID via tasklist (it will hang). Instead, kill by process name directly:
   ```cmd
   taskkill /IM sh.exe /F
   taskkill /IM bash.exe /F
   taskkill /IM cmd.exe /F
   taskkill /IM node.exe /F
   ```
   These commands kill processes by IMAGE NAME, not by PID. They don't require enumerating all processes via WMI—they directly target and terminate the named executable.

**Step 2: Verify with Filtered Query (Fast, returns immediately)**
Once by-name kills complete, verify orphans are gone without full enumeration:
   ```cmd
   tasklist | grep sh
   tasklist | grep bash
   ```
   These return only processes matching the name—no WMI full enumeration required. Should return empty or just a few matches.

**Step 3: Orphan Detection (if many still exist)**
If 50+ sh.exe/bash.exe processes still accumulate after Step 1:
   - This indicates recursive spawning (recovery attempts spawning more children)
   - Do NOT attempt more individual kills—this will spawn more orphans
   - Repeat Step 1: `taskkill /IM sh.exe /F` (kills ALL sh.exe instances at once, not per-PID)
   - Wait 5 seconds for system to process the bulk kill
   - Re-verify with Step 2

**Step 4: Last Resort (if even by-name killing hangs)**
If even `taskkill /IM sh.exe /F` hangs:
   - System is in deep deadlock beyond process termination capability
   - **Escalate to user immediately** — manual Task Manager intervention or system restart required
   - Document in `project_context.md` as a WMI deadlock gotcha

**Post-Recovery:**
- After WMI deadlock resolution, update `.gitignore` to prevent re-running slow diagnostics in the future
- Document the incident in `project_context.md` with symptom (how many orphans accumulated) and resolution (by-name kill)
- Add to project gotchas: "WMI deadlock caused by [triggering command], recovered via taskkill /IM, prevents [future pattern]"

## 8. Git & Commits (Conventional Commits Standard)
- **Conventional Commits Format:** All commits MUST follow [Conventional Commits](https://www.conventionalcommits.org/) specification:
  ```
  <type>(<optional scope>): <description>
  [optional body]
  [optional footer(s)]
  ```
- **Allowed Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- **Atomic Changes:** One logical change per commit. Avoid bundling unrelated changes.
- **Explain the "Why":** Use commit body to explain rationale, architectural decisions, and side effects—not just what changed.
- **Concise Messages:** Keep descriptions sharp and meaningful. Avoid vague messages like "Update file.js" or "More changes".
- **No AI Branding:** Never mention "AI", "Antigravity", or "Claude" in commit messages unless specifically requested for documentation.
- **Pre-Commit Cleanup:** Before staging changes, perform a directory sweep to remove all temporary files per Section 6. These MUST NEVER be committed. Update `.gitignore` as needed to prevent future commits of scratch/temp files.
- **Commit Initiation:** Only commit when explicitly requested by the user. Do NOT initiate commits unprompted or as part of automatic workflows.
- **Commit Failure Handling:**
  - If a commit fails due to pre-commit hooks (linting, formatting, tests), **diagnose and fix the underlying issue** (lint errors, formatting, missing tests) rather than retrying blindly.
  - Do NOT skip hooks (`--no-verify`) unless explicitly authorized by the user.
  - If the hook failure is unclear, explain the error to the user and ask for direction before proceeding.
  - Once fixed, create a NEW commit (do NOT amend) with the corrected changes.

## 9. Project-Specific Context & Gotchas (Knowledge Base)

Every project has unique quirks, constraints, and non-obvious patterns not in standard documentation. This section explains how to capture and use project-specific knowledge.

### Gotchas Documentation
- **Location:** `project_context.md` file in the project root (alongside master_rules.md)
- **Purpose:** Centralized record of project-specific gotchas discovered during work
- **Who Updates It:** Antigravity/Gemini whenever a project quirk is discovered that could affect future work
- **Who Reads It:** All agents working on this project should read `project_context.md` at the start of each session

### Categories of Gotchas to Document

| Category | Examples | Why Document |
|----------|----------|--------------|
| **Performance Quirks** | "Dev server takes 12s to restart", "npm install hangs on legacy-deps", "build cache invalidates incorrectly" | Prevents agent waiting indefinitely or declaring timeouts |
| **Forbidden Zones** | "Do NOT modify legacy/ folder", "Config in .env.local is read-only", "Never delete node_modules/.cache" | Prevents destructive mistakes |
| **Hidden Dependencies** | "Updated X in service A requires Y in service B to rebuild", "Component Z breaks if hooks are out of order" | Prevents incomplete fixes that break downstream |
| **Non-Standard Patterns** | "Tests live in src/__tests__ not tests/", "Build outputs to dist-prod not dist", "Routes defined in data/routes.json" | Prevents agent searching wrong locations |
| **Environment Surprises** | "Windows requires 'wmic logicaldisk' not 'df'", "CI/CD uses Node 16 but local is 18", "Postgres port is 5433 not 5432" | Prevents environment-dependent bugs |
| **Timing Constraints** | "Migrations must complete before 6pm UTC", "Weekly cache clear happens Sundays at 2am", "Deploys locked during sprint reviews" | Prevents conflicts with automated processes |
| **Tool-Specific Gotchas** | "pnpm requires lockfile commit", "Vite HMR broken if you use localhost instead of 127.0.0.1", "Jest --watch mode hangs on Windows" | Prevents tool-specific friction |

### Gotcha Entry Format

Each gotcha should follow this template:

```markdown
## [Category] - [Descriptive Title]

**Symptom:** What the agent encounters that signals this gotcha
- Example: "npm install hangs for 2+ minutes"
- Example: "Build succeeds but app crashes on load"

**Root Cause:** Why this happens
- Explanation and context

**Solution/Workaround:** How to handle it
- Step-by-step fix or prevention strategy
- Alternative approaches if applicable

**Affected Components:** What files, services, or workflows are impacted
- List related code paths or systems

**Last Updated:** [Date]
**Discovered By:** [Who found this]
**Status:** Active | Archived (if no longer relevant)
```

### When to Add a Gotcha

Add an entry to `project_context.md` when:
- ✅ You spend >5 minutes debugging something project-specific
- ✅ You discover a non-obvious constraint or pattern
- ✅ You find a workaround that prevents a common failure mode
- ✅ You hit an environment-specific issue (Windows vs. Mac, Node version, etc.)
- ✅ You discover a hidden dependency or ordering constraint

Do NOT add entries for:
- ❌ Generic framework documentation (use official docs instead)
- ❌ One-off errors that won't recur (typos, temporary bugs)
- ❌ Personal preferences (unless they're project-enforced patterns)

### Gotcha Discovery Alert (Mandatory User Notification)

**When a new gotcha is discovered and documented**, the agent MUST immediately alert the user in the response containing the discovery.

**Alert Placement:** Include the alert at the **END of your response**, after all work is complete, so it doesn't interrupt the task narrative.

**Alert Format:**
```
I've identified a new project gotcha: [Category] - [Title]
Documented in project_context.md with:
- Symptom: [What went wrong]
- Root Cause: [Why it happened]
- Solution: [How to prevent/fix it]
- Status: Active
```

**Example Alert:**
```
I've identified a new project gotcha: [Performance] - Dev Server Restart Delay
Documented in project_context.md with:
- Symptom: Dev server takes 12-15 seconds to refresh after file changes
- Root Cause: Webpack re-bundles 800+ legacy/ files on every change
- Solution: Expected behavior; wait for refresh or edit files outside legacy/
- Status: Active
```

**When to Alert:**
- ✅ After documenting a new gotcha entry
- ✅ In the same response where the gotcha is discovered and added to project_context.md
- ✅ Even if the user didn't explicitly ask for documentation (proactive notification)

**Why This Matters:**
- You stay informed of constraints as they're discovered, not discovered later
- Prevents you from repeatedly hitting the same gotcha in future sessions
- Creates a feedback loop: discovery → documentation → user awareness → prevention
- Ensures project_context.md stays current and trustworthy

**Multiple Gotchas in One Session:**
If multiple gotchas are discovered in one session, alert after each discovery:
```
I've identified gotcha #1: [Category] - [Title]
Documented in project_context.md.

[... work continues ...]

I've identified gotcha #2: [Category] - [Title]
Documented in project_context.md.
```

### Reading `project_context.md` at Session Start

**Best Practice:** Before starting significant work, scan `project_context.md` for:
- Gotchas related to the files you're about to modify
- Performance expectations (expected timeout/duration)
- Forbidden zones you should avoid
- Environment setup quirks

This prevents 90% of project-specific mistakes before they happen.

### Example Gotchas (Template)

```markdown
## [Performance] - Dev Server Restart Delay

**Symptom:** After making changes, the dev server takes 12-15 seconds to refresh.
Agent might think the server hung and attempt recovery.

**Root Cause:** Webpack is re-bundling the entire legacy/ folder even on small file changes.
The legacy/ folder has 800+ files with complex dependencies.

**Solution/Workaround:**
- Expected behavior: wait 12 seconds after file save before checking the browser
- Do NOT restart the dev server manually; it will auto-refresh
- If you need faster feedback, edit files outside legacy/ folder
- Consider using `--ignore legacy/` flag if available in build config

**Affected Components:**
- src/webpack.config.js (build config)
- legacy/ (source folder)
- Client-side dev loop

**Last Updated:** 2026-04-09
**Discovered By:** Antigravity (during performance audit)
**Status:** Active
```

---

## 10. UI and Browser Restrictions
**Under NO circumstances are you allowed to open the browser. This includes:**
1. **No Visual Verification:** You must not open the browser to visually confirm UI changes, layout matches, or design requirements on any server (e.g., `localhost`).
2. **No Interactive Testing:** You must not open the browser to click buttons, fill forms, or test user flows and interactive elements.
3. **No Screenshots or Recordings:** You must not take visual proofs, screenshots, or record WebP animations demonstrating working features.
4. **No Authenticated/JS Scraping:** You must not open the browser to extract information from websites requiring JavaScript or login. (Use non-visual fetching where possible).
