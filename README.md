# GraphQL CLI Codegen Watch Issue reproduction

## How to reproduce

Install the dependencies

```sh
npm install
```

Run the `dev` script

```sh
npm run dev
```

### Actual behavior

The codegen watch process that spawns in the background exits with code `0` (success), meaning it is not watching.

```
Codegen process exited with code 0
```

There is no description about why it stopped, as it exits as successful, and doesn't output any error in `stderr`

### Expected behavior

The codegen watch process that spawns in the background should exit with code `1` (error), and output in `stderr` the reason why it failed to execute (missing `@parcel/watcher` dependency).
