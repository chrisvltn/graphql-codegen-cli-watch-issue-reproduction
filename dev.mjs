import { spawn } from 'child_process';

const codegen = spawn('npm', ['run', 'codegen', '--', '--watch'], { stdio: ['inherit', 'ignore', 'pipe'] });
codegen.stderr.on('data', (data) => {
  console.error(`Codegen Error: ${data}`);
});

codegen.on('close', (code) => {
  console.log(`Codegen process exited with code ${code}`);
});

spawn('npm', ['run', 'dev:vite'], { stdio: 'inherit' });