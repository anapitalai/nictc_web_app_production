# Napitalai logo and favicons

- `napitalai-logo.svg`: portable, outlined horizontal logo (no font dependency). Use on light backgrounds.
- `napitalai-logo-editable.svg`: same logo with editable text; uses Noto Sans with DejaVu Sans fallback.
- `napitalai-logo.png`, `.webp`: 1440 × 400 transparent versions for raster use.
- `napitalai-logo.jpg`: 1440 × 400 version on a white background (JPEG cannot store transparency).
- `napitalai-icon.svg`: scalable, square rounded-N mark for favicons and compact placements.
- `napitalai-icon-3d.blend` and `napitalai-icon-3d.png`: editable Blender scene and 1024 × 1024 transparent render of the raised icon badge; regenerate with `napitalai-icon-3d.py`.
- `favicon.ico`: contains 16, 32, 48, 64 and 256 px images.
- `favicon-{size}x{size}.png`: 16, 32, 48, 64, 96, 180, 192, 256 and 512 px icon sizes.
- `apple-touch-icon.png`: 180 × 180; `android-chrome-192x192.png` and `android-chrome-512x512.png`: mobile app icons.
- `site.webmanifest`: web app identity and icon declarations.

Copy the favicon files and manifest into your website's public/static root, then add these tags inside its `<head>` (adjust the paths if needed):

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/svg+xml" href="/napitalai-icon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">

Use `napitalai-logo.svg` in the site header with meaningful alt text, e.g. “Napitalai Information, Communication Technology and Training Consultancy”.
