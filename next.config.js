const repo = process.env.NEXT_PUBLIC_REPO_NAME || '';
const basePath = repo ? `/${repo.replace(/^\/+|\/+$/g, '')}` : '';
/** @type {import('next').NextConfig} */
module.exports = { output: 'export', trailingSlash: true, basePath, assetPrefix: basePath || undefined, images: { unoptimized: true } };
