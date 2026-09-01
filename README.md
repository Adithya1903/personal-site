# adithyaganesh.com (personal site)

One-page personal site. Next.js (App Router) + Tailwind + TypeScript, fully static.

All copy lives in [`content.ts`](content.ts). Edit facts there without touching components. Talks and Writing entries are `CardItem`s: set `href` to `null` and the card renders unlinked until a public URL exists. `PLAN.md` has the full original brief and the remaining polish checklist; the design rules are in `.claude/skills/design-taste-frontend/SKILL.md`.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` must pass clean before shipping.

## Deploy

The repo is linked (via the gitignored `.vercel/` folder) to the Vercel project **adithya-site** under the `adithya-ganeshs-projects` team. To ship:

```bash
vercel --prod
```

That's the whole deploy. Alternatively, connect this GitHub repo to the Vercel project in the dashboard (Project Settings, Git) and every push to `main` deploys production automatically; the repo root is the app root, so it's zero-config. The clean `adithya-site.vercel.app` subdomain was already taken globally, so check the Vercel dashboard for the assigned production URL, or add a custom domain in Project Settings, Domains. After the domain is final, update `metadataBase` in `app/layout.tsx`.
