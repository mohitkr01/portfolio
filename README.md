# Mohit Kumar — Portfolio

Personal portfolio built with React 18, SCSS, EmailJS, and Firebase Hosting.

Live site: https://mohitportfolio-7a6c0.web.app

---

## Tech Stack

- React 18 (Create React App)
- SCSS Modules
- EmailJS — contact form
- Firebase Hosting — deployment
- Font Awesome 5 (CDN)

---

## Local Development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

---

## Deploying to Firebase

### First-time setup (do once per machine)

**1. Check Node.js version**
```bash
node --version
```
Must be v18 or higher.

**2. Install Firebase CLI (compatible with Node 18)**
```bash
npm install -g firebase-tools@11.30.0
```

> Note: Firebase CLI v13+ requires Node 20+. Until Node is upgraded on this machine, use v11.

**3. Log in to Firebase**
```bash
firebase login
```
A browser window opens — sign in with `mohitbarawal@gmail.com` and approve all permissions.

**4. Verify the project is accessible**
```bash
firebase projects:list
```
Should show `mohitportfolio-7a6c0` in the list.

---

### Deploy any branch

**Step 1 — Switch to the branch you want to deploy**
```bash
git checkout <branch-name>
# e.g. git checkout single-page
```

**Step 2 — Run the deploy script**
```bash
npm run deploy
```

This automatically:
1. Builds the production bundle (`npm run build` → `/build` folder)
2. Uploads `/build` to Firebase Hosting (`firebase deploy`)

**Step 3 — Open the live site**
```
https://mohitportfolio-7a6c0.web.app
https://mohitportfolio-7a6c0.firebaseapp.com
```

> Each deploy replaces whatever branch was live before. Only one version is live at a time.

---

### Preview a branch without overwriting the live site (optional)

```bash
firebase hosting:channel:deploy preview-<branch-name>
# e.g. firebase hosting:channel:deploy preview-single-page
```

This creates a temporary URL to test. When satisfied, run `npm run deploy` to go live.

---

### Fix: Re-authenticate if deploy fails

If you see **"401 Unauthorized"** or **"Failed to get Firebase project"**:

```bash
firebase logout
firebase login
```

Then retry `npm run deploy`.

---

### Upgrading Node.js (when ready)

Once Node is upgraded to v20+, update Firebase CLI to the latest version:

```bash
npm install -g firebase-tools
```

To upgrade Node via Homebrew on this Mac:
```bash
# First update Xcode Command Line Tools via System Preferences > Software Update
# Then:
brew install node@20
brew unlink node && brew link node@20 --force
node --version   # should show v20.x.x
```

---

## Branches

| Branch | Description |
|--------|-------------|
| `master` | Original multi-page version |
| `single-page` | Redesigned single-page dark theme (currently live) |

---

## npm Scripts

| Script | What it does |
|--------|-------------|
| `npm start` | Start dev server on localhost:3000 |
| `npm run build` | Build production bundle to `/build` |
| `npm run deploy` | Build + deploy to Firebase (use this to go live) |
| `npm test` | Run tests (non-watch mode) |
