@echo off
echo Stopping Next.js development server...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /F /PID %%a
echo Server stopped.
pause
