import { spawn } from 'child_process';
import * as assert from 'node:assert'
import { describe, it } from 'node:test'

describe('watcher', () => {
  it('exits with code 1 when @parcel/watcher is not installed', async () => {
    const exitCode = new Promise(resolve => {
      const codegen = spawn('npm', ['run', 'codegen', '--', '--watch'], { stdio: ['inherit', 'ignore', 'pipe'] });
      codegen.on('close', (code) => resolve(code));
    });
    assert.equal(await exitCode, 1);
  });

  it('outputs message in stderr when @parcel/watcher is not installed', async () => {
    const codegen = spawn('npm', ['run', 'codegen', '--', '--watch'], { stdio: ['inherit', 'ignore', 'pipe'] });
    const errorData = new Promise(resolve => {
      codegen.stderr.on('data', (data) => resolve(data.toString()));
    });
    assert.equal(await errorData, 'Error: @parcel/watcher is not installed. Please install it to enable watch mode.\n');
  });
});