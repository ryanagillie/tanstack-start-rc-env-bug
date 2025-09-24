# Tanstack Start RC Environement Variable Bug

## Run
```
pnpm install
pnpm run dev
```

process.env.GREETING should be returned from the loader as it's a server function and should be able to access process.env, but undefined is returned instead
