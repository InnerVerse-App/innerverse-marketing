// Empty PostCSS config. Without this file, PostCSS walks up the
// directory tree and discovers the parent PWA repo's
// postcss.config.mjs (which loads Tailwind 3) — that config then
// tries to process this site's Tailwind 4 syntax and crashes the
// build. We use Tailwind 4 via @tailwindcss/vite (in astro.config.mjs),
// so no PostCSS plugins are needed here.
export default {};
