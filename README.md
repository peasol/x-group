# React + TypeScript + Vite

Minimal setup for React + TS with Vite.

## Dev
```bash
yarn install
yarn dev
# http://localhost:7000


# Build
yarn build
yarn preview


# Plugins
@vitejs/plugin-react (Babel)
@vitejs/plugin-react-swc (SWC)


# ESLint (Optional)
parserOptions: {
  project: ['./tsconfig.node.json', './tsconfig.app.json'],
  tsconfigRootDir: import.meta.dirname,
}


# Vite Config
server: { port: 7000, strictPort: true, host: true }
