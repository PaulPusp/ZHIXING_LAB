/** Match static public assets to the configured GitHub project-page base path. */
const repoName = process.env.NEXT_PUBLIC_REPO_NAME?.replace(/^\/+|\/+$/g, '') ?? '';
export const assetPath = (asset: string) => `${repoName ? `/${repoName}` : ''}/${asset.replace(/^\/+/, '')}`;
