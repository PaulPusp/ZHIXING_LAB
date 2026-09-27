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
