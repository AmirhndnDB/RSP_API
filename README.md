**RSP_API**

- **Description**: A small Express-based authentication API originally written in JavaScript and migrated to TypeScript. Provides user registration, login, and basic role-based routing (user/admin).

**Quick Start**

- **Install dependencies**:

```bash
# zsh
npm install
```

- **Development (watch + auto-rebuild)**:

```bash
# zsh
npm run dev        # builds on change and restarts via nodemon
npm run dev:debug  # same with DEBUG=app:main
```

- **Build**:

```bash
npm run build
```

- **Run (production)**:

```bash
npm run build
npm start
# or
npm run prod
```

**Important Scripts**

- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run `dist/index.js` with Node (production)
- `npm run dev` — run `nodemon` configured to recompile and restart on `.ts` changes
- `npm run dev:debug` — same as `dev` with `DEBUG=app:main`
- `npm run build:prod` — compile and run in production mode

**Environment Variables**
Create a `.env` file (not committed). Common variables used by the app:

- `PORT` — port the server listens on (default `3000`)
- `DB_ADDRESS` or `db.address` (in `config` usage) — MongoDB connection string
- `JWT_SECRET` — secret key for signing JWT tokens
- `NODE_ENV` — `development` or `production`

Example `.env`:

```bash
PORT=5000
JWT_SECRET=your_secret_here
# if using config package, see config/*.json for exact key names
```

**Project Structure**

- `index.ts` — application entry (TypeScript)
- `src/Routes/` — route modules (auth, user, admin) and base controller
- `src/Middelwares/` — error handler and auth middlewares
- `src/Module/` — Mongoose models (e.g. `user.ts`)
- `startup/` — startup helpers (`config.ts`, `db.ts`, `logging.ts`)
- `tsconfig.json` — TypeScript configuration
- `nodemon.json` — nodemon config for development
- `dist/` — compiled output (auto-generated)

**Notes & Migration Info**

- The project was migrated from CommonJS/JS to ESM + TypeScript. Source files are `.ts` under `src/` and `startup/` with compiled JS placed in `dist/`.
- The `package.json` name follows npm naming rules (lowercase): `rsp-api`.
- A small type declaration was added for `mongoose-timestamp` (`src/types/mongoose-timestamp.d.ts`). If you add other untyped packages, create similar `.d.ts` files.

**Logging & Debug**

- The app uses the `debug` package with namespace `app:main`. Enable verbose debug logging with:

```bash
# zsh
DEBUG=app:main npm run dev
```

**Running Locally**

1. Ensure MongoDB is running and `db.address` in `config/*.json` or environment points to the DB.
2. `npm install`
3. `npm run dev` to iterate locally, or `npm run build && npm start` for production-like run.

**Commit / CI suggestions**

- Add a `prebuild` or `prepare` script if you want automatic TypeScript compile hooks.
- Add ESLint + Prettier for consistent style; configure for TypeScript + ESM.

**License & Contributing**

- Add a `LICENSE` file and a short `CONTRIBUTING.md` if you plan to accept PRs.

If you'd like, I can:

- Commit the README and the other pending changes.
- Add ESLint and a basic GitHub Actions workflow for build checks.
- Add example Postman collection or OpenAPI spec for the API.
