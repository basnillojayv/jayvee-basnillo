import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  /**
   * `app/global-not-found.tsx` — the one way to give an unmatched URL both a
   * real 404 status and this site's own 404 page.
   *
   * A plain `app/not-found.tsx` cannot do it: Next requires a root layout above
   * it, and this app has none by design — `(frontend)` and `(payload)` are two
   * root layouts, each supplying its own `<html>`. Next only auto-inserts a
   * default layout for its *built-in* not-found, so a custom one errors with
   * "not-found.tsx doesn't have a root layout".
   *
   * A catch-all route was the previous answer and it returned 200 — Next sets
   * 404 by routing an unmatched URL to an internal `/404` page, and a catch-all
   * matches, so it never got there.
   *
   * This file type renders its own document and needs no layout above it, which
   * is exactly the shape this app needs. Still flagged experimental in 15.4;
   * the flag is the only reason it is declared here rather than just working.
   */
  experimental: {
    globalNotFound: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    localPatterns: [
      // Payload-served uploads (local disk storage, i.e. no blob token set)
      { pathname: '/api/media/file/**' },
      // Built-in placeholder/brand assets in /public/media
      { pathname: '/media/**' },
    ],
    // Uploads served from Vercel Blob once BLOB_READ_WRITE_TOKEN is set.
    remotePatterns: [{ protocol: 'https', hostname: '*.public.blob.vercel-storage.com' }],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
