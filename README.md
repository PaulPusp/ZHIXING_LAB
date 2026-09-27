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
