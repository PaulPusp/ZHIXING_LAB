# ZHIXING Space Lab demo

Next.js App Router and Tailwind CSS static site for GitHub Pages.

## Local development

```sh
npm ci
npm run dev
```

For a project-page production build:

```sh
NEXT_PUBLIC_REPO_NAME=ZHIXING_LAB npm run build
```

The `out/` directory contains the export. The GitHub Actions workflow publishes it on pushes to `main`. In repository Settings → Pages, select **GitHub Actions** as the build and deployment source. The `NEXT_PUBLIC_REPO_NAME` environment variable supplies the project page path; local development uses the root path.

Visible `[FILL: …]` markers indicate content requiring verification before partner-facing publication. Graphics in the demo are labeled illustrative schematics and are not project data.

The displayed ZHIXING mark is a provisional navy/cyan geometric symbol. The earlier user-supplied logo and three-institution artwork remain in `public/` for reference, but are not displayed: the formal relationship between ZHIXING and RCSSTEAP and the lab's institutional placement need confirmation before those marks can imply affiliation. Mission, vision, department/founding date, and the DIKWA source citation remain explicitly unapproved in `content/about.json`. The color roles in `tailwind.config.ts` distinguish bright cyan on dark surfaces from muted teal used as legible text on light surfaces.

## Editing site content

The public `/login/` route forwards to `/admin/index.html`. Decap CMS uses
Decap Turbo for authentication; the editor's HTML and configuration are public,
but access to read/write the Git repository is controlled by Turbo site membership
and its GitHub App installation. No password or API secret belongs in this repo.

Content files in `content/` drive the People, Publications, About, Research, and
existing Project pages. The editor uses an editorial workflow, so saved drafts
create branches and pull requests. Publishing or merging into `main` triggers
`.github/workflows/deploy.yml`. Verify claims and URLs before publication.

In Turbo's site Overview, set:

- **Admin interface URL:** `https://paulpusp.github.io/ZHIXING_LAB/admin/index.html`
- **Config path:** `public/admin/config.yml`
- **Repo / branch:** `PaulPusp/ZHIXING_LAB` / `main`

If GitHub Pages is not enabled, select GitHub Actions in repository Settings →
Pages. Keep only one deployment workflow. This repo uses `deploy.yml`.

The three case-study routes are fixed in `app/projects/`; edit their fields in
the CMS, but adding a fourth project or renaming a slug requires a code route.
Publication and member records may be added or removed entirely in the CMS.
Image uploads are committed to `public/media/`, not stored in Turbo.

## Languages and mobile

The header language selector offers English, Chinese, and French. Selection is
kept on this device and can be shared using `?lang=zh` or `?lang=fr`. Each page
translates its interface and current structured content via
`content/translations.json`. The CMS exposes this file under **Website
translations**. When changing an English sentence or adding a publication or
person, add the exact English sentence and its Chinese and French versions to
that collection. Missing translations fall back to English; do not treat that
fallback as a completed translation. Names, DOI strings and web addresses stay
unchanged. This is client-side localization, so search engines primarily index
the English static export, not distinct language pages.

The layout uses a narrow-screen navigation menu, a separate visible language
control on mobile, responsive cards, and touch-size controls. Team portraits
are sourced from the user-supplied asset bundle; institutional appointments in
that bundle should be checked before asserting them as current externally.
